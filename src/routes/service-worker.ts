import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";

// Configuration du service worker pour le build statique
setupServiceWorker();

addEventListener("install", (event) => {
  // Cache le réseau immédiatement
  event.waitUntil(self.skipWaiting());
});

addEventListener("activate", (event) => {
  // Force le service worker à gérer immédiatement les clients
  event.waitUntil(self.clients.claim());
});

// Configuration optionnelle pour le routage offline (invisible)
declare const self: ServiceWorkerGlobalScope;
