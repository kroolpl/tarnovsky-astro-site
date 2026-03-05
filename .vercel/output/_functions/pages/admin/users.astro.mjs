import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BPtd2oIL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C64yfHWI.mjs';
import { ArrowLeft } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Users;
  const { supabase, user } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  let error = "";
  let success = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const userId = formData.get("user_id")?.toString();
    const makeAdmin = formData.get("make_admin") === "true";
    if (userId) {
      const { error: updateError } = await supabase.from("profiles").update({ role: makeAdmin ? "admin" : "user" }).eq("id", userId);
      if (updateError) {
        error = updateError.message;
      } else {
        success = "User role updated.";
      }
    }
  }
  const { data: users } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Users" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-950 text-slate-200"> <nav class="bg-indigo-900 border-b border-indigo-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center h-16 gap-4"> <a href="/admin" class="text-indigo-300 hover:text-white transition-colors flex items-center gap-2 text-sm pr-4 border-r border-indigo-700"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16 })} Admin Panel
</a> <span class="text-white font-medium">Manage Users</span> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ${error && renderTemplate`<div class="bg-red-500/10 text-red-400 p-4 rounded-xl mb-6"> ${error} </div>`} ${success && renderTemplate`<div class="bg-emerald-500/10 text-emerald-400 p-4 rounded-xl mb-6"> ${success} </div>`} <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"> <div class="px-6 py-4 border-b border-slate-800 flex justify-between items-center"> <h2 class="text-lg font-semibold text-white">
Registered Users
</h2> </div> <div class="overflow-x-auto"> <table class="w-full text-left text-sm"> <thead class="bg-slate-800/50 text-slate-400"> <tr> <th class="px-6 py-4 font-medium">ID</th> <th class="px-6 py-4 font-medium">Username</th> <th class="px-6 py-4 font-medium">Role</th> <th class="px-6 py-4 font-medium">Joined</th> <th class="px-6 py-4 font-medium text-right">Actions</th> </tr> </thead> <tbody class="divide-y divide-slate-800"> ${users?.map((u) => renderTemplate`<tr class="hover:bg-slate-800/30 transition-colors"> <td class="px-6 py-4 text-slate-500 text-xs font-mono"> ${u.id} </td> <td class="px-6 py-4 font-medium text-white"> ${u.username || "N/A"} </td> <td class="px-6 py-4"> <span${addAttribute(`px-2.5 py-1 rounded-full text-xs font-medium ${u.role === "admin" ? "bg-indigo-500/10 text-indigo-400" : "bg-slate-800 gap-1 text-slate-400"}`, "class")}> ${u.role || "user"} </span> </td> <td class="px-6 py-4 text-slate-400"> ${new Date(
    u.created_at
  ).toLocaleDateString()} </td> <td class="px-6 py-4 text-right"> <form method="POST" class="inline-block"> <input type="hidden" name="user_id"${addAttribute(u.id, "value")}> <input type="hidden" name="make_admin"${addAttribute(
    u.role === "admin" ? "false" : "true",
    "value"
  )}> <button${addAttribute(u.id === user.id, "disabled")}${addAttribute(`text-sm px-3 py-1 rounded-lg border transition-colors ${u.id === user.id ? "border-slate-800 text-slate-600 cursor-not-allowed" : "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"}`, "class")}> ${u.role === "admin" ? "Revoke Admin" : "Make Admin"} </button> </form> </td> </tr>`)} </tbody> </table> ${users?.length === 0 && renderTemplate`<div class="p-8 text-center text-slate-500">
No users found.
</div>`} </div> </div> </main> </div> ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/users.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/users.astro";
const $$url = "/admin/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Users,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
