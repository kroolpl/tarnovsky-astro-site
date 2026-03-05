import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { X, Mail, Lock, Loader2, ArrowRight, ChevronDown, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { createBrowserClient } from '@supabase/ssr';
import { U as UserAvatar } from './UserAvatar_PuqkXw6f.mjs';

const createSupabaseBrowser = () => {
  return createBrowserClient(
    "https://pfxcereyisbqlvzavqae.supabase.co",
    "sb_publishable_Uy59u9_TZwRQqkSgrV8OWQ_lelhylGk"
  );
};

const AuthDrawer = ({ isOpen, onClose, initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const supabase = createSupabaseBrowser();
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setError(null);
    }
  }, [isOpen, initialMode]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: authError } = mode === "login" ? await supabase.auth.signInWithPassword({ email, password }) : await supabase.auth.signUp({ email, password });
    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      window.location.reload();
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-ink/40 backdrop-blur-sm z-[100]"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 25, stiffness: 200 },
        className: "fixed right-0 top-0 h-full w-full max-w-md bg-paper border-l border-line shadow-2xl z-[101] flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-line", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold tracking-tighter uppercase text-ink", children: mode === "login" ? "Logowanie" : "Rejestracja" }),
              /* @__PURE__ */ jsx("span", { className: "mono-label text-[9px] text-accent mt-0.5", children: "System ogłoszeń TARNÓW.TECH" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "p-2 hover:bg-line rounded-sm transition-colors text-accent hover:text-ink",
                children: /* @__PURE__ */ jsx(X, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-8", children: [
            error && /* @__PURE__ */ jsx("div", { className: "mb-8 border-l-2 border-red-500 bg-red-50 p-4 text-ink text-[11px] font-medium animate-in fade-in slide-in-from-left-2 transition-all", children: error }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mono-label text-[10px] mb-2 block text-accent", children: "Email" }),
                /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-accent group-focus-within:text-ink transition-colors", size: 16 }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      required: true,
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      className: "w-full bg-white border border-line pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium",
                      placeholder: "adres@email.com"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mono-label text-[10px] mb-2 block text-accent", children: "Hasło" }),
                /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-accent group-focus-within:text-ink transition-colors", size: 16 }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "password",
                      required: true,
                      value: password,
                      onChange: (e) => setPassword(e.target.value),
                      className: "w-full bg-white border border-line pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-all font-medium",
                      placeholder: "••••••••",
                      minLength: mode === "register" ? 6 : void 0
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.01 },
                  whileTap: { scale: 0.99 },
                  disabled: loading,
                  type: "submit",
                  className: "w-full bg-ink text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-lg shadow-ink/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                  children: loading ? /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", size: 16 }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    mode === "login" ? "Zaloguj się" : "Stwórz konto",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-line text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] mono-label text-accent uppercase mb-3", children: mode === "login" ? "Nie masz konta?" : "Masz już konto?" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setMode(mode === "login" ? "register" : "login"),
                  className: "text-xs font-bold text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-line uppercase",
                  children: mode === "login" ? "Stwórz konto za darmo" : "Zaloguj się tutaj"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-6 bg-paper border-t border-line", children: /* @__PURE__ */ jsxs("p", { className: "text-[8px] mono-label text-accent text-center leading-relaxed", children: [
            "Logując się akceptujesz regulamin oraz politykę prywatności systemu TARNÓW.TECH.",
            /* @__PURE__ */ jsx("br", {}),
            "Wszystkie dane są szyfrowane i bezpieczne."
          ] }) })
        ]
      }
    )
  ] }) });
};

const Header = ({ onHome, user, profile }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "border-b border-line bg-white/80 backdrop-blur-md sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 sm:gap-8", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            whileHover: { scale: 1.02 },
            className: "cursor-pointer",
            onClick: () => onHome?.(),
            children: /* @__PURE__ */ jsxs("a", { href: "/", className: "block", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-lg sm:text-2xl font-bold tracking-tighter text-ink uppercase", children: "TARNÓW.TECH" }),
              /* @__PURE__ */ jsx("p", { className: "mono-label text-[7px] sm:text-[8px] mt-0.5 text-accent hidden xs:block", children: "System ogłoszeń lokalnych v3.0.0" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("button", { className: "hidden sm:flex items-center gap-2 px-4 py-2 border border-line rounded-sm text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300", children: [
          "KATEGORIE ",
          /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: "opacity-40" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-6", children: [
        user ? /* @__PURE__ */ jsxs("a", { href: "/dashboard", className: "flex items-center gap-3 group transition-all", children: [
          /* @__PURE__ */ jsx(
            UserAvatar,
            {
              url: profile?.avatar_url,
              fallback: profile?.full_name || user.email,
              size: "sm",
              className: "group-hover:ring-2 group-hover:ring-accent transition-all"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "mono-label text-[10px] sm:text-xs text-ink uppercase group-hover:text-accent", children: "Konto" })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => openAuth("login"),
              className: "mono-label text-[10px] sm:text-xs hover:text-accent hover:opacity-100 transition-all cursor-pointer bg-transparent border-none p-0 uppercase",
              children: "Logowanie"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-line hidden sm:block", children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => openAuth("register"),
              className: "mono-label text-[10px] sm:text-xs hover:text-accent hover:opacity-100 transition-all cursor-pointer bg-transparent border-none p-0 uppercase",
              children: "Rejestracja"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: user ? "/dashboard/listings/create" : "#",
            onClick: (e) => {
              if (!user) {
                e.preventDefault();
                openAuth("login");
              }
            },
            children: /* @__PURE__ */ jsxs(
              motion.button,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: "bg-ink text-white p-2.5 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2 shadow-lg shadow-ink/10",
                children: [
                  /* @__PURE__ */ jsx(Plus, { size: 16 }),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Dodaj ogłoszenie" })
                ]
              }
            )
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      AuthDrawer,
      {
        isOpen: isAuthOpen,
        onClose: () => setIsAuthOpen(false),
        initialMode: authMode
      }
    )
  ] });
};

export { Header as H };
