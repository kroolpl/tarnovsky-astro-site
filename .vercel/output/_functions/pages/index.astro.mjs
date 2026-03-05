import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BWUWzUga.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DCFL-TYu.mjs';
import { H as Header } from '../chunks/Header_DnIaIViz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { motion } from 'motion/react';
import { Search, Plus, Image } from 'lucide-react';
import { $ as $$Footer } from '../chunks/Footer_CQqcpzKm.mjs';
export { renderers } from '../renderers.mjs';

const FeaturedSection = ({ items }) => /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-4 sm:mb-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "mono-label border-l-2 border-accent pl-3 text-[9px] sm:text-[10px]", children: "Featured Editorial Selection" }),
    /* @__PURE__ */ jsx("span", { className: "mono-label opacity-30 hidden sm:inline", children: "[CURATED_FEED]" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line shadow-xl shadow-ink/5", children: items.map((item, idx) => /* @__PURE__ */ jsx("a", { href: `/listing/${item.id}`, className: `bg-white group cursor-pointer overflow-hidden relative ${idx === 2 ? "col-span-2 md:col-span-1" : ""}`, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: idx * 0.1, duration: 0.5 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-square relative bg-paper overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: item.image_urls?.[0] || "https://picsum.photos/seed/detail/1200/800",
              alt: item.title,
              className: "w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700",
              whileHover: { scale: 1.05 },
              referrerPolicy: "no-referrer"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 sm:top-6 sm:right-6", children: /* @__PURE__ */ jsx("span", { className: "bg-ink text-white px-1.5 py-0.5 mono-label text-[7px] sm:text-[8px] tracking-[0.1em] sm:tracking-[0.2em]", children: "[FEATURED]" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-8 border-t border-line group-hover:border-accent transition-colors", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm sm:text-xl font-medium mb-1 sm:mb-2 group-hover:text-accent transition-colors line-clamp-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-lg font-bold text-ink/80", children: item.price })
        ] })
      ]
    }
  ) }, item.id)) })
] });

const SearchBar = () => /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12", children: /* @__PURE__ */ jsxs(
  motion.div,
  {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    className: "border border-line p-5 sm:p-8 bg-white shadow-sm",
    children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mb-4 sm:mb-6", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "SZUKAJ... [CTRL + K]",
            className: "w-full border-b border-line py-3 sm:py-4 text-base sm:text-xl font-light focus:outline-none focus:border-accent transition-all duration-500 placeholder:opacity-20"
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "absolute right-0 top-1/2 -translate-y-1/2 text-accent opacity-40", size: 20 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 sm:gap-8", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border border-line group-hover:border-accent transition-all flex items-center justify-center rounded-sm", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: false,
              whileHover: { scale: 1.2 },
              className: "w-2.5 h-2.5 bg-accent opacity-0 group-hover:opacity-20 transition-opacity"
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: "mono-label text-[8px] sm:text-[9px] group-hover:text-accent transition-colors", children: "Zdjęcia" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border border-line group-hover:border-accent transition-all flex items-center justify-center rounded-sm", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: false,
              whileHover: { scale: 1.2 },
              className: "w-2.5 h-2.5 bg-accent opacity-0 group-hover:opacity-20 transition-opacity"
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: "mono-label text-[8px] sm:text-[9px] group-hover:text-accent transition-colors", children: "Dzisiejsze" })
        ] })
      ] })
    ]
  }
) });

