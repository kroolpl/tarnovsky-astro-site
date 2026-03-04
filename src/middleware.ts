import { defineMiddleware } from 'astro:middleware';
import { createSupabase } from './lib/supabase';

// Protected routes to check
const protectedRoutes = ['/dashboard', '/admin'];

export const onRequest = defineMiddleware(async (context, next) => {
    const supabase = createSupabase(context.cookies);

    // Set the Supabase client in locals so routes can access it
    context.locals.supabase = supabase;

    // Get current session/user
    const { data: { user } } = await supabase.auth.getUser();
    context.locals.user = user;

    const requestPath = new URL(context.request.url).pathname;

    // Simple protection check
    const isProtected = protectedRoutes.some((route) => requestPath.startsWith(route));

    if (isProtected && !user) {
        return context.redirect('/login');
    }

    // Very simple admin check
    if (requestPath.startsWith('/admin')) {
        if (!user) {
            return context.redirect('/login');
        }
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (!profile || profile.role !== 'admin') {
            return context.redirect('/dashboard');
        }
    }

    return next();
});
