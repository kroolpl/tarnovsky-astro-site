import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BWUWzUga.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DCFL-TYu.mjs';
import { H as Header } from '../../chunks/Header_DnIaIViz.mjs';
import { $ as $$Footer } from '../../chunks/Footer_CQqcpzKm.mjs';
import { User, Settings, Upload, Save } from 'lucide-react';
import { U as UserAvatar } from '../../chunks/UserAvatar_PuqkXw6f.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const { supabase, user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  let error = "";
  let success = false;
  let { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const username = formData.get("username")?.toString();
    const full_name = formData.get("full_name")?.toString();
    const avatarFile = formData.get("avatar");
    let avatar_url = profile?.avatar_url;
    if (avatarFile && avatarFile.size > 0) {
      const fileExt = avatarFile.name.split(".").pop();
      const fileName = `${user.id}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, avatarFile, { upsert: true });
      if (uploadError) {
        error = `B\u0142\u0105d przesy\u0142ania awatara: ${uploadError.message}`;
      } else {
        const { data: publicUrlData } = supabase.storage.from("avatars").getPublicUrl(filePath);
        avatar_url = publicUrlData.publicUrl;
      }
    }
    if (!error) {
      const updates = {
        id: user.id,
        username,
        full_name,
        avatar_url
      };
      const { error: updateError } = await supabase.from("profiles").upsert(updates);
      if (updateError) {
        error = updateError.message;
      } else {
        success = true;
        profile = { ...profile, ...updates };
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ustawienia Profilu" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-paper text-ink"> ${renderComponent($$result2, "Header", Header, { "client:load": true, "user": user, "profile": profile, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header", "client:component-export": "Header" })} <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"> <div class="flex flex-col lg:flex-row gap-12"> <!-- Sidebar --> <aside class="w-full lg:w-64 space-y-6"> <div class="bg-white border border-line p-6 shadow-sm"> <div class="flex items-center gap-4 mb-8"> ${renderComponent($$result2, "UserAvatar", UserAvatar, { "url": profile?.avatar_url, "fallback": profile?.full_name || user.email, "size": "md", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/UserAvatar", "client:component-export": "UserAvatar" })} <div> <div class="font-bold text-sm tracking-tight"> ${profile?.username || "U\u017Cytkownik"} </div> <div class="mono-label text-[9px] text-accent mt-0.5 uppercase"> ${profile?.role === "admin" ? "ADMINISTRATOR" : "U\u017BYTKOWNIK"} </div> </div> </div> <div class="space-y-1"> <a href="/dashboard" class="flex items-center gap-3 px-3 py-2 text-accent hover:text-ink hover:bg-paper text-xs transition-all"> ${renderComponent($$result2, "UserIcon", User, { "size": 16 })} MOJE OGŁOSZENIA
</a> <a href="/dashboard/profile" class="flex items-center gap-3 px-3 py-2 bg-paper text-ink font-bold border-l-2 border-ink text-xs transition-all"> ${renderComponent($$result2, "Settings", Settings, { "size": 16 })} USTAWIENIA PROFILU
</a> ${profile?.role === "admin" && renderTemplate`<a href="/admin" class="flex items-center gap-3 px-3 py-4 mt-6 bg-ink text-white font-bold text-[10px] tracking-widest uppercase hover:bg-accent transition-all text-center justify-center">
PANEL ADMINA
</a>`} </div> </div> </aside> <!-- Main Content --> <div class="flex-1 space-y-8"> <div class="bg-white border border-line p-6 sm:p-8 shadow-sm"> <div class="mb-8 border-b border-line pb-6"> <h1 class="text-xl font-bold tracking-tight uppercase">
Ustawienia Profilu
</h1> <p class="mono-label text-[10px] text-accent mt-1 uppercase">
Zarządzaj swoimi danymi publicznymi
</p> </div> <form method="POST" enctype="multipart/form-data" class="space-y-10"> ${error && renderTemplate`<div class="bg-red-50 text-red-600 border border-red-200 p-4 mono-label text-[10px] uppercase tracking-wider"> ${error} </div>`} ${success && renderTemplate`<div class="bg-emerald-50 text-emerald-600 border border-emerald-200 p-4 mono-label text-[10px] uppercase tracking-wider">
Profil został zaktualizowany!
</div>`}  <div class="flex flex-col sm:flex-row items-center gap-8 p-6 bg-paper border border-line border-dashed"> <div class="relative group"> ${renderComponent($$result2, "UserAvatar", UserAvatar, { "url": profile?.avatar_url, "fallback": profile?.full_name || user.email, "size": "lg", "className": "ring-4 ring-white", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/UserAvatar", "client:component-export": "UserAvatar" })} <div class="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"> ${renderComponent($$result2, "Upload", Upload, { "size": 20, "className": "text-white" })} </div> </div> <div class="flex-grow space-y-3 text-center sm:text-left"> <h3 class="text-sm font-bold uppercase tracking-tight text-ink">Twoje zdjęcie profilowe</h3> <p class="text-xs text-accent">Prześlij zdjęcie, aby inni mogli Cię rozpoznać.</p> <label class="inline-flex items-center gap-2 bg-ink hover:bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 cursor-pointer transition-all"> ${renderComponent($$result2, "Upload", Upload, { "size": 14 })} <span>Wybierz plik</span> <input type="file" name="avatar" accept="image/*" class="hidden" id="avatar-input"> </label> <div id="file-name" class="text-[9px] mono-label text-accent h-4 uppercase mt-2 italic"></div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="md:col-span-2"> <label class="block mono-label text-[10px] text-accent mb-2 uppercase tracking-tight font-bold">
Email (Tylko do odczytu)
</label> <input type="email"${addAttribute(user.email, "value")} disabled class="w-full bg-paper border border-line px-4 py-3 text-accent cursor-not-allowed font-mono text-xs uppercase"> </div> <div> <label class="block mono-label text-[10px] text-accent mb-2 uppercase tracking-tight font-bold">
Nazwa użytkownika
</label> <input type="text" name="username"${addAttribute(profile?.username || "", "value")} class="w-full bg-white border border-line px-4 py-3 text-ink focus:outline-none focus:border-ink transition-all font-medium text-sm" placeholder="np. jan_kowalski"> </div> <div> <label class="block mono-label text-[10px] text-accent mb-2 uppercase tracking-tight font-bold">
Imię i Nazwisko
</label> <input type="text" name="full_name"${addAttribute(profile?.full_name || "", "value")} class="w-full bg-white border border-line px-4 py-3 text-ink focus:outline-none focus:border-ink transition-all font-medium text-sm" placeholder="Jan Kowalski"> </div> </div> <div class="pt-8 border-t border-line flex justify-end"> <button type="submit" class="flex items-center gap-2 bg-ink text-white font-bold uppercase tracking-widest text-[10px] px-8 py-4 hover:bg-accent transition-all shadow-xl shadow-ink/10"> ${renderComponent($$result2, "Save", Save, { "size": 16 })} Zapisz zmiany
</button> </div> </form> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })} ${renderScript($$result, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/profile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/profile.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/profile.astro";
const $$url = "/dashboard/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
