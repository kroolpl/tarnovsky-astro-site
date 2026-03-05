import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import * as Avatar from '@radix-ui/react-avatar';

const UserAvatar = ({
  url,
  alt = "User Avatar",
  fallback = "U",
  size = "md",
  className = ""
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-16 h-16 text-xl"
  };
  return /* @__PURE__ */ jsxs(Avatar.Root, { className: `inline-flex items-center justify-center overflow-hidden bg-paper border border-line select-none transition-all duration-300 rounded-none ${sizeClasses[size]} ${className}`, children: [
    /* @__PURE__ */ jsx(
      Avatar.Image,
      {
        className: "h-full w-full object-cover",
        src: url || void 0,
        alt
      }
    ),
    /* @__PURE__ */ jsx(
      Avatar.Fallback,
      {
        className: "flex h-full w-full items-center justify-center bg-paper text-ink font-bold font-mono uppercase",
        delayMs: 600,
        children: fallback.substring(0, 2)
      }
    )
  ] });
};

export { UserAvatar as U };
