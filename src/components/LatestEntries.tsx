import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import type { Announcement } from './FeaturedSection';

export const LatestEntries = ({ items, title = 'Najnowsze wpisy' }: { items: Announcement[], title?: string }) => (
    <div className="flex-1">
        <div className="flex justify-between items-end mb-4 sm:mb-6 border-b border-line pb-4">
            <h2 className="mono-label flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                {title}
            </h2>
            {items.length > 0 && (
                <button className="mono-label flex items-center gap-1 hover:text-accent hover:opacity-100 transition-all text-[8px] sm:text-[9px] uppercase tracking-widest">
                    Archiwum <Plus size={10} className="rotate-45 opacity-40" />
                </button>
            )}
        </div>

        {items.length > 0 ? (
            <>
                <div className="divide-y divide-line border-t border-line">
                    {items.map((item, idx) => (
                        <a key={item.id} href={`/listing/${item.id}`} className="block">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="data-row py-4 sm:py-5 px-2 sm:px-3 flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4 sm:gap-8 overflow-hidden">
                                    <span className="mono-label w-14 sm:w-20 text-accent-light text-[7px] sm:text-[8px] shrink-0">{item.date}</span>
                                    <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                                        <span className="text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform truncate">{item.title}</span>
                                        {item.tags?.map(tag => (
                                            <span key={tag} className="mono-label text-[6px] sm:text-[8px] border border-accent/20 text-accent px-1 sm:px-1.5 py-0.5 rounded-sm shrink-0">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-ink/70 group-hover:text-ink transition-colors shrink-0 ml-4">{item.price}</span>
                            </motion.div>
                        </a>
                    ))}
                </div>
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="w-full mt-8 sm:mt-12 py-4 sm:py-5 bg-ink text-white mono-label text-[10px] sm:text-xs font-bold hover:bg-accent transition-all shadow-lg shadow-ink/5 uppercase tracking-widest"
                >
                    Wczytaj więcej danych
                </motion.button>
            </>
        ) : (
            <div className="py-20 border border-dashed border-line bg-paper/30 flex flex-col items-center justify-center text-center px-6">
                <div className="w-12 h-12 border border-line flex items-center justify-center mb-6 opacity-20">
                    <Plus size={24} className="rotate-45" />
                </div>
                <h3 className="text-lg font-bold mb-2">Brak wyników wyszukiwania</h3>
                <p className="text-xs text-accent opacity-60 mono-label uppercase tracking-wider max-w-xs">
                    Spróbuj zmienić słowa kluczowe lub zresetować filtry, aby znaleźć to, czego szukasz.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-8 text-[9px] mono-label text-ink border-b border-ink hover:text-accent hover:border-accent transition-all uppercase tracking-widest pb-1"
                >
                    Wróć do wszystkich ogłoszeń
                </button>
            </div>
        )}
    </div>
);
