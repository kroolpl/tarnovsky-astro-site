import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BWUWzUga.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_C5swUOX9.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_LRTh__yv.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/","cacheDir":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/node_modules/.astro/","outDir":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/dist/","srcDir":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/","publicDir":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/public/","buildClientDir":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/dist/client/","buildServerDir":"file:///home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"},{"type":"inline","content":".text-paper-dark[data-astro-cid-zetdm5md]{color:#e5e7eb}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/admin/categories","isIndex":false,"type":"page","pattern":"^\\/admin\\/categories\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/categories.astro","pathname":"/admin/categories","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/admin/users","isIndex":false,"type":"page","pattern":"^\\/admin\\/users\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/users.astro","pathname":"/admin/users","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"},{"type":"inline","content":".category-card[data-astro-cid-rliquca2]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:2px;background:var(--color-ink);transform:scaleX(0);transform-origin:left;transition:transform .4s ease}.category-card[data-astro-cid-rliquca2]:hover:before{transform:scaleX(1)}\n"}],"routeData":{"route":"/dashboard/listings/create","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/listings\\/create\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}],[{"content":"listings","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/listings/create.astro","pathname":"/dashboard/listings/create","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/dashboard/listings/edit/[id]","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/listings\\/edit\\/([^/]+?)\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}],[{"content":"listings","dynamic":false,"spread":false}],[{"content":"edit","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/dashboard/listings/edit/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/dashboard/profile","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/profile\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}],[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/profile.astro","pathname":"/dashboard/profile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/dashboard","isIndex":true,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/index.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/listing/[id]","isIndex":false,"type":"page","pattern":"^\\/listing\\/([^/]+?)\\/?$","segments":[[{"content":"listing","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/listing/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/categories.DiwKxa1_.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/categories.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/admin/users.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/index.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/create.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/edit/[id].astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/profile.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/listing/[id].astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/admin/categories@_@astro":"pages/admin/categories.astro.mjs","\u0000@astro-page:src/pages/admin/users@_@astro":"pages/admin/users.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/dashboard/listings/create@_@astro":"pages/dashboard/listings/create.astro.mjs","\u0000@astro-page:src/pages/dashboard/listings/edit/[id]@_@astro":"pages/dashboard/listings/edit/_id_.astro.mjs","\u0000@astro-page:src/pages/dashboard/profile@_@astro":"pages/dashboard/profile.astro.mjs","\u0000@astro-page:src/pages/dashboard/index@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/listing/[id]@_@astro":"pages/listing/_id_.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bb9xyLhs.mjs","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D9535Ydb.mjs","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/FeaturedSection":"_astro/FeaturedSection.DZmIvUrC.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/LatestEntries":"_astro/LatestEntries.D3hYdue_.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/create.astro?astro&type=script&index=0&lang.ts":"_astro/create.astro_astro_type_script_index_0_lang.DuPg9QEA.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/edit/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.BbxMb0Qp.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/profile.astro?astro&type=script&index=0&lang.ts":"_astro/profile.astro_astro_type_script_index_0_lang.Bu2cWUOU.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/SearchBar":"_astro/SearchBar.CWYQi00N.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/PromotedSidebar":"_astro/PromotedSidebar.DepCWGMm.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/ListingDetail":"_astro/ListingDetail.B76uljpX.js","@astrojs/react/client.js":"_astro/client.YXDe8QUu.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/Header":"_astro/Header._hnJWTBL.js","/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/components/UserAvatar":"_astro/UserAvatar.Degz2bew.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/listings/edit/[id].astro?astro&type=script&index=0&lang.ts","const a=document.querySelectorAll('input[name=\"keep_images\"]');a.forEach(c=>{c.addEventListener(\"change\",e=>{const t=e.target.closest(\".relative\");e.target.checked?t?.classList.remove(\"opacity-30\"):t?.classList.add(\"opacity-30\")})});"],["/home/qrol/code/tarnovsky_astro/tarnovsky-astro-site/src/pages/dashboard/profile.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"avatar-input\"),t=document.getElementById(\"file-name\");a?.addEventListener(\"change\",n=>{const e=n.target.files?.[0];e&&t&&(t.textContent=`Wybrano: ${e.name}`)});"]],"assets":["/_astro/categories.DiwKxa1_.css","/favicon.ico","/favicon.svg","/_astro/FeaturedSection.DZmIvUrC.js","/_astro/Header._hnJWTBL.js","/_astro/LatestEntries.D3hYdue_.js","/_astro/ListingDetail.B76uljpX.js","/_astro/PromotedSidebar.DepCWGMm.js","/_astro/SearchBar.CWYQi00N.js","/_astro/UserAvatar.Degz2bew.js","/_astro/client.YXDe8QUu.js","/_astro/create.astro_astro_type_script_index_0_lang.DuPg9QEA.js","/_astro/createLucideIcon.4LMWqTM_.js","/_astro/index.DfVe81kx.js","/_astro/index.lGCeTMi6.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/plus.CLSTCkxE.js","/_astro/proxy.Dk2wjCqv.js"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"J7zAV0NmwuWWqTnvLbzSm3D6B6rCCST17JNTZwD4tKA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
