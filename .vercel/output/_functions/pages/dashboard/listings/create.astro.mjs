import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../../chunks/astro/server_BPtd2oIL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_C64yfHWI.mjs';
import { H as Header } from '../../../chunks/Header_DnIaIViz.mjs';
import { ArrowLeft, ClipboardList, CheckCircle2, Save, Building2, Briefcase, Wrench, Gift, Car } from 'lucide-react';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  const { supabase, user, profile } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  let error = "";
  const { data: categories } = await supabase.from("categories").select("id, name, slug").order("name");
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const price = formData.get("price")?.toString();
    const location = formData.get("location")?.toString();
    const category_id = formData.get("category_id")?.toString();
    const imageFiles = formData.getAll("images");
    let image_urls = [];
    const category_details = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("details_")) {
        const fieldName = key.replace("details_", "");
        category_details[fieldName] = value;
      }
    }
    if (title) {
      const validImages = imageFiles.filter((file) => file.size > 0).slice(0, 3);
      for (const imageFile of validImages) {
        const fileExt = imageFile.name.split(".").pop() || "jpg";
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;
        const { error: uploadError } = await supabase.storage.from("listings").upload(filePath, imageFile);
        if (uploadError) {
          error = `B\u0142\u0105d przesy\u0142ania zdj\u0119cia: ${uploadError.message}`;
          break;
        } else {
          const { data } = supabase.storage.from("listings").getPublicUrl(filePath);
          image_urls.push(data.publicUrl);
        }
      }
      if (!error) {
        const { error: insertError } = await supabase.from("listings").insert({
          title,
          description,
          price,
          location,
          category_id: category_id || null,
          image_urls,
          seller_id: user.id,
          category_details
        });
        if (insertError) {
          error = insertError.message;
        } else {
          return Astro2.redirect("/dashboard");
        }
      }
    } else {
      error = "Title is required.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dodaj Og\u0142oszenie | TARN\xD3W.TECH", "data-astro-cid-rliquca2": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "user": user, "profile": profile, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header", "client:component-export": "Header", "data-astro-cid-rliquca2": true })} ${maybeRenderHead()}<div class="min-h-screen bg-paper text-ink pt-28 pb-16" data-astro-cid-rliquca2> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-rliquca2> <div class="mb-12 flex items-center justify-between" data-astro-cid-rliquca2> <a href="/dashboard" class="flex items-center gap-2 text-accent hover:text-ink transition-colors mono-label text-[10px] uppercase font-bold tracking-wider group" data-astro-cid-rliquca2> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16, "className": "group-hover:-translate-x-1 transition-transform", "data-astro-cid-rliquca2": true })} Wróć do panelu
</a> <div class="flex items-center gap-4" data-astro-cid-rliquca2> <div id="step-indicator" class="flex items-center gap-2" data-astro-cid-rliquca2> <div class="w-2 h-2 rounded-full bg-ink" id="dot-1" data-astro-cid-rliquca2></div> <div class="w-8 h-[1px] bg-line" data-astro-cid-rliquca2></div> <div class="w-2 h-2 rounded-full bg-line" id="dot-2" data-astro-cid-rliquca2></div> </div> <span class="mono-label text-[10px] text-accent uppercase tracking-widest" id="step-text" data-astro-cid-rliquca2>Krok 1 z 2</span> </div> </div>  <div id="step-1" class="animate-in fade-in slide-in-from-bottom-4 duration-500" data-astro-cid-rliquca2> <div class="text-center mb-12" data-astro-cid-rliquca2> <span class="mono-label text-[10px] text-accent mb-3 block uppercase tracking-[0.2em]" data-astro-cid-rliquca2>Wybierz kategorię</span> <h1 class="text-4xl font-bold text-ink tracking-tighter uppercase mb-4" data-astro-cid-rliquca2>Co chcesz ogłosić?</h1> <p class="text-accent max-w-lg mx-auto text-sm font-medium" data-astro-cid-rliquca2>
Wybierz odpowiednią kategorię, abyśmy mogli dopasować formularz i wyświetlić Twoje ogłoszenie we właściwym miejscu.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-rliquca2> ${categories?.map((cat) => {
    let Icon = ClipboardList;
    let desc = "Standardowe og\u0142oszenie lokalne";
    if (cat.slug === "nieruchomosci") {
      Icon = Building2;
      desc = "Mieszkania, domy, stancje i pokoje bezpo\u015Brednio.";
    }
    if (cat.slug === "praca") {
      Icon = Briefcase;
      desc = "Oferty pracy w gastronomii, handlu i us\u0142ugach.";
    }
    if (cat.slug === "uslugi") {
      Icon = Wrench;
      desc = "Fachowcy, remonty, korepetycje i uroda.";
    }
    if (cat.slug === "oddam-zamienie") {
      Icon = Gift;
      desc = "Oddaj za darmo lub wymie\u0144 si\u0119 ze s\u0105siadami.";
    }
    if (cat.slug === "motoryzacja") {
      Icon = Car;
      desc = "Samochody, skutery, cz\u0119\u015Bci i opony lokalnie.";
    }
    if (cat.slug === "drobne-zlecenia") {
      Icon = ClipboardList;
      desc = "Szybka pomoc, koszenie trawy, wyw\xF3z mebli.";
    }
    return renderTemplate`<button type="button" class="category-card group bg-white border border-line p-8 text-left hover:border-ink transition-all duration-300 relative overflow-hidden flex flex-col items-start gap-4 shadow-sm hover:shadow-2xl hover:shadow-ink/5"${addAttribute(cat.id, "data-id")}${addAttribute(cat.slug, "data-slug")}${addAttribute(cat.name, "data-name")} data-astro-cid-rliquca2> <div class="w-12 h-12 bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-all duration-300 rounded-none relative z-10" data-astro-cid-rliquca2> ${renderComponent($$result2, "Icon", Icon, { "size": 24, "data-astro-cid-rliquca2": true })} </div> <div class="relative z-10" data-astro-cid-rliquca2> <h3 class="font-bold text-lg uppercase tracking-tight mb-2 group-hover:text-accent transition-colors" data-astro-cid-rliquca2>${cat.name}</h3> <p class="text-xs text-accent font-medium leading-relaxed opacity-80 group-hover:opacity-100" data-astro-cid-rliquca2>${desc}</p> </div> <div class="absolute -bottom-4 -right-4 text-line/20 group-hover:text-accent/10 transition-colors pointer-events-none transform -rotate-12 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-700" data-astro-cid-rliquca2> ${renderComponent($$result2, "Icon", Icon, { "size": 120, "data-astro-cid-rliquca2": true })} </div> </button>`;
  })} </div> </div>  <div id="step-2" class="hidden" data-astro-cid-rliquca2> <div class="bg-white border border-line shadow-2xl relative animate-in fade-in zoom-in-95 duration-500" data-astro-cid-rliquca2> <div class="absolute top-0 left-0 w-2 h-full bg-ink" data-astro-cid-rliquca2></div> <div class="p-8 md:p-10 border-b border-line flex items-center justify-between" data-astro-cid-rliquca2> <div class="flex items-center gap-6" data-astro-cid-rliquca2> <button id="back-to-step-1" class="flex items-center justify-center w-10 h-10 border border-line hover:border-ink hover:bg-paper transition-all" data-astro-cid-rliquca2> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 18, "data-astro-cid-rliquca2": true })} </button> <div data-astro-cid-rliquca2> <span class="mono-label text-[10px] text-accent mb-1 block flex items-center gap-2" data-astro-cid-rliquca2>
