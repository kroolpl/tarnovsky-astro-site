import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Heart, MapPin, Calendar, Tag, User, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import type { Announcement } from './FeaturedSection';

interface ListingDetailProps {
    listing: Announcement;
    onBack: () => void;
}

export const ListingDetail: React.FC<ListingDetailProps> = ({ listing, onBack }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const images = listing.image_urls && listing.image_urls.length > 0
        ? listing.image_urls
        : ['https://picsum.photos/seed/detail/1200/800'];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32 sm:pb-12"
        >
            {/* Breadcrumbs / Back */}
            <div className="flex items-center justify-between mb-8 sm:mb-12">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 mono-label hover:text-accent transition-colors group text-[9px] sm:text-[10px]"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Powrót
                </button>
                <div className="flex items-center gap-3 sm:gap-4">
                    <button className="p-2 border border-line hover:border-accent hover:text-accent transition-all rounded-sm">
                        <Share2 size={16} />
                    </button>
                    <button className="p-2 border border-line hover:border-accent hover:text-accent transition-all rounded-sm">
                        <Heart size={16} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">
                {/* Left Column: Images & Description */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-square sm:aspect-video bg-paper border border-line overflow-hidden mb-4 relative group"
                    >
                        <motion.img
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            src={images[activeIndex]}
                            alt={listing.title}
                            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                            <span className="bg-ink text-white px-2 sm:px-3 py-1 mono-label text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em]">ORIGINAL_ASSET</span>
                        </div>
                    </motion.div>

                    {images.length > 1 && (
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`aspect-video border transition-all overflow-hidden bg-paper ${activeIndex === idx
                                        ? 'border-accent opacity-100 scale-[1.02]'
                                        : 'border-line opacity-50 hover:opacity-100 grayscale'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${listing.title} thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="space-y-10 sm:space-y-12">
                        <section>
                            <h2 className="mono-label mb-4 sm:mb-6 border-l-2 border-accent pl-4 text-[9px] sm:text-[10px]">Opis przedmiotu</h2>
                            <div className="text-ink/80 leading-relaxed space-y-4 font-light text-base sm:text-lg">
                                <p>
                                    {listing.description || `Przedmiotem sprzedaży jest ${listing.title}. Stan techniczny oraz wizualny oceniam na bardzo dobry. Sprzęt był używany sporadycznie, głównie w warunkach domowych.`}
                                </p>
                                <p>
                                    W zestawie znajduje się wszystko, co oferuje producent w oryginalnym opakowaniu. Możliwość sprawdzenia na miejscu w Tarnowie lub wysyłka ubezpieczona kurierem.
                                </p>
                                <ul className="list-disc list-inside space-y-2 mt-4 sm:mt-6 text-sm sm:text-base opacity-70">
                                    <li>Oryginalne opakowanie</li>
                                    <li>Pełna dokumentacja</li>
                                    <li>Gwarancja do końca roku</li>
                                    <li>Stan idealny, brak rys</li>
                                </ul>
                            </div>
                        </section>

                        <section className="border-t border-line pt-10 sm:pt-12">
                            <h2 className="mono-label mb-6 sm:mb-8 text-[9px] sm:text-[10px]">Parametry techniczne</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                                {(() => {
                                    const params = [
                                        { label: 'Kategoria', value: listing.category || 'Elektronika' },
                                        { label: 'Lokalizacja', value: listing.location || 'Tarnów' },
                                    ];

                                    // Add dynamic category details if they exist
                                    if (listing.category_details) {
                                        const labels: Record<string, string> = {
                                            'sub_category': 'Podkategoria',
                                            'area': 'Powierzchnia',
                                            'rooms': 'Pokoje',
                                            'floor': 'Piętro',
                                            'salary': 'Wynagrodzenie',
                                            'contract_type': 'Typ umowy',
                                            'experience': 'Doświadczenie',
                                            'condition': 'Stan',
                                            'brand': 'Marka / Model',
                                            'year': 'Rok produkcji',
                                            'mileage': 'Przebieg',
                                            'fuel': 'Paliwo',
                                            'task_type': 'Typ zlecenia',
                                            'deadline': 'Termin',
                                            'time_estimate': 'Czas trwania'
                                        };

                                        Object.entries(listing.category_details).forEach(([key, value]) => {
                                            if (value) {
                                                const displayValue = key === 'area' ? `${value} m²` : key === 'mileage' ? `${value} km` : value;
                                                params.push({ label: labels[key] || key, value: displayValue as string });
                                            }
                                        });
                                    }

                                    return params.map((param, idx) => (
                                        <div key={idx} className="border-b border-line pb-3 sm:pb-4">
                                            <p className="mono-label text-[7px] sm:text-[8px] mb-1 uppercase opacity-60">{param.label}</p>
                                            <p className="text-xs sm:text-sm font-medium">{param.value}</p>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right Column: Pricing & Seller */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
                        <div className="border border-line p-6 sm:p-8 bg-white shadow-xl shadow-ink/5">
                            <div className="mb-6 sm:mb-8">
                                <span className="mono-label text-accent mb-1 sm:mb-2 block text-[9px] sm:text-[10px]">{listing.date}</span>
                                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">{listing.title}</h1>
                                <p className="text-3xl sm:text-4xl font-bold text-accent">{listing.price}</p>
                            </div>

                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <div className="flex items-center gap-3 text-xs sm:text-sm opacity-60">
                                    <MapPin size={14} className="text-accent" />
                                    {listing.location || 'Tarnów, Małopolskie'}
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm opacity-60">
                                    <Calendar size={14} className="text-accent" />
                                    Dodano: {listing.date}
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm opacity-60">
                                    <Tag size={14} className="text-accent" />
                                    ID: #8293102
                                </div>
                            </div>

                            <div className="hidden sm:flex flex-col gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-ink text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageSquare size={16} /> Napisz wiadomość
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full border border-line py-4 font-bold uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2"
                                >
                                    <Phone size={16} /> Pokaż numer
                                </motion.button>
                            </div>
                        </div>

                        <div className="border border-line p-6 sm:p-8 bg-paper/50">
                            <h3 className="mono-label mb-5 sm:mb-6 flex items-center gap-2 text-[9px] sm:text-[10px]">
                                <User size={14} className="text-accent" />
                                Informacje o sprzedawcy
                            </h3>
                            <div className="flex items-center gap-4 mb-5 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm sm:text-base">
                                    {listing.seller?.[0] || 'U'}
                                </div>
                                <div>
                                    <p className="font-bold text-xs sm:text-sm">{listing.seller || 'Użytkownik_829'}</p>
                                    <p className="text-[8px] sm:text-[10px] opacity-40 mono-label">Na platformie od 2022</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-[8px] sm:text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                                <ShieldCheck size={14} /> Zweryfikowany profil
                            </div>
                        </div>

                        <div className="p-4 border border-dashed border-line text-[8px] sm:text-[10px] mono-label leading-relaxed opacity-40">
                            Pamiętaj o zasadach bezpieczeństwa. Nigdy nie podawaj danych karty płatniczej w wiadomościach. Odbiór osobisty to najbezpieczniejsza forma transakcji.
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Action Bar */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-line p-4 flex gap-3 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-ink text-white py-4 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
                >
                    <MessageSquare size={14} /> Wiadomość
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-14 border border-line flex items-center justify-center text-accent"
                >
                    <Phone size={18} />
                </motion.button>
            </div>
        </motion.div>
    );
};
