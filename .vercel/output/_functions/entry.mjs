import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B2jdlAcs.mjs';
import { manifest } from './manifest_CvPccsS1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/categories.astro.mjs');
const _page3 = () => import('./pages/admin/users.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/api/auth/signout.astro.mjs');
const _page6 = () => import('./pages/dashboard/listings/create.astro.mjs');
const _page7 = () => import('./pages/dashboard/listings/edit/_id_.astro.mjs');
const _page8 = () => import('./pages/dashboard/profile.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/listing/_id_.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/register.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/categories.astro", _page2],
    ["src/pages/admin/users.astro", _page3],
    ["src/pages/admin/index.astro", _page4],
    ["src/pages/api/auth/signout.ts", _page5],
    ["src/pages/dashboard/listings/create.astro", _page6],
    ["src/pages/dashboard/listings/edit/[id].astro", _page7],
    ["src/pages/dashboard/profile.astro", _page8],
    ["src/pages/dashboard/index.astro", _page9],
    ["src/pages/listing/[id].astro", _page10],
    ["src/pages/login.astro", _page11],
    ["src/pages/register.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "e4816eb1-f890-41c5-8832-a13f6a873d6d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
