import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from './astro/server_BWUWzUga.mjs';
import 'piccolore';
import { MapPin, FileText, Mail } from 'lucide-react';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-line mt-16 sm:mt-32 bg-white py-12 sm:py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16"> <div> <h4 class="mono-label mb-4 sm:mb-8 flex items-center gap-2 text-[9px] sm:text-[10px]"> ${renderComponent($$result, "MapPin", MapPin, { "size": 12, "className": "text-accent" })}
Lokalizacja: Tarnów, PL
</h4> <p class="text-[10px] sm:text-xs leading-relaxed opacity-50 font-light">
Niezależna platforma wymiany informacji i towarów dla regionu
                tarnowskiego. Bez algorytmów, bez śledzenia, tylko czyste dane.
</p> </div> <div> <h4 class="mono-label mb-4 sm:mb-8 flex items-center gap-2 text-[9px] sm:text-[10px]"> ${renderComponent($$result, "FileText", FileText, { "size": 12, "className": "text-accent" })}
Dokumentacja
</h4> <ul class="space-y-3 sm:space-y-4"> ${[
    "REGULAMIN_SERWISU.TXT",
    "POLITYKA_PRYWATNOSCI.MD",
    "ZASADY_BEZPIECZENSTWA.PDF"
  ].map((file) => renderTemplate`<li> <a href="#" class="flex items-center gap-3 text-[10px] sm:text-xs opacity-40 hover:opacity-100 hover:text-accent transition-all group"> <div class="w-1 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div> ${file} </a> </li>`)} </ul> </div> <div class="md:text-right flex flex-col justify-between"> <h4 class="mono-label mb-4 sm:mb-8 flex items-center md:justify-end gap-2 text-[9px] sm:text-[10px]"> ${renderComponent($$result, "Mail", Mail, { "size": 12, "className": "text-accent" })}
Kontakt
</h4> <div> <p class="text-[10px] sm:text-xs font-bold mb-1 tracking-wider text-ink">
ROOT@TARNOW.TECH
</p> <p class="mono-label text-[8px] sm:text-[9px] opacity-30">
EST. 2024 / © TARNOW.TECH
</p> </div> </div> </div> </footer>`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Footer.astro", void 0);

export { $$Footer as $ };