const LatestEntries = ({ items }) => /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-4 sm:mb-6 border-b border-line pb-4", children: [
    /* @__PURE__ */ jsxs("h2", { className: "mono-label flex items-center gap-2 text-[9px] sm:text-[10px]", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-accent rounded-full animate-pulse" }),
      "Najnowsze wpisy"
    ] }),
    /* @__PURE__ */ jsxs("button", { className: "mono-label flex items-center gap-1 hover:text-accent hover:opacity-100 transition-all text-[8px] sm:text-[9px]", children: [
      "Archiwum ",
      /* @__PURE__ */ jsx(Plus, { size: 10, className: "rotate-45 opacity-40" })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "divide-y divide-line border-t border-line", children: items.map((item, idx) => /* @__PURE__ */ jsx("a", { href: `/listing/${item.id}`, className: "block", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: idx * 0.05 },
      className: "data-row py-4 sm:py-5 px-2 sm:px-3 flex items-center justify-between group",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 sm:gap-8 overflow-hidden", children: [
          /* @__PURE__ */ jsx("span", { className: "mono-label w-14 sm:w-20 text-accent-light text-[7px] sm:text-[8px] shrink-0", children: item.date }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-4 overflow-hidden", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform truncate", children: item.title }),
            item.tags?.map((tag) => /* @__PURE__ */ jsx("span", { className: "mono-label text-[6px] sm:text-[8px] border border-accent/20 text-accent px-1 sm:px-1.5 py-0.5 rounded-sm shrink-0", children: tag }, tag))
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-bold text-ink/70 group-hover:text-ink transition-colors shrink-0 ml-4", children: item.price })
      ]
    }
  ) }, item.id)) }),
  /* @__PURE__ */ jsx(
    motion.button,
    {
      whileHover: { y: -2 },
      whileTap: { y: 0 },
      className: "w-full mt-8 sm:mt-12 py-4 sm:py-5 bg-ink text-white mono-label text-[10px] sm:text-xs font-bold hover:bg-accent transition-all shadow-lg shadow-ink/5",
      children: "Wczytaj więcej danych"
    }
  )
] });

const PromotedSidebar = ({ items }) => /* @__PURE__ */ jsx("aside", { className: "w-80 hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: "border border-line p-8 bg-white shadow-sm sticky top-28", children: [
  /* @__PURE__ */ jsxs("h2", { className: "mono-label mb-8 pb-4 border-b border-line flex items-center justify-between", children: [
    "Promoted_Items",
    /* @__PURE__ */ jsx(Image, { size: 12, className: "opacity-20" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "space-y-10", children: items.map((item) => /* @__PURE__ */ jsx("a", { href: `/listing/${item.id}`, className: "block", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      whileHover: { y: -4 },
      className: "group cursor-pointer",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] bg-paper mb-5 overflow-hidden relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: item.image_urls?.[0] || "https://picsum.photos/seed/promo/400/300",
              alt: item.title,
              className: "w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500",
              referrerPolicy: "no-referrer"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 border border-ink/5" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mono-label text-[8px] mb-2 block text-accent", children: "[PROMOTED]" }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium mb-1 group-hover:text-accent transition-colors", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-ink/80", children: item.price })
      ]
    }
  ) }, item.id)) })
] }) });

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { supabase, user, profile } = Astro2.locals;
  const { data: listings } = await supabase.from("listings").select(
    `
		*,
		profiles (username, avatar_url),
		categories (name)
	`
  ).order("created_at", { ascending: false });
  const transformToListing = (item) => ({
    id: item.id,
    date: new Date(item.created_at).toISOString().split("T")[0],
    title: item.title,
    price: item.price,
    image_urls: item.image_urls || [],
    description: item.description,
    location: item.location,
    category: item.categories?.name || "Inne",
    seller: item.profiles?.username || "Anonim",
    seller_avatar: item.profiles?.avatar_url,
    featured: item.is_featured,
    tags: item.tags || []
  });
  const featuredItems = listings?.filter((l) => l.is_featured).map(transformToListing).slice(0, 3) || [];
  const latestItems = listings?.map(transformToListing).slice(0, 5) || [];
  const promotedItems = listings?.filter((l) => l.is_promoted).map(transformToListing).slice(0, 2) || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "G\u0142\xF3wna" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "user": user, "profile": profile, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main class="flex-grow"> ${renderComponent($$result2, "FeaturedSection", FeaturedSection, { "items": featuredItems, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/FeaturedSection", "client:component-export": "FeaturedSection" })} ${renderComponent($$result2, "SearchBar", SearchBar, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/SearchBar", "client:component-export": "SearchBar" })} <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 mb-16 sm:mb-24"> ${renderComponent($$result2, "LatestEntries", LatestEntries, { "items": latestItems, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/LatestEntries", "client:component-export": "LatestEntries" })} ${renderComponent($$result2, "PromotedSidebar", PromotedSidebar, { "items": promotedItems, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/PromotedSidebar", "client:component-export": "PromotedSidebar" })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/index.astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
