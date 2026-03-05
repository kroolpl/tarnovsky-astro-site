import { e as createComponent, r as renderTemplate, n as defineScriptVars, k as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_BPtd2oIL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_C64yfHWI.mjs';
import { H as Header } from '../../../../chunks/Header_DnIaIViz.mjs';
import { ArrowLeft, Trash2, ClipboardList, Save, Building2, Briefcase, Wrench, Gift, Car } from 'lucide-react';
/* empty css                                         */
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { supabase, user, profile } = Astro2.locals;
  if (!user) {
    return Astro2.redirect("/login");
  }
  const { id } = Astro2.params;
  const { data: listing, error: fetchError } = await supabase.from("listings").select("*, categories(slug, name)").eq("id", id).single();
  if (fetchError || !listing) {
    return Astro2.redirect("/dashboard");
  }
  if (listing.seller_id !== user.id) {
    return Astro2.redirect("/dashboard");
  }
  let error = "";
  const { data: categories } = await supabase.from("categories").select("id, name, slug").order("name");
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
      const category_details = {};
      for (const [key, value] of formData.entries()) {
        if (key.startsWith("details_")) {
          const fieldName = key.replace("details_", "");
          category_details[fieldName] = value;
        }
      }
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
            image_urls: new_image_urls,
            category_details
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
  return renderTemplate(_a || (_a = __template(["", "  <script>(function(){", `
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const categoryCards = document.querySelectorAll('.category-card');
    const backBtn = document.getElementById('back-to-step-1');
    const hiddenCatId = document.getElementById('hidden-category-id');
    const catNameDisplay = document.getElementById('selected-category-name');
    const dynamicFields = document.getElementById('dynamic-fields');
    const dot1 = document.getElementById('dot-1');
    const dot2 = document.getElementById('dot-2');
    const stepText = document.getElementById('step-text');

    const CATEGORY_FIELDS = {
        'nieruchomosci': [
            { name: 'sub_category', label: 'Typ og\u0142oszenia', type: 'select', options: ['Wynajem d\u0142ugoterminowy', 'Sprzeda\u017C', 'Stancje/Pokoje'] },
            { name: 'area', label: 'Powierzchnia (m\xB2)', type: 'text', placeholder: 'np. 45' },
            { name: 'rooms', label: 'Liczba pokoi', type: 'number', placeholder: 'np. 2' },
            { name: 'floor', label: 'Pi\u0119tro', type: 'text', placeholder: 'np. 3/4' },
        ],
        'praca': [
            { name: 'sub_category', label: 'Bran\u017Ca', type: 'select', options: ['Gastronomia', 'Praca fizyczna', 'Praca dodatkowa/uczniowska', 'Handel', 'Us\u0142ugi'] },
            { name: 'salary', label: 'Wynagrodzenie', type: 'text', placeholder: 'np. 25-30 z\u0142/h lub 5000 brutto' },
            { name: 'contract_type', label: 'Typ umowy', type: 'select', options: ['Umowa o prac\u0119', 'Umowa zlecenie/o dzie\u0142o', 'B2B', 'Inna'] },
        ],
        'uslugi': [
            { name: 'sub_category', label: 'Typ us\u0142ugi', type: 'select', options: ['Remonty', 'Naprawa sprz\u0119tu', 'Korepetycje', 'Uroda', 'Ogr\xF3d', 'Transport'] },
            { name: 'experience', label: 'Do\u015Bwiadczenie', type: 'text', placeholder: 'np. 5 lat' },
        ],
        'oddam-zamienie': [
            { name: 'type', label: 'Rodzaj', type: 'select', options: ['Oddam za darmo', 'Zamieni\u0119'] },
            { name: 'condition', label: 'Stan', type: 'select', options: ['Nowy', 'U\u017Cywany (idealny)', 'U\u017Cywany (widoczne \u015Blady)', 'Do od\u015Bwie\u017Cenia/naprawy'] },
        ],
        'motoryzacja': [
            { name: 'brand', label: 'Marka i Model', type: 'text', placeholder: 'np. VW Golf VII' },
            { name: 'year', label: 'Rok produkcji', type: 'number', placeholder: 'np. 2015' },
            { name: 'mileage', label: 'Przebieg (km)', type: 'number', placeholder: 'np. 150000' },
            { name: 'fuel', label: 'Paliwo', type: 'select', options: ['Benzyna', 'Diesel', 'LPG', 'Hybryda', 'Elektryczny'] },
        ],
        'drobne-zlecenia': [
            { name: 'task_type', label: 'Rodzaj zlecenia', type: 'select', options: ['Jednorazowe', 'Cykliczne', 'Szybka pomoc'] },
            { name: 'deadline', label: 'Termin realizacji', type: 'text', placeholder: 'np. Jak najszybciej / Sobota rano' },
            { name: 'time_estimate', label: 'Szacowany czas', type: 'text', placeholder: 'np. 2-3 godziny' },
        ]
    };

    function renderFields(slug, currentDetails = {}) {
        if (!dynamicFields) return;

        const fields = CATEGORY_FIELDS[slug];
        if (!fields) {
            dynamicFields.innerHTML = '<p class="text-accent text-xs italic opacity-50">Ta kategoria nie wymaga dodatkowych danych.</p>';
            return;
        }

        dynamicFields.innerHTML = fields.map(field => {
            const inputName = \`details_\${field.name}\`;
            const currentValue = currentDetails[field.name] || '';
            let inputHtml = '';

            if (field.type === 'select') {
                inputHtml = \`
                    <div class="relative">
                        <select name="\${inputName}" class="w-full bg-white border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium appearance-none cursor-pointer">
                            \${field.options.map((opt) => \`<option value="\${opt}" \${opt === currentValue ? 'selected' : ''}>\${opt}</option>\`).join('')}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-accent">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                        </div>
                    </div>
                \`;
            } else {
                inputHtml = \`
                    <input type="\${field.type}" name="\${inputName}" value="\${currentValue}" placeholder="\${field.placeholder || ''}" class="w-full bg-white border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium" />
                \`;
            }

            return \`
                <div class="\${field.fullWidth ? 'md:col-span-2' : ''}">
                    <label class="mono-label text-[10px] block text-accent mb-2 uppercase tracking-wider font-bold">\${field.label}</label>
                    \${inputHtml}
                </div>
            \`;
        }).join('');
    }

    // Initialize fields
    if (initialSlug) {
        renderFields(initialSlug, initialDetails || {});
    }

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const slug = card.dataset.slug;
            const name = card.dataset.name;

            if (id && slug && name) {
                hiddenCatId.value = id;
                if (catNameDisplay) catNameDisplay.innerText = name;
                renderFields(slug);

                step1?.classList.add('hidden');
                step2?.classList.remove('hidden');
                
                dot1?.classList.replace('bg-ink', 'bg-line');
                dot2?.classList.replace('bg-line', 'bg-ink');
                if (stepText) stepText.innerText = 'Edycja: Krok 2';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    backBtn?.addEventListener('click', () => {
        step2?.classList.add('hidden');
        step1?.classList.remove('hidden');
        
        dot1?.classList.replace('bg-line', 'bg-ink');
        dot2?.classList.replace('bg-ink', 'bg-line');
        if (stepText) stepText.innerText = 'Zmie\u0144 Kategori\u0119';
    });

    // Image removal UI
    const checkboxes = document.querySelectorAll('input[name="keep_images"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            const container = e.target.closest('.relative');
            if (!e.target.checked) {
                container?.classList.add('opacity-30');
            } else {
                container?.classList.remove('opacity-30');
            }
        });
    });
})();<\/script>`], ["", "  <script>(function(){", `
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const categoryCards = document.querySelectorAll('.category-card');
    const backBtn = document.getElementById('back-to-step-1');
    const hiddenCatId = document.getElementById('hidden-category-id');
    const catNameDisplay = document.getElementById('selected-category-name');
    const dynamicFields = document.getElementById('dynamic-fields');
    const dot1 = document.getElementById('dot-1');
    const dot2 = document.getElementById('dot-2');
    const stepText = document.getElementById('step-text');

    const CATEGORY_FIELDS = {
        'nieruchomosci': [
            { name: 'sub_category', label: 'Typ og\u0142oszenia', type: 'select', options: ['Wynajem d\u0142ugoterminowy', 'Sprzeda\u017C', 'Stancje/Pokoje'] },
            { name: 'area', label: 'Powierzchnia (m\xB2)', type: 'text', placeholder: 'np. 45' },
            { name: 'rooms', label: 'Liczba pokoi', type: 'number', placeholder: 'np. 2' },
            { name: 'floor', label: 'Pi\u0119tro', type: 'text', placeholder: 'np. 3/4' },
        ],
        'praca': [
            { name: 'sub_category', label: 'Bran\u017Ca', type: 'select', options: ['Gastronomia', 'Praca fizyczna', 'Praca dodatkowa/uczniowska', 'Handel', 'Us\u0142ugi'] },
            { name: 'salary', label: 'Wynagrodzenie', type: 'text', placeholder: 'np. 25-30 z\u0142/h lub 5000 brutto' },
            { name: 'contract_type', label: 'Typ umowy', type: 'select', options: ['Umowa o prac\u0119', 'Umowa zlecenie/o dzie\u0142o', 'B2B', 'Inna'] },
        ],
        'uslugi': [
            { name: 'sub_category', label: 'Typ us\u0142ugi', type: 'select', options: ['Remonty', 'Naprawa sprz\u0119tu', 'Korepetycje', 'Uroda', 'Ogr\xF3d', 'Transport'] },
            { name: 'experience', label: 'Do\u015Bwiadczenie', type: 'text', placeholder: 'np. 5 lat' },
        ],
        'oddam-zamienie': [
            { name: 'type', label: 'Rodzaj', type: 'select', options: ['Oddam za darmo', 'Zamieni\u0119'] },
            { name: 'condition', label: 'Stan', type: 'select', options: ['Nowy', 'U\u017Cywany (idealny)', 'U\u017Cywany (widoczne \u015Blady)', 'Do od\u015Bwie\u017Cenia/naprawy'] },
        ],
        'motoryzacja': [
            { name: 'brand', label: 'Marka i Model', type: 'text', placeholder: 'np. VW Golf VII' },
            { name: 'year', label: 'Rok produkcji', type: 'number', placeholder: 'np. 2015' },
            { name: 'mileage', label: 'Przebieg (km)', type: 'number', placeholder: 'np. 150000' },
            { name: 'fuel', label: 'Paliwo', type: 'select', options: ['Benzyna', 'Diesel', 'LPG', 'Hybryda', 'Elektryczny'] },
        ],
        'drobne-zlecenia': [
            { name: 'task_type', label: 'Rodzaj zlecenia', type: 'select', options: ['Jednorazowe', 'Cykliczne', 'Szybka pomoc'] },
            { name: 'deadline', label: 'Termin realizacji', type: 'text', placeholder: 'np. Jak najszybciej / Sobota rano' },
            { name: 'time_estimate', label: 'Szacowany czas', type: 'text', placeholder: 'np. 2-3 godziny' },
        ]
    };

    function renderFields(slug, currentDetails = {}) {
        if (!dynamicFields) return;

        const fields = CATEGORY_FIELDS[slug];
        if (!fields) {
            dynamicFields.innerHTML = '<p class="text-accent text-xs italic opacity-50">Ta kategoria nie wymaga dodatkowych danych.</p>';
            return;
        }

        dynamicFields.innerHTML = fields.map(field => {
            const inputName = \\\`details_\\\${field.name}\\\`;
            const currentValue = currentDetails[field.name] || '';
            let inputHtml = '';

            if (field.type === 'select') {
                inputHtml = \\\`
                    <div class="relative">
                        <select name="\\\${inputName}" class="w-full bg-white border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium appearance-none cursor-pointer">
                            \\\${field.options.map((opt) => \\\`<option value="\\\${opt}" \\\${opt === currentValue ? 'selected' : ''}>\\\${opt}</option>\\\`).join('')}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-accent">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                        </div>
                    </div>
                \\\`;
            } else {
                inputHtml = \\\`
                    <input type="\\\${field.type}" name="\\\${inputName}" value="\\\${currentValue}" placeholder="\\\${field.placeholder || ''}" class="w-full bg-white border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium" />
                \\\`;
            }

            return \\\`
                <div class="\\\${field.fullWidth ? 'md:col-span-2' : ''}">
                    <label class="mono-label text-[10px] block text-accent mb-2 uppercase tracking-wider font-bold">\\\${field.label}</label>
                    \\\${inputHtml}
                </div>
            \\\`;
        }).join('');
    }

    // Initialize fields
    if (initialSlug) {
        renderFields(initialSlug, initialDetails || {});
    }

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const slug = card.dataset.slug;
            const name = card.dataset.name;

            if (id && slug && name) {
                hiddenCatId.value = id;
                if (catNameDisplay) catNameDisplay.innerText = name;
                renderFields(slug);

                step1?.classList.add('hidden');
                step2?.classList.remove('hidden');
                
                dot1?.classList.replace('bg-ink', 'bg-line');
                dot2?.classList.replace('bg-line', 'bg-ink');
                if (stepText) stepText.innerText = 'Edycja: Krok 2';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    backBtn?.addEventListener('click', () => {
        step2?.classList.add('hidden');
        step1?.classList.remove('hidden');
        
        dot1?.classList.replace('bg-line', 'bg-ink');
        dot2?.classList.replace('bg-ink', 'bg-line');
        if (stepText) stepText.innerText = 'Zmie\u0144 Kategori\u0119';
    });

    // Image removal UI
    const checkboxes = document.querySelectorAll('input[name="keep_images"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            const container = e.target.closest('.relative');
            if (!e.target.checked) {
                container?.classList.add('opacity-30');
            } else {
                container?.classList.remove('opacity-30');
            }
        });
    });
})();<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": `Edytuj: ${listing.title} | TARN\xD3W.TECH`, "data-astro-cid-7wycz5li": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "user": user, "profile": profile, "client:component-hydration": "load", "client:component-path": "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header", "client:component-export": "Header", "data-astro-cid-7wycz5li": true })} ${maybeRenderHead()}<div class="min-h-screen bg-paper text-ink pt-28 pb-16" data-astro-cid-7wycz5li> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-7wycz5li> <div class="mb-12 flex items-center justify-between" data-astro-cid-7wycz5li> <div class="flex items-center gap-6" data-astro-cid-7wycz5li> <a href="/dashboard" class="flex items-center gap-2 text-accent hover:text-ink transition-colors mono-label text-[10px] uppercase font-bold tracking-wider group" data-astro-cid-7wycz5li> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 16, "className": "group-hover:-translate-x-1 transition-transform", "data-astro-cid-7wycz5li": true })} Wróć do panelu
</a> <div id="step-indicator" class="flex items-center gap-2" data-astro-cid-7wycz5li> <div class="w-2 h-2 rounded-full bg-ink" id="dot-1" data-astro-cid-7wycz5li></div> <div class="w-8 h-[1px] bg-line" data-astro-cid-7wycz5li></div> <div class="w-2 h-2 rounded-full bg-ink" id="dot-2" data-astro-cid-7wycz5li></div> </div> <span class="mono-label text-[10px] text-accent uppercase tracking-widest" id="step-text" data-astro-cid-7wycz5li>Tryb Edycji</span> </div> <form method="POST" onsubmit="return confirm('Czy na pewno chcesz usunąć to ogłoszenie?')" data-astro-cid-7wycz5li> <input type="hidden" name="action" value="delete" data-astro-cid-7wycz5li> <button type="submit" class="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors mono-label text-[10px] uppercase font-bold tracking-wider" data-astro-cid-7wycz5li> ${renderComponent($$result2, "Trash2", Trash2, { "size": 16, "data-astro-cid-7wycz5li": true })} Usuń ogłoszenie
</button> </form> </div>  <div id="step-1" class="hidden animate-in fade-in slide-in-from-bottom-4 duration-500" data-astro-cid-7wycz5li> <div class="text-center mb-12" data-astro-cid-7wycz5li> <span class="mono-label text-[10px] text-accent mb-3 block uppercase tracking-[0.2em]" data-astro-cid-7wycz5li>Zmień kategorię</span> <h1 class="text-4xl font-bold text-ink tracking-tighter uppercase mb-4" data-astro-cid-7wycz5li>Wybierz nową kategorię</h1> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-7wycz5li> ${categories?.map((cat) => {
    let Icon = ClipboardList;
    if (cat.slug === "nieruchomosci") Icon = Building2;
    if (cat.slug === "praca") Icon = Briefcase;
    if (cat.slug === "uslugi") Icon = Wrench;
    if (cat.slug === "oddam-zamienie") Icon = Gift;
    if (cat.slug === "motoryzacja") Icon = Car;
    return renderTemplate`<button type="button" class="category-card group bg-white border border-line p-8 text-left hover:border-ink transition-all duration-300 relative overflow-hidden flex flex-col items-start gap-4 shadow-sm hover:shadow-2xl hover:shadow-ink/5"${addAttribute(cat.id, "data-id")}${addAttribute(cat.slug, "data-slug")}${addAttribute(cat.name, "data-name")} data-astro-cid-7wycz5li> <div class="w-12 h-12 bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-all duration-300 rounded-none relative z-10" data-astro-cid-7wycz5li> ${renderComponent($$result2, "Icon", Icon, { "size": 24, "data-astro-cid-7wycz5li": true })} </div> <div class="relative z-10" data-astro-cid-7wycz5li> <h3 class="font-bold text-lg uppercase tracking-tight mb-2 group-hover:text-accent transition-colors" data-astro-cid-7wycz5li>${cat.name}</h3> </div> </button>`;
  })} </div> </div>  <div id="step-2" data-astro-cid-7wycz5li> <div class="bg-white border border-line shadow-2xl relative animate-in fade-in zoom-in-95 duration-500" data-astro-cid-7wycz5li> <div class="absolute top-0 left-0 w-2 h-full bg-accent" data-astro-cid-7wycz5li></div> <div class="p-8 md:p-10 border-b border-line flex items-center justify-between" data-astro-cid-7wycz5li> <div class="flex items-center gap-6" data-astro-cid-7wycz5li> <button id="back-to-step-1" type="button" class="flex items-center justify-center w-10 h-10 border border-line hover:border-ink hover:bg-paper transition-all" title="Zmień kategorię" data-astro-cid-7wycz5li> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "size": 18, "data-astro-cid-7wycz5li": true })} </button> <div data-astro-cid-7wycz5li> <span class="mono-label text-[10px] text-accent mb-1 block flex items-center gap-2" data-astro-cid-7wycz5li>
EDYCJA OGŁOSZENIA / <span id="selected-category-name" class="text-ink font-bold" data-astro-cid-7wycz5li>${listing.categories?.name}</span> </span> <h2 class="text-2xl font-bold text-ink tracking-tighter uppercase" data-astro-cid-7wycz5li>Zaktualizuj Szczegóły</h2> </div> </div> </div> <form id="listing-form" method="POST" enctype="multipart/form-data" class="p-8 md:p-10 space-y-8" data-astro-cid-7wycz5li> <input type="hidden" name="category_id" id="hidden-category-id"${addAttribute(listing.category_id, "value")} data-astro-cid-7wycz5li> ${error && renderTemplate`<div class="bg-red-50 border-l-2 border-red-500 text-ink p-4 text-[11px] font-medium animate-in fade-in slide-in-from-top-2" data-astro-cid-7wycz5li>
BŁĄD SYSTEMU: ${error} </div>`} <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" data-astro-cid-7wycz5li> <div class="md:col-span-2" data-astro-cid-7wycz5li> <label class="mono-label text-[10px] block text-accent mb-2 uppercase tracking-wider font-bold" data-astro-cid-7wycz5li>Podstawy</label> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-7wycz5li> <div class="md:col-span-2" data-astro-cid-7wycz5li> <input type="text" name="title" required${addAttribute(listing.title, "value")} class="w-full bg-paper border border-line px-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium" data-astro-cid-7wycz5li> </div> <div class="md:col-span-2" data-astro-cid-7wycz5li> <textarea name="description"${addAttribute(5, "rows")} class="w-full bg-paper border border-line px-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium resize-none" data-astro-cid-7wycz5li>${listing.description}</textarea> </div> <div class="relative group" data-astro-cid-7wycz5li> <div class="absolute left-6 top-1/2 -translate-y-1/2 text-accent font-bold text-xs pointer-events-none group-focus-within:text-ink transition-colors" data-astro-cid-7wycz5li>PLN</div> <input type="text" name="price"${addAttribute(listing.price, "value")} class="w-full bg-paper border border-line pl-16 pr-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-bold" data-astro-cid-7wycz5li> </div> <div class="relative group" data-astro-cid-7wycz5li> <div class="absolute left-6 top-1/2 -translate-y-1/2 text-accent pointer-events-none group-focus-within:text-ink transition-colors" data-astro-cid-7wycz5li> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7wycz5li><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" data-astro-cid-7wycz5li></path><circle cx="12" cy="10" r="3" data-astro-cid-7wycz5li></circle></svg> </div> <input type="text" name="location"${addAttribute(listing.location, "value")} class="w-full bg-paper border border-line pl-16 pr-6 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium" data-astro-cid-7wycz5li> </div> </div> </div>  <div id="category-fields-container" class="md:col-span-2 space-y-4" data-astro-cid-7wycz5li> <label class="mono-label text-[10px] block text-accent mb-2 uppercase tracking-wider font-bold" data-astro-cid-7wycz5li>Informacje Parametryczne</label> <div id="dynamic-fields" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-paper/50 p-8 border border-dashed border-line" data-astro-cid-7wycz5li>  </div> </div> <div class="md:col-span-2" data-astro-cid-7wycz5li> <label class="mono-label text-[10px] block text-accent mb-6 uppercase tracking-wider font-bold" data-astro-cid-7wycz5li>Zdjęcia (Max 3)</label>  <div class="grid grid-cols-3 gap-6 mb-8" data-astro-cid-7wycz5li> ${listing.image_urls?.map((url) => renderTemplate`<div class="relative aspect-[4/3] border border-line bg-paper group overflow-hidden" data-astro-cid-7wycz5li> <img${addAttribute(url, "src")} alt="" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-astro-cid-7wycz5li> <div class="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4" data-astro-cid-7wycz5li> <label class="flex flex-col items-center gap-2 text-white text-[8px] mono-label cursor-pointer text-center" data-astro-cid-7wycz5li> <input type="checkbox" name="keep_images"${addAttribute(url, "value")} checked class="hidden peer" data-astro-cid-7wycz5li> <span class="peer-checked:hidden text-red-400 font-bold bg-white/10 px-2 py-1" data-astro-cid-7wycz5li>DO USUNIĘCIA</span> <span class="peer-unchecked:hidden bg-white/10 px-2 py-1" data-astro-cid-7wycz5li>ZATWIERDŹ USUNIĘCIE</span> <span class="peer-checked:inline hidden underline" data-astro-cid-7wycz5li>ZACHOWAJ ZDJĘCIE</span> </label> </div> </div>`)} </div> <div class="relative" data-astro-cid-7wycz5li> <input type="file" name="images" accept="image/*" multiple class="w-full bg-paper border border-line px-6 py-8 text-sm text-ink focus:outline-none focus:border-ink transition-all font-medium file:mr-6 file:py-2 file:px-6 file:border-0 file:text-[10px] file:font-bold file:uppercase file:tracking-widest file:bg-ink file:text-white hover:file:bg-accent file:transition-all file:cursor-pointer cursor-copy" data-astro-cid-7wycz5li> </div> </div> </div> <div class="pt-12 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6" data-astro-cid-7wycz5li> <p class="text-[10px] mono-label text-accent uppercase max-w-xs leading-relaxed" data-astro-cid-7wycz5li>
Zmiany zostaną zaktualizowane w systemie natychmiastowo. Możesz je edytować ponownie w dowolnym momencie.
</p> <button type="submit" class="w-full sm:w-auto flex items-center justify-center gap-3 bg-ink text-white py-5 px-12 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-2xl shadow-ink/20 group" data-astro-cid-7wycz5li> ${renderComponent($$result2, "Save", Save, { "size": 18, "className": "group-hover:rotate-12 transition-transform", "data-astro-cid-7wycz5li": true })} Zapisz Zmiany
</button> </div> </form> </div> </div> </div> </div> ` }), defineScriptVars({ initialDetails: listing.category_details, initialSlug: listing.categories?.slug }));
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
