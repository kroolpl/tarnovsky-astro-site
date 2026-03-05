import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BWUWzUga.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DCFL-TYu.mjs';
import { H as Header } from '../../chunks/Header_DnIaIViz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Heart, MapPin, Calendar, Tag, MessageSquare, Phone, User, ShieldCheck } from 'lucide-react';
import { U as UserAvatar } from '../../chunks/UserAvatar_PuqkXw6f.mjs';
import { $ as $$Footer } from '../../chunks/Footer_CQqcpzKm.mjs';
export { renderers } from '../../renderers.mjs';

const ListingDetail = ({ listing, onBack }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = listing.image_urls && listing.image_urls.length > 0 ? listing.image_urls : ["https://picsum.photos/seed/detail/1200/800"];
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32 sm:pb-12",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8 sm:mb-12", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: onBack,
              className: "flex items-center gap-2 mono-label hover:text-accent transition-colors group text-[9px] sm:text-[10px]",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { size: 14, className: "group-hover:-translate-x-1 transition-transform" }),
                "Powrót"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsx("button", { className: "p-2 border border-line hover:border-accent hover:text-accent transition-all rounded-sm", children: /* @__PURE__ */ jsx(Share2, { size: 16 }) }),
            /* @__PURE__ */ jsx("button", { className: "p-2 border border-line hover:border-accent hover:text-accent transition-all rounded-sm", children: /* @__PURE__ */ jsx(Heart, { size: 16 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.98 },
                animate: { opacity: 1, scale: 1 },
                className: "aspect-square sm:aspect-video bg-paper border border-line overflow-hidden mb-4 relative group",
                children: [
                  /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.5 },
                      src: images[activeIndex],
                      alt: listing.title,
                      className: "w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700",
                      referrerPolicy: "no-referrer"
                    },
                    activeIndex
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 sm:top-6 sm:left-6", children: /* @__PURE__ */ jsx("span", { className: "bg-ink text-white px-2 sm:px-3 py-1 mono-label text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em]", children: "ORIGINAL_ASSET" }) })
                ]
              }
            ),
            images.length > 1 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: images.map((img, idx) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveIndex(idx),
                className: `aspect-video border transition-all overflow-hidden bg-paper ${activeIndex === idx ? "border-accent opacity-100 scale-[1.02]" : "border-line opacity-50 hover:opacity-100 grayscale"}`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: img,
                    alt: `${listing.title} thumbnail ${idx + 1}`,
                    className: "w-full h-full object-cover",
                    referrerPolicy: "no-referrer"
                  }
                )
              },
              idx
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-10 sm:space-y-12", children: [
              /* @__PURE__ */ jsxs("section", { children: [
                /* @__PURE__ */ jsx("h2", { className: "mono-label mb-4 sm:mb-6 border-l-2 border-accent pl-4 text-[9px] sm:text-[10px]", children: "Opis przedmiotu" }),
                /* @__PURE__ */ jsxs("div", { className: "text-ink/80 leading-relaxed space-y-4 font-light text-base sm:text-lg", children: [
                  /* @__PURE__ */ jsx("p", { children: listing.description || `Przedmiotem sprzedaży jest ${listing.title}. Stan techniczny oraz wizualny oceniam na bardzo dobry. Sprzęt był używany sporadycznie, głównie w warunkach domowych.` }),
                  /* @__PURE__ */ jsx("p", { children: "W zestawie znajduje się wszystko, co oferuje producent w oryginalnym opakowaniu. Możliwość sprawdzenia na miejscu w Tarnowie lub wysyłka ubezpieczona kurierem." }),
                  /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 mt-4 sm:mt-6 text-sm sm:text-base opacity-70", children: [
                    /* @__PURE__ */ jsx("li", { children: "Oryginalne opakowanie" }),
                    /* @__PURE__ */ jsx("li", { children: "Pełna dokumentacja" }),
                    /* @__PURE__ */ jsx("li", { children: "Gwarancja do końca roku" }),
                    /* @__PURE__ */ jsx("li", { children: "Stan idealny, brak rys" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("section", { className: "border-t border-line pt-10 sm:pt-12", children: [
                /* @__PURE__ */ jsx("h2", { className: "mono-label mb-6 sm:mb-8 text-[9px] sm:text-[10px]", children: "Parametry techniczne" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8", children: (() => {
                  const params = [
                    { label: "Kategoria", value: listing.category || "Elektronika" },
                    { label: "Lokalizacja", value: listing.location || "Tarnów" }
                  ];
                  if (listing.category_details) {
                    const labels = {
                      "sub_category": "Podkategoria",
                      "area": "Powierzchnia",
                      "rooms": "Pokoje",
                      "floor": "Piętro",
                      "salary": "Wynagrodzenie",
                      "contract_type": "Typ umowy",
                      "experience": "Doświadczenie",
                      "condition": "Stan",
                      "brand": "Marka / Model",
                      "year": "Rok produkcji",
                      "mileage": "Przebieg",
                      "fuel": "Paliwo",
                      "task_type": "Typ zlecenia",
                      "deadline": "Termin",
                      "time_estimate": "Czas trwania"
                    };
                    Object.entries(listing.category_details).forEach(([key, value]) => {
                      if (value) {
                        const displayValue = key === "area" ? `${value} m²` : key === "mileage" ? `${value} km` : value;
                        params.push({ label: labels[key] || key, value: displayValue });
                      }
                    });
                  }
                  return params.map((param, idx) => /* @__PURE__ */ jsxs("div", { className: "border-b border-line pb-3 sm:pb-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "mono-label text-[7px] sm:text-[8px] mb-1 uppercase opacity-60", children: param.label }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-medium", children: param.value })
                  ] }, idx));
                })() })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-28 space-y-6 sm:space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "border border-line p-6 sm:p-8 bg-white shadow-xl shadow-ink/5", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6 sm:mb-8", children: [
                /* @__PURE__ */ jsx("span", { className: "mono-label text-accent mb-1 sm:mb-2 block text-[9px] sm:text-[10px]", children: listing.date }),
                /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4", children: listing.title }),
                /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-4xl font-bold text-accent", children: listing.price })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4 mb-6 sm:mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs sm:text-sm opacity-60", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-accent" }),
                  listing.location || "Tarnów, Małopolskie"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs sm:text-sm opacity-60", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14, className: "text-accent" }),
                  "Dodano: ",
                  listing.date
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs sm:text-sm opacity-60", children: [
                  /* @__PURE__ */ jsx(Tag, { size: 14, className: "text-accent" }),
                  "ID: #8293102"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "w-full bg-ink text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(MessageSquare, { size: 16 }),
                      " Napisz wiadomość"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "w-full border border-line py-4 font-bold uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { size: 16 }),
                      " Pokaż numer"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border border-line p-6 sm:p-8 bg-paper/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "mono-label mb-5 sm:mb-6 flex items-center gap-2 text-[9px] sm:text-[10px]", children: [
                /* @__PURE__ */ jsx(User, { size: 14, className: "text-accent" }),
                "Informacje o sprzedawcy"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-5 sm:mb-6", children: [
                /* @__PURE__ */ jsx(
                  UserAvatar,
                  {
                    url: listing.seller_avatar,
                    fallback: listing.seller,
                    size: "md",
                    className: "ring-2 ring-line"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-xs sm:text-sm", children: listing.seller || "Użytkownik_829" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[8px] sm:text-[10px] opacity-40 mono-label", children: "Na platformie od 2022" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[8px] sm:text-[10px] text-emerald-600 font-bold uppercase tracking-wider", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { size: 14 }),
                " Zweryfikowany profil"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-4 border border-dashed border-line text-[8px] sm:text-[10px] mono-label leading-relaxed opacity-40", children: "Pamiętaj o zasadach bezpieczeństwa. Nigdy nie podawaj danych karty płatniczej w wiadomościach. Odbiór osobisty to najbezpieczniejsza forma transakcji." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-line p-4 flex gap-3 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]", children: [
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileTap: { scale: 0.95 },
              className: "flex-1 bg-ink text-white py-4 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 14 }),
                " Wiadomość"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileTap: { scale: 0.95 },
              className: "w-14 border border-line flex items-center justify-center text-accent",
              children: /* @__PURE__ */ jsx(Phone, { size: 18 })
            }
          )
        ] })
      ]
    }
  );
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { supabase, user, profile } = Astro2.locals;
  const { data: listingData } = await supabase.from("listings").select(`
        *,
        profiles (username, avatar_url),
        categories (name)
    `).eq("id", id).single();
  if (!listingData) {
    return Astro2.redirect("/404");
  }
  const listing = {
    id: listingData.id,
    date: new Date(listingData.created_at).toISOString().split("T")[0],
    title: listingData.title,
    price: listingData.price,
    image_urls: listingData.image_urls || [],
    description: listingData.description,
    location: listingData.location,
    category: listingData.categories?.name || "Inne",
    category_details: listingData.category_details,
    seller: listingData.profiles?.username || "Anonim",
    seller_avatar: listingData.profiles?.avatar_url,
    featured: listingData.is_featured,
    tags: listingData.tags || []
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": listing.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "user": user, "profile": profile, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main class="flex-grow"> ${renderComponent($$result2, "ListingDetail", ListingDetail, { "client:load": true, "listing": listing, "onBack": (() => window.history.back()), "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/ListingDetail", "client:component-export": "ListingDetail" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/listing/[id].astro", void 0);

const $$file = "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/listing/[id].astro";
const $$url = "/listing/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
