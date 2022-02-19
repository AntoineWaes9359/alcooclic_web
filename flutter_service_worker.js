'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "29d47756c1e212a4fd05e927a7cb84fb",
"splash/img/light-2x.png": "5b119f0ace4cd31d10fec6819ca977b3",
"splash/img/dark-4x.png": "5e15fa92932f5d2107e9e837f8d1614f",
"splash/img/light-3x.png": "d23462d2ccbcd893f83a64fadff7a79b",
"splash/img/dark-3x.png": "d23462d2ccbcd893f83a64fadff7a79b",
"splash/img/light-4x.png": "5e15fa92932f5d2107e9e837f8d1614f",
"splash/img/dark-2x.png": "5b119f0ace4cd31d10fec6819ca977b3",
"splash/img/dark-1x.png": "5016582c312856dcf8ba8d8f7d239e28",
"splash/img/light-1x.png": "5016582c312856dcf8ba8d8f7d239e28",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"index.html": "1745aad5eb4c35c7593c1aae615ddd61",
"/": "1745aad5eb4c35c7593c1aae615ddd61",
"main.dart.js": "d8989120652cf3b6a978ddbdbb8688bc",
"README.md": "fb882671895a8d237ec9aa67654b35b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "749896f858df835f186e9aa88d6998df",
".git/ORIG_HEAD": "c2e394e3bf8e1993bc014106e5df3181",
".git/config": "864f3f7a9132785bf2e1a4584d632e0c",
".git/objects/33/904b3b675eb9328bee0fc7073e9a9109d86b0a": "35569b0d21af8cbeaae47a4f7b0f4a76",
".git/objects/d7/72c8aa86277cc3336b73efc666d75937a15b30": "46965408e95c8f9e886dc35ba26e1608",
".git/objects/d8/cb7d5cc6c93eae21799afae2b5b158701e64af": "085f0567372b436cb11263d3fccc3617",
".git/objects/fb/605c9b5e5653df89f230e80b3fbfffaf68f403": "4fbe2190b92f5758ecf39f9d9a4401f4",
".git/objects/pack/pack-94e4f699c184d204676e8a0be9451fa742e7e4e1.idx": "442a459bc130cc2da61b00662b817473",
".git/objects/pack/pack-94e4f699c184d204676e8a0be9451fa742e7e4e1.pack": "61a9472ee4452f330a969e298a4dd747",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/45/f4cb01df71e1be8a121233cdf5032a4043b560": "c71657807c70241dd6d54ca235603d7a",
".git/objects/87/72a93c3e69f2dc01720828be0b3b67eb890f98": "edaa5cb674fad34db75bd747de273f2e",
".git/objects/17/6c9f238f3b7a85adfa111a2d54e71739db3307": "0a0f5089d97b64a7a4d27661b3d6cd0e",
".git/objects/10/9b8091b5a25f374d7856756771bf099c48a7bf": "a7dd9d97af110da2beaebe558a9d2669",
".git/objects/65/ecca7cea52bafce4e2428ef6f11c1bd952190a": "8a5e521972c1788622971a8ab4a04e74",
".git/objects/90/6cb6ab55f78f6ce04411e94a93edbfb0320d88": "bd5c684a86448bbf3782c8aeda831cc3",
".git/objects/d4/5671c3a6960678316b69fab01a4612ee8dfaf4": "26a53cbfbddef1a80ea7aa992f268c88",
".git/objects/ba/21710236ece11961667a6897147e12a209cd9e": "301f42a9f920c9e3a2ab79ce7fec8993",
".git/objects/f1/5c39f3faca909c516aca1b8b3b3280efb6b24e": "f5adfb35cbf8c74c4fa2da0ff11e24ab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebde44e526160883bff1424a1c8b4080",
".git/logs/refs/heads/main": "ebde44e526160883bff1424a1c8b4080",
".git/logs/refs/remotes/origin/HEAD": "ed741b4fec308f7b74fa5ada054b6596",
".git/logs/refs/remotes/origin/main": "bb57a69df1a9271bd18a642e1c6cce10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c2e394e3bf8e1993bc014106e5df3181",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c2e394e3bf8e1993bc014106e5df3181",
".git/index": "6c89caab4bdf72503d966fd40307bb48",
".git/packed-refs": "2972d02e8bcea91b342c498adfb1b2a2",
".git/COMMIT_EDITMSG": "5f2e67ce64b101aa54c7596c19741992",
".git/FETCH_HEAD": "7d8dd09f1f7be8be2c1a0a9be0ef032d",
"assets/AssetManifest.json": "3592ac3b9958d6a5223eece3e84055e2",
"assets/NOTICES": "83fe6ef98d161f9d6366fd2bc53d8307",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Alcooclic.png": "6826f493f34b2a1deb75052276466757",
"assets/assets/images/Logo_alcooclic.png": "2c61f3b6b5553047ae51bdba3c1ce76f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
