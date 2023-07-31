if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => n(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (i(...e), t));
  };
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/303-f844980b8e160d10.js',
          revision: 'f844980b8e160d10',
        },
        {
          url: '/_next/static/chunks/999-dc1057c378adb9cd.js',
          revision: 'dc1057c378adb9cd',
        },
        {
          url: '/_next/static/chunks/c16184b3-7a4e66ef768f88d1.js',
          revision: '7a4e66ef768f88d1',
        },
        {
          url: '/_next/static/chunks/framework-3b5a00d5d7e8d93b.js',
          revision: '3b5a00d5d7e8d93b',
        },
        {
          url: '/_next/static/chunks/main-396a2286256f144e.js',
          revision: '396a2286256f144e',
        },
        {
          url: '/_next/static/chunks/pages/_app-372b07de94e9f82f.js',
          revision: '372b07de94e9f82f',
        },
        {
          url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js',
          revision: '8353112a01355ec2',
        },
        {
          url: '/_next/static/chunks/pages/accesorios-a12e2d6ef80a784c.js',
          revision: 'a12e2d6ef80a784c',
        },
        {
          url: '/_next/static/chunks/pages/admin-dashboard-b22e3d54b56f0947.js',
          revision: 'b22e3d54b56f0947',
        },
        {
          url: '/_next/static/chunks/pages/admin-dashboard/uploader-f03b2bc454c561ae.js',
          revision: 'f03b2bc454c561ae',
        },
        {
          url: '/_next/static/chunks/pages/galletas-862dc6f2423b4f1f.js',
          revision: '862dc6f2423b4f1f',
        },
        {
          url: '/_next/static/chunks/pages/index-05320d4653d2135e.js',
          revision: '05320d4653d2135e',
        },
        {
          url: '/_next/static/chunks/pages/mis-compras-ca256b85efc40917.js',
          revision: 'ca256b85efc40917',
        },
        {
          url: '/_next/static/chunks/pages/plantas-5188c0732f6bb848.js',
          revision: '5188c0732f6bb848',
        },
        {
          url: '/_next/static/chunks/pages/productos/%5Bid%5D-89a70de4038ff244.js',
          revision: '89a70de4038ff244',
        },
        {
          url: '/_next/static/chunks/pages/shopping-cart-90178ad1fff5bd26.js',
          revision: '90178ad1fff5bd26',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-87b3a303122f2f0d.js',
          revision: '87b3a303122f2f0d',
        },
        {
          url: '/_next/static/css/96f5cc7f927ed42f.css',
          revision: '96f5cc7f927ed42f',
        },
        {
          url: '/_next/static/xGYD6y5_1Ga22qcCJ2QFi/_buildManifest.js',
          revision: 'a10595167f5685cb80f85dd35af5670d',
        },
        {
          url: '/_next/static/xGYD6y5_1Ga22qcCJ2QFi/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        {
          url: '/googleSignin.svg',
          revision: 'b7727941c0e8a117b6cfd8f06a1cb7ed',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '7e0ed0c722b5ad8aabe4a86132a1eb9a',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: '9851bb0f56af3b9c072ba7e0852d9e20',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: 'c012356752d32bf026dea4a8bc5f11a0',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '7ae034cbd1b468edec018d2fc11eef33',
        },
        { url: '/logo.png', revision: '8af76f64d3dc7f617814f4c1fd8f7a4e' },
        { url: '/logo.svg', revision: '9d101e318db568c1a4be3e85a5006471' },
        { url: '/logo1.svg', revision: 'a98de9bea32e1a8843df0a13b9d80c8d' },
        { url: '/manifest.json', revision: 'c17f6ef38154d4476b3e1806c8fc1f7d' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
