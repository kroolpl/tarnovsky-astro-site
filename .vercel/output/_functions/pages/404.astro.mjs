import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BPtd2oIL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C64yfHWI.mjs';
import { H as Header } from '../chunks/Header_DnIaIViz.mjs';
import { $ as $$Footer } from '../chunks/Footer_Cz843VqF.mjs';
import { ArrowLeft, Search } from 'lucide-react';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { user } = Astro2.locals;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Nie znaleziono", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "user": user, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header", "client:component-export": "Header", "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main class="flex-grow flex items-center justify-center py-24 px-4" data-astro-cid-zetdm5md> <div class="max-w-xl w-full text-center" data-astro-cid-zetdm5md> <div class="relative inline-block mb-12" data-astro-cid-zetdm5md> <h1 class="text-[120px] font-black tracking-tighter text-paper-dark leading-none opacity-10 select-none" data-astro-cid-zetdm5md>
404
</h1> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-zetdm5md> <span class="mono-label text-xs tracking-[0.2em] uppercase text-accent font-bold" data-astro-cid-zetdm5md>BŁĄD SYSTEMU</span> </div> </div> <h2 class="text-3xl font-bold tracking-tight text-ink uppercase mb-4" data-astro-cid-zetdm5md>
ZGUBIŁEŚ SIĘ W SIECI?
</h2> <p class="text-accent text-sm leading-relaxed mb-12 max-w-md mx-auto" data-astro-cid-zetdm5md>
Wygląda na to, że strona lub ogłoszenie, którego szukasz,
                zostało usunięte lub nigdy nie istniało w naszym systemie.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-zetdm5md> <a href="/" class="w-full sm:w-auto bg-ink text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all flex items-center justify-center gap-2 shadow-lg shadow-ink/10" data-astro-cid-zetdm5md> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16, "data-astro-cid-zetdm5md": true })} Wróć na główną
</a> <a href="/#search" class="w-full sm:w-auto border border-line text-ink px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Search", Search, { "size": 16, "data-astro-cid-zetdm5md": true })} Szukaj ogłoszeń
</a> </div> <div class="mt-24 pt-12 border-t border-line" data-astro-cid-zetdm5md> <p class="mono-label text-[9px] text-accent uppercase tracking-widest" data-astro-cid-zetdm5md>
KOD BŁĘDU: 404_PAGE_NOT_FOUND // TARNÓW.TECH V3.0.0
</p> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} ` })} `;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/404.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
