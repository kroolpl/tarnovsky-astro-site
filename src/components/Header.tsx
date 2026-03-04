import React, { useState } from 'react';
import { Plus, ChevronDown, User } from 'lucide-react';
import { motion } from 'motion/react';
import { AuthDrawer } from './AuthDrawer';

interface HeaderProps {
  onHome?: () => void;
  user?: any;
}

export const Header: React.FC<HeaderProps> = ({ onHome, user }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <>
      <header className="border-b border-line bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => onHome?.()}
            >
              <a href="/" className="block">
                <h1 className="text-lg sm:text-2xl font-bold tracking-tighter text-ink uppercase">TARNÓW.TECH</h1>
                <p className="mono-label text-[7px] sm:text-[8px] mt-0.5 text-accent hidden xs:block">System ogłoszeń lokalnych v3.0.0</p>
              </a>
            </motion.div>

            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-line rounded-sm text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300">
              KATEGORIE <ChevronDown size={14} className="opacity-40" />
            </button>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {user ? (
              <a href="/dashboard" className="flex items-center gap-2 mono-label text-[10px] sm:text-xs hover:text-accent hover:opacity-100 transition-all uppercase">
                <User size={14} />
                <span>Konto</span>
              </a>
            ) : (
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => openAuth('login')}
                  className="mono-label text-[10px] sm:text-xs hover:text-accent hover:opacity-100 transition-all cursor-pointer bg-transparent border-none p-0 uppercase"
                >
                  Logowanie
                </button>
                <span className="text-line hidden sm:block">|</span>
                <button
                  onClick={() => openAuth('register')}
                  className="mono-label text-[10px] sm:text-xs hover:text-accent hover:opacity-100 transition-all cursor-pointer bg-transparent border-none p-0 uppercase"
                >
                  Rejestracja
                </button>
              </div>
            )}

            <a
              href={user ? "/dashboard/listings/create" : "#"}
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  openAuth('login');
                }
              }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-ink text-white p-2.5 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2 shadow-lg shadow-ink/10"
              >
                <Plus size={16} /> <span className="hidden sm:inline">Dodaj ogłoszenie</span>
              </motion.button>
            </a>
          </div>
        </div>
      </header>

      <AuthDrawer
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};
