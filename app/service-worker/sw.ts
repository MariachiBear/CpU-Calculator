/* eslint-disable no-console */
// Service worker

import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";

declare const self: any;

const componentName = "Service Worker";

// Enable debug mode during development
const DEBUG_MODE =
  location.hostname.endsWith(".app.local") || location.hostname === "localhost";

const DAY_IN_SECONDS = 24 * 60 * 60;
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;
const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;

/**
 * The current version of the service worker.
 */
const SERVICE_WORKER_VERSION = "1.1.0";

if (DEBUG_MODE) {
  console.debug(`Service worker version ${SERVICE_WORKER_VERSION} loading...`);
}

// ------------------------------------------------------------------------------------------
// Precaching configuration
// ------------------------------------------------------------------------------------------
cleanupOutdatedCaches();

// Precaching
// Make sure that all the assets passed in the array below are fetched and cached
// The empty array below is replaced at build time with the full list of assets to cache
// This is done by workbox-build-inject.js for the production build
const assetsToCache = self.__WB_MANIFEST;
// To customize the assets afterwards:
// assetsToCache = [...assetsToCache, ???];

if (DEBUG_MODE) {
  console.trace(
    `${componentName}:: Assets that will be cached: `,
    assetsToCache
  );
}

precacheAndRoute(assetsToCache);

// ------------------------------------------------------------------------------------------
// Routes
// ------------------------------------------------------------------------------------------

// Default page handler for offline usage,
// where the browser does not how to handle deep links
// it's a SPA, so each path that is a navigation should default to root
const defaultRouteHandler = createHandlerBoundToURL("/");
const defaultNavigationRoute = new NavigationRoute(defaultRouteHandler, {
  // allowlist: [],
  // denylist: [],
});
registerRoute(defaultNavigationRoute);

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 30,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  })
);

// Make JS/CSS fast by returning assets from the cache
// But make sure they're updating in the background for next use
registerRoute(
  /\.(?:js|css)$/,
  new StaleWhileRevalidate({ cacheName: "styles" })
);

// Cache images
// But clean up after a while
registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 250,
        maxAgeSeconds: MONTH_IN_SECONDS,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  })
);

// ------------------------------------------------------------------------------------------
// Messages
// ------------------------------------------------------------------------------------------
self.addEventListener(
  "message",
  (event: { data: any; type: any; ports: any }) => {
    if (event && event.data && event.data.type) {
      if (event.data.type === "GET_VERSION") {
        if (DEBUG_MODE) {
          console.debug(
            `${componentName}:: Returning version: ${SERVICE_WORKER_VERSION}`
          );
        }
        event.ports[0].postMessage(SERVICE_WORKER_VERSION);
      } else if (event.data.type === "SKIP_WAITING") {
        if (DEBUG_MODE) {
          console.debug(`${componentName}:: Skipping waiting...`);
        }
        self.skipWaiting();
      } else if (event.data.type === "CLIENTS_CLAIM") {
        if (DEBUG_MODE) {
          console.debug(`${componentName}:: Claiming clients`);
        }
        self.clients.claim();
      }
    }
  }
);
