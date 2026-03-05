import { e as createComponent, g as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_BWUWzUga.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="pl"> <head><meta charset="UTF-8"><meta name="description" content="TARNÓW.TECH - System ogłoszeń lokalnych v3.0.0"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | TARNÓW.TECH</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