KREATYOR OGŁOSZENIA / <span id="selected-category-name" class="text-ink font-bold" data-astro-cid-rliquca2>MOTORYZACJA</span> </span> <h2 class="text-2xl font-bold text-ink tracking-tighter uppercase" data-astro-cid-rliquca2>Szczegóły Ogłoszenia</h2> </div> </div> <div class="hidden sm:block" data-astro-cid-rliquca2> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "size": 32, "class": "text-line", "data-astro-cid-rliquca2": true })} </div> </div> <form id="listing-form" method="POST" enctype="multipart/form-data" class="p-8 md:p-10 space-y-8" data-astro-cid-rliquca2> <input type="hidden" name="category_id" id="hidden-category-id" data-astro-cid-rliquca2> ${error && renderTemplate`<div class="bg-red-50 border-l-2 border-red-500 text-ink p-4 text-[11px] font-medium animate-in fade-in slide-in-from-top-2" data-astro-cid-rliquca2>
BŁĄD SYSTEMU: ${error} </div>`} <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" data-astro-cid-rliquca2> <div class="md:col-span-2" data-astro-cid-rliquca2> <label class="mono-label text-[10px] block text-accent mb-2 uppercase tracking-wider font-bold" data-astro-cid-rliquca2>Podstawy</label> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-rliquca2> <div class="md:col-span-2" data-astro-cid-rliquca2> <input type="text" name="title" required class="w-full bg-paper border border-line px-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium placeholder:opacity-30" placeholder="Tytuł ogłoszenia (np. Mieszkanie po remoncie)" data-astro-cid-rliquca2> </div> <div class="md:col-span-2" data-astro-cid-rliquca2> <textarea name="description"${addAttribute(5, "rows")} class="w-full bg-paper border border-line px-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium resize-none placeholder:opacity-30" placeholder="Opisz dokładnie swój przedmiot lub usługę..." data-astro-cid-rliquca2></textarea> </div> <div class="relative group" data-astro-cid-rliquca2> <div class="absolute left-6 top-1/2 -translate-y-1/2 text-accent font-bold text-xs pointer-events-none group-focus-within:text-ink transition-colors" data-astro-cid-rliquca2>PLN</div> <input type="text" name="price" class="w-full bg-paper border border-line pl-16 pr-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-bold" placeholder="Cena" data-astro-cid-rliquca2> </div> <div class="relative group" data-astro-cid-rliquca2> <div class="absolute left-6 top-1/2 -translate-y-1/2 text-accent pointer-events-none group-focus-within:text-ink transition-colors" data-astro-cid-rliquca2> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rliquca2><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" data-astro-cid-rliquca2></path><circle cx="12" cy="10" r="3" data-astro-cid-rliquca2></circle></svg> </div> <input type="text" name="location" class="w-full bg-paper border border-line pl-16 pr-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium" placeholder="Lokalizacja (np. Tarnów)" data-astro-cid-rliquca2> </div> </div> </div>  <div id="category-fields-container" class="md:col-span-2 space-y-4" data-astro-cid-rliquca2> <label class="mono-label text-[10px] block text-accent mb-2 uppercase tracking-wider font-bold" data-astro-cid-rliquca2>Informacje Parametryczne</label> <div id="dynamic-fields" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-paper/50 p-8 border border-dashed border-line" data-astro-cid-rliquca2>  </div> </div> <div class="md:col-span-2" data-astro-cid-rliquca2> <label class="mono-label text-[10px] block text-accent mb-6 uppercase tracking-wider font-bold" data-astro-cid-rliquca2>Materiały Wizualne (Max 3)</label> <div class="grid grid-cols-1 gap-4" data-astro-cid-rliquca2> <div class="relative" data-astro-cid-rliquca2> <input type="file" name="images" accept="image/*" multiple class="w-full bg-paper border border-line px-6 py-8 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium file:mr-6 file:py-2 file:px-6 file:border-0 file:text-[10px] file:font-bold file:uppercase file:tracking-widest file:bg-ink file:text-white hover:file:bg-accent file:transition-all file:cursor-pointer cursor-copy" data-astro-cid-rliquca2> <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-line hidden md:block" data-astro-cid-rliquca2> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-rliquca2><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" data-astro-cid-rliquca2></path><path d="M12 12v9" data-astro-cid-rliquca2></path><path d="m16 16-4-4-4 4" data-astro-cid-rliquca2></path></svg> </div> </div> </div> </div> </div> <div class="pt-12 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6" data-astro-cid-rliquca2> <p class="text-[10px] mono-label text-accent uppercase max-w-xs leading-relaxed" data-astro-cid-rliquca2>
Wysyłając formularz akceptujesz regulamin platformy <span class="text-ink" data-astro-cid-rliquca2>TARNÓW.TECH</span>. Ogłoszenie zostanie zindeksowane natychmiastowo.
</p> <button type="submit" class="w-full sm:w-auto flex items-center justify-center gap-3 bg-ink text-white py-5 px-12 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-2xl shadow-ink/20 group" data-astro-cid-rliquca2> ${renderComponent($$result2, "Save", Save, { "size": 18, "className": "group-hover:rotate-12 transition-transform", "data-astro-cid-rliquca2": true })} Publikuj Ogłoszenie
</button> </div> </form> </div> </div> </div> </div> ` })}  ${renderScript($$result, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/create.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/create.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/create.astro";
const $$url = "/dashboard/listings/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Create,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
