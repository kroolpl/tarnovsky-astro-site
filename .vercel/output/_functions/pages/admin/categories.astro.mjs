import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BPtd2oIL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C64yfHWI.mjs';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categories;
  const { supabase, user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  let error = "";
  let success = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    if (action === "create") {
      const name = formData.get("name")?.toString();
      const slug = formData.get("slug")?.toString();
      if (name && slug) {
        const { error: insertErr } = await supabase.from("categories").insert({ name, slug });
        if (insertErr) error = insertErr.message;
        else success = "Category added successfully.";
      }
    } else if (action === "delete") {
      const id = formData.get("id")?.toString();
      if (id) {
        const { error: delErr } = await supabase.from("categories").delete().eq("id", id);
        if (delErr) error = delErr.message;
        else success = "Category deleted successfully.";
      }
    }
  }
  const { data: categories } = await supabase.from("categories").select("*").order("name");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Categories" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-950 text-slate-200"> <nav class="bg-indigo-900 border-b border-indigo-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center h-16 gap-4"> <a href="/admin" class="text-indigo-300 hover:text-white transition-colors flex items-center gap-2 text-sm pr-4 border-r border-indigo-700"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16 })} Admin Panel
</a> <span class="text-white font-medium">Manage Categories</span> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ${error && renderTemplate`<div class="bg-red-500/10 text-red-400 p-4 rounded-xl mb-6"> ${error} </div>`} ${success && renderTemplate`<div class="bg-emerald-500/10 text-emerald-400 p-4 rounded-xl mb-6"> ${success} </div>`} <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Add Category Form --> <div class="lg:col-span-1"> <form method="POST" class="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg"> <input type="hidden" name="action" value="create"> <h2 class="text-lg font-bold text-white mb-4">
Add Category
</h2> <div class="space-y-4"> <div> <label class="block text-sm font-medium text-slate-300 mb-1">Name</label> <input type="text" name="name" required class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="e.g. Electronics"> </div> <div> <label class="block text-sm font-medium text-slate-300 mb-1">Slug</label> <input type="text" name="slug" required class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="e.g. electronics"> </div> <button type="submit" class="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-xl transition-all"> ${renderComponent($$result2, "Save", Save, { "size": 18 })} Add Category
</button> </div> </form> </div> <!-- Categories List --> <div class="lg:col-span-2"> <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"> <div class="px-6 py-4 border-b border-slate-800"> <h2 class="text-lg font-semibold text-white">
Current Categories
</h2> </div> <div class="divide-y divide-slate-800"> ${categories?.map((cat) => renderTemplate`<div class="p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors"> <div> <div class="font-medium text-white text-lg"> ${cat.name} </div> <div class="text-slate-500 text-sm font-mono mt-1">
/${cat.slug} </div> </div> <form method="POST" onsubmit="return confirm('Are you sure you want to delete this category?');"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="id"${addAttribute(cat.id, "value")}> <button class="text-slate-500 hover:text-red-400 p-2 rounded-lg hover:bg-slate-800 transition-colors"> ${renderComponent($$result2, "Trash2", Trash2, { "size": 18 })} </button> </form> </div>`)} ${categories?.length === 0 && renderTemplate`<div class="p-8 text-center text-slate-500">
No categories found. Add one on the
                                        left.
</div>`} </div> </div> </div> </div> </main> </div> ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/categories.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/categories.astro";
const $$url = "/admin/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Categories,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
