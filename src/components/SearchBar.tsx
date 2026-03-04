import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export const SearchBar = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-line p-5 sm:p-8 bg-white shadow-sm"
        >
            <div className="relative mb-4 sm:mb-6">
                <input
                    type="text"
                    placeholder="SZUKAJ... [CTRL + K]"
                    className="w-full border-b border-line py-3 sm:py-4 text-base sm:text-xl font-light focus:outline-none focus:border-accent transition-all duration-500 placeholder:opacity-20"
                />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-accent opacity-40" size={20} />
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 border border-line group-hover:border-accent transition-all flex items-center justify-center rounded-sm">
                        <motion.div
                            initial={false}
                            whileHover={{ scale: 1.2 }}
                            className="w-2.5 h-2.5 bg-accent opacity-0 group-hover:opacity-20 transition-opacity"
                        />
                    </div>
                    <span className="mono-label text-[8px] sm:text-[9px] group-hover:text-accent transition-colors">Zdjęcia</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 border border-line group-hover:border-accent transition-all flex items-center justify-center rounded-sm">
                        <motion.div
                            initial={false}
                            whileHover={{ scale: 1.2 }}
                            className="w-2.5 h-2.5 bg-accent opacity-0 group-hover:opacity-20 transition-opacity"
                        />
                    </div>
                    <span className="mono-label text-[8px] sm:text-[9px] group-hover:text-accent transition-colors">Dzisiejsze</span>
                </label>
            </div>
        </motion.div>
    </section>
);
