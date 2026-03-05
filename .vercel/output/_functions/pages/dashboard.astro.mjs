import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_BPtd2oIL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C64yfHWI.mjs';
import { LogOut, User, Settings, Plus } from 'lucide-react';
import { U as UserAvatar } from '../chunks/UserAvatar_PuqkXw6f.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { supabase, user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  const { data: listings } = await supabase.from("listings").select("*").eq("seller_id", user.id).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-paper text-ink"> <nav class="bg-white border-b border-line sticky top-0 z-40"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16 sm:h-20"> <div class="flex items-center space-x-4"> <a href="/" class="text-xl font-bold tracking-tighter text-ink uppercase">TARNÓW.TECH</a> <span class="text-line">|</span> <span class="mono-label text-[10px] text-accent">Panel Użytkownika</span> </div> <div class="flex items-center space-x-6"> <span class="mono-label text-[10px] text-accent hidden sm:block">Witaj, ${profile?.username || user.email} </span> <form method="POST" action="/api/auth/signout"> <button class="mono-label text-[10px] text-accent hover:text-red-500 transition-colors flex items-center gap-2"> ${renderComponent($$result2, "LogOut", LogOut, { "size": 14 })} Wyloguj
</button> </form> </div> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> <div class="flex flex-col lg:flex-row gap-12"> <!-- Sidebar --> <aside class="w-full lg:w-64 space-y-6"> <div class="bg-white border border-line p-6 shadow-sm"> <div class="flex items-center gap-4 mb-8"> ${renderComponent($$result2, "UserAvatar", UserAvatar, { "url": profile?.avatar_url, "fallback": profile?.full_name || user.email, "size": "md", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/UserAvatar", "client:component-export": "UserAvatar" })} <div> <div class="font-bold text-sm tracking-tight"> ${profile?.username || "U\u017Cytkownik"} </div> <div class="mono-label text-[9px] text-accent mt-0.5"> ${profile?.role === "admin" ? "ADMINISTRATOR" : "U\u017BYTKOWNIK"} </div> </div> </div> <div class="space-y-1"> <a href="/dashboard" class="flex items-center gap-3 px-3 py-2 bg-paper text-ink font-bold border-l-2 border-ink text-xs transition-all"> ${renderComponent($$result2, "UserIcon", User, { "size": 16 })} MOJE OGŁOSZENIA
</a> <a href="/dashboard/profile" class="flex items-center gap-3 px-3 py-2 text-accent hover:text-ink hover:bg-paper text-xs transition-all"> ${renderComponent($$result2, "Settings", Settings, { "size": 16 })} USTAWIENIA PROFILU
</a> ${profile?.role === "admin" && renderTemplate`<a href="/admin" class="flex items-center gap-3 px-3 py-4 mt-6 bg-ink text-white font-bold text-[10px] tracking-widest uppercase hover:bg-accent transition-all text-center justify-center">
PANEL ADMINA
</a>`} </div> </div> </aside> <!-- Main Content --> <div class="flex-1 space-y-8"> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-line p-6 sm:p-8 shadow-sm"> <div> <h2 class="text-xl font-bold tracking-tight">
Twoje Ogłoszenia
</h2> <p class="mono-label text-[10px] text-accent mt-1 uppercase">
Zarządzaj swoimi ofertami na rynku
</p> </div> <a href="/dashboard/listings/create" class="bg-ink text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-lg shadow-ink/10 flex items-center gap-2"> ${renderComponent($$result2, "Plus", Plus, { "size": 16 })} Dodaj ogłoszenie
</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${listings && listings.length > 0 ? listings.map((listing) => renderTemplate`<div class="bg-white border border-line overflow-hidden hover:border-accent transition-all duration-300 group"> <div class="h-48 bg-paper relative overflow-hidden"> ${listing.image_urls && listing.image_urls.length > 0 ? renderTemplate`<img${addAttribute(
    listing.image_urls[0],
    "src"
  )}${addAttribute(listing.title, "alt")} class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-accent mono-label text-[10px]">
BRAK ZDJĘCIA
</div>`} </div> <div class="p-6"> <div class="text-lg font-bold tracking-tight mb-1 truncate"> ${listing.title} </div> <div class="text-sm font-bold text-accent mb-4"> ${listing.price || "CENA DO NEGOCJACJI"} </div> <p class="text-xs text-accent line-clamp-2 leading-relaxed"> ${listing.description} </p> <div class="mt-6 pt-4 border-t border-line flex justify-between items-center"> <span class="mono-label text-[9px] text-accent"> ${new Date(
    listing.created_at
  ).toLocaleDateString()} </span> <a${addAttribute(`/dashboard/listings/edit/${listing.id}`, "href")} class="text-[10px] font-bold text-ink hover:text-accent transition-colors uppercase">
Edytuj &rarr;
</a> </div> </div> </div>`) : renderTemplate`<div class="col-span-full py-16 text-center bg-white border border-line border-dashed"> <div class="mono-label text-[10px] text-accent mb-4 uppercase">
Nie masz jeszcze żadnych ogłoszeń
</div> <a href="/dashboard/listings/create" class="text-xs font-bold text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-line">
Stwórz swoje pierwsze ogłoszenie &rarr;
</a> </div>`} </div> </div> </div> </main> </div> ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/index.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
