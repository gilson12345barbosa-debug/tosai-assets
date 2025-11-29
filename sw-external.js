// Arquivo externo para ser importado no Service Worker
// Aqui você coloca funções extras, estratégias de cache, logs etc.

console.log("Arquivo externo 'sw-external.js' carregado com sucesso!");

self.customLogger = function (msg) {
  console.log("[ToSai SW] " + msg);
};

self.cacheExternalFiles = async function () {
  const cache = await caches.open("tosai-cache-v1");
  await cache.addAll([
    "https://cdn.jsdelivr.net/gh/gilson12345barbosa-debug/tosai-assets@main/icon-192x192.png",
    "https://cdn.jsdelivr.net/gh/gilson12345barbosa-debug/tosai-assets@main/icon-512x512.png"
  ]);
  console.log("Arquivos externos adicionados ao cache.");
};
