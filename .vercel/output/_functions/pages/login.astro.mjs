import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BWUWzUga.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DCFL-TYu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { supabase, user } = Astro2.locals;
  if (user) {
    return Astro2.redirect("/dashboard");
  }
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    if (email && password) {
      const { error: supaError } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (supaError) {
        error = supaError.message;
      } else {
        return Astro2.redirect("/dashboard");
      }
    } else {
      error = "Please enter both email and password.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logowanie" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-paper flex items-center justify-center p-4"> <div class="w-full max-w-sm"> <div class="bg-white border border-line p-8 shadow-sm"> <div class="mb-8"> <h1 class="text-2xl font-bold text-ink tracking-tighter uppercase">
Zaloguj się
</h1> <p class="mono-label text-[10px] mt-1 text-accent">
Dostęp do Twoich ogłoszeń
</p> </div> ${error && renderTemplate`<div class="mb-6 border-l-2 border-red-500 bg-red-50 p-4 text-ink text-xs font-medium"> ${error} </div>`} <form method="POST" class="space-y-6"> <div> <label class="mono-label text-[10px] mb-2 block">Email</label> <input type="email" name="email" required class="w-full bg-paper border border-line px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium" placeholder="Twój adres email"> </div> <div> <label class="mono-label text-[10px] mb-2 block">Hasło</label> <input type="password" name="password" required class="w-full bg-paper border border-line px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium" placeholder="••••••••"> </div> <button type="submit" class="w-full bg-ink text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-md">
Zaloguj
</button> </form> <div class="mt-8 pt-6 border-t border-line text-center"> <p class="text-[10px] mono-label text-accent uppercase">
Nie masz konta?
</p> <a href="/register" class="mt-2 inline-block text-xs font-bold text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-line">Stwórz konto &rarr;</a> </div> </div> <div class="mt-6 text-center"> <a href="/" class="text-[10px] mono-label text-accent hover:text-ink transition-colors">&larr; Powrót do strony głównej</a> </div> </div> </div> ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/login.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
