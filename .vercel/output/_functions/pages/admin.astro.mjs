import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BWUWzUga.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DCFL-TYu.mjs';
import { ArrowLeft, Users, Package, Tag } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { supabase, user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  let totalUsers = 0;
  let totalListings = 0;
  let totalCategories = 0;
  const [
    { count: usersCount },
    { count: listingsCount },
    { count: categoriesCount }
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("listings").select("*", { count: "exact", head: true }),
    supabase.from("categories").select("*", { count: "exact", head: true })
  ]);
  totalUsers = usersCount || 0;
  totalListings = listingsCount || 0;
  totalCategories = categoriesCount || 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Panel" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-paper text-ink"> <!-- Admin Navbar --> <nav class="bg-white border-b border-line sticky top-0 z-40"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16 sm:h-20"> <div class="flex items-center space-x-4"> <span class="text-xl font-bold tracking-tighter text-ink uppercase">Admin Panel</span> <span class="text-line">|</span> <a href="/dashboard" class="mono-label text-[10px] text-accent hover:text-ink transition-colors flex items-center gap-2"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 14 })} Powrót do Dashboardu
</a> </div> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> <div class="mb-12"> <h1 class="text-3xl font-bold tracking-tight uppercase">
Przegląd Systemu
</h1> <p class="mono-label text-[10px] text-accent mt-2 uppercase">
Zarządzanie danymi, użytkownikami i kategoriami
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <!-- Stat Card 1 --> <div class="bg-white border border-line p-8 shadow-sm flex items-center gap-6"> <div class="w-14 h-14 bg-paper flex items-center justify-center text-ink border border-line"> ${renderComponent($$result2, "Users", Users, { "size": 24 })} </div> <div> <div class="mono-label text-[10px] text-accent uppercase mb-1">
Użytkownicy
</div> <div class="text-3xl font-bold tracking-tight"> ${totalUsers} </div> </div> </div> <!-- Stat Card 2 --> <div class="bg-white border border-line p-8 shadow-sm flex items-center gap-6"> <div class="w-14 h-14 bg-paper flex items-center justify-center text-ink border border-line"> ${renderComponent($$result2, "Package", Package, { "size": 24 })} </div> <div> <div class="mono-label text-[10px] text-accent uppercase mb-1">
Ogłoszenia
</div> <div class="text-3xl font-bold tracking-tight"> ${totalListings} </div> </div> </div> <!-- Stat Card 3 --> <div class="bg-white border border-line p-8 shadow-sm flex items-center gap-6"> <div class="w-14 h-14 bg-paper flex items-center justify-center text-ink border border-line"> ${renderComponent($$result2, "Tag", Tag, { "size": 24 })} </div> <div> <div class="mono-label text-[10px] text-accent uppercase mb-1">
Kategorie
</div> <div class="text-3xl font-bold tracking-tight"> ${totalCategories} </div> </div> </div> </div> <!-- Quick Actions --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <a href="/admin/users" class="group bg-white border border-line p-8 shadow-sm hover:border-accent transition-all duration-300"> <div class="flex items-center gap-4 mb-4"> <div class="w-10 h-10 bg-paper flex items-center justify-center text-ink border border-line group-hover:bg-ink group-hover:text-white transition-all"> ${renderComponent($$result2, "Users", Users, { "size": 18 })} </div> <h2 class="text-xl font-bold tracking-tight uppercase">
Zarządzaj Użytkownikami
</h2> </div> <p class="text-xs text-accent leading-relaxed">
Przeglądaj zarejestrowanych użytkowników, nadawaj
                        uprawnienia administratora lub usuwaj konta.
</p> </a> <a href="/admin/categories" class="group bg-white border border-line p-8 shadow-sm hover:border-accent transition-all duration-300"> <div class="flex items-center gap-4 mb-4"> <div class="w-10 h-10 bg-paper flex items-center justify-center text-ink border border-line group-hover:bg-ink group-hover:text-white transition-all"> ${renderComponent($$result2, "Tag", Tag, { "size": 18 })} </div> <h2 class="text-xl font-bold tracking-tight uppercase">
Zarządzaj Kategoriami
</h2> </div> <p class="text-xs text-accent leading-relaxed">
Dodawaj, usuwaj lub edytuj kategorie ogłoszeń, aby
                        utrzymać porządek w systemie.
</p> </a> </div> </main> </div> ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/index.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
