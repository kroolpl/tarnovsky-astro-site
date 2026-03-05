import React from 'react';
import { motion } from 'motion/react';

export interface Announcement {
    id: string;
    date: string;
    title: string;
    price: string;
    tags?: string[];
    featured?: boolean;
    image_urls?: string[];
    description?: string;
    location?: string;
    category?: string;
    category_details?: Record<string, any>;
    seller?: string;
}

export const FeaturedSection = ({ items }: { items: Announcement[] }) => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex justify-between items-end mb-4 sm:mb-6">
            <h2 className="mono-label border-l-2 border-accent pl-3 text-[9px] sm:text-[10px]">Featured Editorial Selection</h2>
            <span className="mono-label opacity-30 hidden sm:inline">[CURATED_FEED]</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line shadow-xl shadow-ink/5">
            {items.map((item, idx) => (
                <a key={item.id} href={`/listing/${item.id}`} className={`bg-white group cursor-pointer overflow-hidden relative ${idx === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <div className="aspect-square relative bg-paper overflow-hidden">
                            <motion.img
                                src={item.image_urls?.[0] || 'https://picsum.photos/seed/detail/1200/800'}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                whileHover={{ scale: 1.05 }}
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors" />
                            <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
                                <span className="bg-ink text-white px-1.5 py-0.5 mono-label text-[7px] sm:text-[8px] tracking-[0.1em] sm:tracking-[0.2em]">[FEATURED]</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-8 border-t border-line group-hover:border-accent transition-colors">
                            <h3 className="text-sm sm:text-xl font-medium mb-1 sm:mb-2 group-hover:text-accent transition-colors line-clamp-1">{item.title}</h3>
                            <p className="text-xs sm:text-lg font-bold text-ink/80">{item.price}</p>
                        </div>
                    </motion.div>
                </a>
            ))}
        </div>
    </section>
);
