import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { createSupabaseBrowser } from '../lib/supabaseBrowser';

interface AuthDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'login' | 'register';
}

export const AuthDrawer: React.FC<AuthDrawerProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState<'login' | 'register'>(initialMode);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const supabase = createSupabaseBrowser();

    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
            setError(null);
        }
    }, [isOpen, initialMode]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error: authError } = mode === 'login'
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password });

        if (authError) {
            setError(authError.message);
            setLoading(false);
        } else {
            // Success - reload the page to update SSR state
            window.location.reload();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-paper border-l border-line shadow-2xl z-[101] flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-line">
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold tracking-tighter uppercase text-ink">
                                    {mode === 'login' ? 'Logowanie' : 'Rejestracja'}
                                </h2>
                                <span className="mono-label text-[9px] text-accent mt-0.5">
                                    System ogłoszeń TARNÓW.TECH
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-line rounded-sm transition-colors text-accent hover:text-ink"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8">
                            {error && (
                                <div className="mb-8 border-l-2 border-red-500 bg-red-50 p-4 text-ink text-[11px] font-medium animate-in fade-in slide-in-from-left-2 transition-all">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="mono-label text-[10px] mb-2 block text-accent">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-accent group-focus-within:text-ink transition-colors" size={16} />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white border border-line pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium"
                                            placeholder="adres@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mono-label text-[10px] mb-2 block text-accent">Hasło</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-accent group-focus-within:text-ink transition-colors" size={16} />
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-white border border-line pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium"
                                            placeholder="••••••••"
                                            minLength={mode === 'register' ? 6 : undefined}
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    disabled={loading}
                                    type="submit"
                                    className="w-full bg-ink text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-lg shadow-ink/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin" size={16} />
                                    ) : (
                                        <>
                                            {mode === 'login' ? 'Zaloguj się' : 'Stwórz konto'}
                                            <ArrowRight size={14} />
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            <div className="mt-12 pt-8 border-t border-line text-center">
                                <p className="text-[10px] mono-label text-accent uppercase mb-3">
                                    {mode === 'login' ? 'Nie masz konta?' : 'Masz już konto?'}
                                </p>
                                <button
                                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                                    className="text-xs font-bold text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-line uppercase"
                                >
                                    {mode === 'login' ? 'Stwórz konto za darmo' : 'Zaloguj się tutaj'}
                                </button>
                            </div>
                        </div>

                        <div className="p-6 bg-paper border-t border-line">
                            <p className="text-[8px] mono-label text-accent text-center leading-relaxed">
                                Logując się akceptujesz regulamin oraz politykę prywatności systemu TARNÓW.TECH.<br />
                                Wszystkie dane są szyfrowane i bezpieczne.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
