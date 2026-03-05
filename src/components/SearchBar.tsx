import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export const SearchBar = () => {
    const [query, setQuery] = React.useState('');
    const [hasImages, setHasImages] = React.useState(false);
    const [isToday, setIsToday] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setQuery(params.get('q') || '');
        setHasImages(params.get('has_images') === 'true');
        setIsToday(params.get('today') === 'true');

        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        if (hasImages) params.set('has_images', 'true');
        if (isToday) params.set('today', 'true');

        const queryString = params.toString();
        window.location.href = queryString ? `/?${queryString}` : '/';
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-line p-5 sm:p-8 bg-white shadow-sm"
            >
                <form onSubmit={handleSearch}>
                    <div className="relative mb-6 sm:mb-8">
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="SZUKAJ OGŁOSZEŃ... [CTRL + K]"
                            className="w-full border-b border-line py-3 sm:py-5 text-lg sm:text-2xl font-light focus:outline-none focus:border-accent transition-all duration-500 placeholder:opacity-20 uppercase tracking-tighter"
                        />
                        <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-accent p-2 hover:scale-110 transition-transform">
                            <Search size={24} />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-6 sm:gap-10">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative w-5 h-5">
                                    <input
                                        type="checkbox"
                                        checked={hasImages}
                                        onChange={(e) => setHasImages(e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`w-full h-full border transition-all flex items-center justify-center rounded-sm ${hasImages ? 'border-accent bg-accent/5' : 'border-line group-hover:border-accent'}`}>
                                        <motion.div
                                            initial={false}
                                            animate={{ scale: hasImages ? 1 : 0, opacity: hasImages ? 1 : 0 }}
                                            className="w-2 h-2 bg-accent"
                                        />
                                    </div>
                                </div>
                                <span className={`mono-label text-[9px] sm:text-[10px] uppercase tracking-widest transition-colors ${hasImages ? 'text-accent font-bold' : 'text-ink/40 group-hover:text-accent'}`}>
                                    Tylko ze zdjęciami
                                </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative w-5 h-5">
                                    <input
                                        type="checkbox"
                                        checked={isToday}
                                        onChange={(e) => setIsToday(e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`w-full h-full border transition-all flex items-center justify-center rounded-sm ${isToday ? 'border-accent bg-accent/5' : 'border-line group-hover:border-accent'}`}>
                                        <motion.div
                                            initial={false}
                                            animate={{ scale: isToday ? 1 : 0, opacity: isToday ? 1 : 0 }}
                                            className="w-2 h-2 bg-accent"
                                        />
                                    </div>
                                </div>
                                <span className={`mono-label text-[9px] sm:text-[10px] uppercase tracking-widest transition-colors ${isToday ? 'text-accent font-bold' : 'text-ink/40 group-hover:text-accent'}`}>
                                    Dodane dzisiaj
                                </span>
                            </label>
                        </div>

                        {(query || hasImages || isToday) && (
                            <button
                                type="button"
                                onClick={() => window.location.href = '/'}
                                className="text-[8px] sm:text-[9px] mono-label text-accent underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest"
                            >
                                Wyczyść filtry [×]
                            </button>
                        )}
                    </div>
                </form>
            </motion.div>
        </section>
    );
};
