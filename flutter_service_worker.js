'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "341f19686283062b706f3576afbfb3c2",
"assets/assets/images/food/food.png": "32520f8c10a5b8c2e6606b7a671453e1",
"assets/assets/images/ghost/blue/ghost-blue-bot.png": "ac65993ae231771e0980e7d7c2d88079",
"assets/assets/images/ghost/blue/ghost-blue-left.png": "380186dca11c3ed85747561919d7a82e",
"assets/assets/images/ghost/blue/ghost-blue-right.png": "d19f4b76754165d33fa6847c6eb5b6cf",
"assets/assets/images/ghost/blue/ghost-blue-top.png": "88bbaf9b44edaf160f567580d7a0867c",
"assets/assets/images/ghost/pink/ghost-pink-bot.png": "50237dc4361a2870f31a410c6a39b80e",
"assets/assets/images/ghost/pink/ghost-pink-left.png": "415ebadc02a0bba625b03c4d6dc07366",
"assets/assets/images/ghost/pink/ghost-pink-right.png": "c3d669e8f57d3ef25ae1e3590157bb74",
"assets/assets/images/ghost/pink/ghost-pink-top.png": "dae6e4d992cb8fd242632517ace2f21f",
"assets/assets/images/ghost/red/ghost-red-bot.png": "16fd950832d1be3afde186a5502a6edc",
"assets/assets/images/ghost/red/ghost-red-left.png": "9872a2dc78745770b08a350302f1ad3b",
"assets/assets/images/ghost/red/ghost-red-right.png": "9cf5d776e2c28e875e2b8ab4a88b598f",
"assets/assets/images/ghost/red/ghost-red-top.png": "7390182a373b44bf2258b3ccdd59d5de",
"assets/assets/images/ghost/yellow/ghost-yellow-bot.png": "803c5bd09c4b0630f2dde6b05ef6486b",
"assets/assets/images/ghost/yellow/ghost-yellow-left.png": "115bfbeb95cc7e23e319e63a58c8a622",
"assets/assets/images/ghost/yellow/ghost-yellow-right.png": "eae052ea78074a3237b172757ff94f50",
"assets/assets/images/ghost/yellow/ghost-yellow-top.png": "27545ac6d34d61bf3774a54350c9c6a6",
"assets/assets/images/maps/mapa.json": "1fcad66e0c03aa69261ec17531866f80",
"assets/assets/images/maps/tileartgoogle.png": "1dabce4042377263b1576f6c69616f59",
"assets/assets/images/maps/tilesetmap.json": "7289eb17f253fdb3b19711fd61769194",
"assets/assets/images/pacman/pacman-bot.png": "1e82f0e7ad7025d3eebd79251de02084",
"assets/assets/images/pacman/pacman-die.png": "04ff17efc41455033d68a9a3b1e1015d",
"assets/assets/images/pacman/pacman-idlebot.png": "6e604cf1b459ff8e06913cbe8bde65b9",
"assets/assets/images/pacman/pacman-idleleft.png": "e26dd5651342a45bb041abfd4b1fae8d",
"assets/assets/images/pacman/pacman-idleright.png": "45dc65fe3e37af682abcc98b8b30b84c",
"assets/assets/images/pacman/pacman-idletop.png": "6dfe5d8b134490ba4d517ec79fe46708",
"assets/assets/images/pacman/pacman-left.png": "213b28b433f6458eb0f14a8cb3cd2624",
"assets/assets/images/pacman/pacman-right.png": "ed9270e0d1d7f654b829d00ab2cf394d",
"assets/assets/images/pacman/pacman-top.png": "1eee61a0f4a2da4c4b2b4a8ad6e73308",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "78e32e2dfa05f9ca1b721da39c6a2897",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ceec44fbd31f4b8c829e6834870e6bba",
"/": "ceec44fbd31f4b8c829e6834870e6bba",
"main.dart.js": "4ac4384d31763e262cd5611ec1e5c9d3",
"manifest.json": "bb753abd83db9a4781446fedf3f5199a",
"version.json": "d0aa9e442261b6ae1745117450c1a58b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
