import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_BWUWzUga.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_DCFL-TYu.mjs';
import { ArrowLeft, Trash2, Save } from 'lucide-react';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { supabase, user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  const { id } = Astro2.params;
  const { data: listing, error: fetchError } = await supabase.from("listings").select("*").eq("id", id).single();
  if (fetchError || !listing) {
    return Astro2.redirect("/dashboard");
  }
  if (listing.seller_id !== user.id) {
    return Astro2.redirect("/dashboard");
  }
  let error = "";
  const { data: categories } = await supabase.from("categories").select("id, name");
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    if (action === "delete") {
      const { error: deleteError } = await supabase.from("listings").delete().eq("id", id);
      if (deleteError) {
        error = deleteError.message;
      } else {
        return Astro2.redirect("/dashboard?deleted=true");
      }
    } else {
      const title = formData.get("title")?.toString();
      const description = formData.get("description")?.toString();
      const price = formData.get("price")?.toString();
      const location = formData.get("location")?.toString();
      const category_id = formData.get("category_id")?.toString();
      const imageFiles = formData.getAll("images");
      const keepImages = formData.getAll("keep_images");
      let new_image_urls = [...keepImages];
      if (title) {
        const remainingSpace = 3 - new_image_urls.length;
        const validImages = imageFiles.filter((file) => file.size > 0).slice(0, remainingSpace);
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
            new_image_urls.push(data.publicUrl);
          }
        }
        if (!error) {
          const { error: updateError } = await supabase.from("listings").update({
            title,
            description,
            price,
            location,
            category_id: category_id || null,
            image_urls: new_image_urls
          }).eq("id", id);
          if (updateError) {
            error = updateError.message;
          } else {
            return Astro2.redirect("/dashboard?updated=true");
          }
        }
      } else {
        error = "Title is required.";
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Edytuj: ${listing.title} | TARN\xD3W.TECH` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-paper text-ink pt-28 pb-16"> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="mb-8 flex items-center justify-between"> <a href="/dashboard" class="flex items-center gap-2 text-accent hover:text-ink transition-colors mono-label text-[10px] uppercase font-bold tracking-wider"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16 })} Wróć do panelu
</a> <form method="POST" onsubmit="return confirm('Czy na pewno chcesz usunąć to ogłoszenie?')"> <input type="hidden" name="action" value="delete"> <button type="submit" class="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors mono-label text-[10px] uppercase font-bold tracking-wider"> ${renderComponent($$result2, "Trash2", Trash2, { "size": 16 })} Usuń ogłoszenie
</button> </form> </div> <div class="bg-white border border-line shadow-xl relative"> <div class="absolute top-0 left-0 w-2 h-full bg-accent"></div> <div class="p-8 md:p-10 border-b border-line"> <div class="flex items-start justify-between"> <div> <span class="mono-label text-[10px] text-accent mb-2 block">Edycja Ogłoszenia</span> <h1 class="text-3xl font-bold text-ink tracking-tighter uppercase"> ${listing.title} </h1> </div> </div> </div> <form method="POST" enctype="multipart/form-data" class="p-8 md:p-10 space-y-8"> ${error && renderTemplate`<div class="bg-red-50 border-l-2 border-red-500 text-ink p-4 text-[11px] font-medium">
BŁĄD SYSTEMU: ${error} </div>`} <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"> <div class="md:col-span-2"> <label class="mono-label text-[10px] block text-accent mb-2">Tytuł Ogłoszenia <span class="text-red-500">*</span></label> <input type="text" name="title"${addAttribute(listing.title, "value")} required class="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium"> </div> <div class="md:col-span-2"> <label class="mono-label text-[10px] block text-accent mb-2">Opis Szczegółowy</label> <textarea name="description"${addAttribute(5, "rows")} class="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium resize-none">${listing.description}</textarea> </div> <div> <label class="mono-label text-[10px] block text-accent mb-2">Cena</label> <input type="text" name="price"${addAttribute(listing.price, "value")} class="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium"> </div> <div> <label class="mono-label text-[10px] block text-accent mb-2">Lokalizacja</label> <input type="text" name="location"${addAttribute(listing.location, "value")} class="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium"> </div> <div class="md:col-span-2"> <label class="mono-label text-[10px] block text-accent mb-2">Kategoria</label> <select name="category_id" class="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium appearance-none cursor-pointer"> <option value="">Wybierz kategorię...</option> ${categories?.map((cat) => renderTemplate`<option${addAttribute(cat.id, "value")}${addAttribute(cat.id === listing.category_id, "selected")}> ${cat.name} </option>`)} </select> </div> <div class="md:col-span-2"> <label class="mono-label text-[10px] block text-accent mb-2">Zarządzaj Zdjęciami</label>  <div class="grid grid-cols-3 gap-4 mb-4"> ${listing.image_urls?.map((url, idx) => renderTemplate`<div class="relative aspect-video border border-line bg-paper group"> <img${addAttribute(url, "src")} alt="" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"> <label class="flex items-center gap-2 text-white text-[9px] mono-label cursor-pointer"> <input type="checkbox" name="keep_images"${addAttribute(url, "value")} checked class="hidden peer"> <span class="peer-checked:hidden text-red-400">USUNIĘTE</span> <span class="peer-unchecked:hidden">ZACHOWAJ</span> </label> </div>  <input type="hidden" name="current_urls"${addAttribute(url, "value")}> </div>`)} </div> <input type="file" name="images" accept="image/*" multiple class="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-ink file:text-white hover:file:bg-accent"> <p class="text-[10px] mono-label text-accent mt-2">
Łącznie możesz mieć do 3 zdjęć. Pozostaw zaznaczone te, które chcesz zachować.
</p> </div> </div> <div class="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4"> <button type="submit" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-ink text-white py-4 px-8 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all shadow-lg"> ${renderComponent($$result2, "Save", Save, { "size": 16 })} Zapisz Zmiany
</button> </div> </form> </div> </div> </div> ` })} ${renderScript($$result, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/edit/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/edit/[id].astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/edit/[id].astro";
const $$url = "/dashboard/listings/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
