import { d as defineMiddleware, s as sequence } from './chunks/index_CBmMOajw.mjs';
import { createServerClient } from '@supabase/ssr';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C5swUOX9.mjs';
import 'piccolore';
import './chunks/astro/server_BWUWzUga.mjs';
import 'clsx';

const createSupabase = (cookies) => {
  return createServerClient(
    "https://pfxcereyisbqlvzavqae.supabase.co",
    "sb_publishable_Uy59u9_TZwRQqkSgrV8OWQ_lelhylGk",
    {
      cookies: {
        get(key) {
          return cookies.get(key)?.value;
        },
        set(key, value, options) {
          cookies.set(key, value, options);
        },
        remove(key, options) {
          cookies.delete(key, options);
        }
      }
    }
  );
};

const protectedRoutes = ["/dashboard", "/admin"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const supabase = createSupabase(context.cookies);
  context.locals.supabase = supabase;
  const { data: { user } } = await supabase.auth.getUser();
  context.locals.user = user;
  context.locals.profile = null;
  if (user) {
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    context.locals.profile = profile;
  }
  const requestPath = new URL(context.request.url).pathname;
  const isProtected = protectedRoutes.some((route) => requestPath.startsWith(route));
  if (isProtected && !user) {
    return context.redirect("/login");
  }
  if (requestPath.startsWith("/admin")) {
    if (!user) {
      return context.redirect("/login");
    }
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    if (!profile || profile.role !== "admin") {
      return context.redirect("/dashboard");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
