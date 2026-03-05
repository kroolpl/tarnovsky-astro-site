import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import type { Announcement } from './FeaturedSection';

export const PromotedSidebar = ({ items }: { items: Announcement[] }) => (
    <aside className="w-80 hidden lg:block">
        <div className="border border-line p-8 bg-white shadow-sm sticky top-28">
            <h2 className="mono-label mb-8 pb-4 border-b border-line flex items-center justify-between">
                Promoted_Items
                <ImageIcon size={12} className="opacity-20" />
            </h2>
            <div className="space-y-10">
                {items.map(item => (
                    <a key={item.id} href={`/listing/${item.id}`} className="block">
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] bg-paper mb-5 overflow-hidden relative">
                                <img
                                    src={item.image_urls?.[0] || 'https://picsum.photos/seed/promo/400/300'}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 border border-ink/5" />
                            </div>
                            <span className="mono-label text-[8px] mb-2 block text-accent">[PROMOTED]</span>
                            <h3 className="text-sm font-medium mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                            <p className="text-sm font-bold text-ink/80">{item.price}</p>
                        </motion.div>
                    </a>
                ))}
            </div>
        </div>
    </aside>
);
