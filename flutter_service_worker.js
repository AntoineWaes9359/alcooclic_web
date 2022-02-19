'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "29d47756c1e212a4fd05e927a7cb84fb",
"index.html": "7ded57a57df6c87d76a46d7bd490622d",
"/": "7ded57a57df6c87d76a46d7bd490622d",
"main.dart.js": "a6f1545aefd90ddc4921ad45c9ed6a5a",
"README.md": "fb882671895a8d237ec9aa67654b35b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "749896f858df835f186e9aa88d6998df",
".git/ORIG_HEAD": "168c0bb8433dcbdd4fcf2c81836c4d01",
".git/config": "864f3f7a9132785bf2e1a4584d632e0c",
".git/objects/0c/0e1bb6ec39f6fb4afcf179d87ca87ca662299f": "bb338c2cba41ea1729b9f02157db4d1d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/0b/2622bb82444005716cd5a495d07b8bb7885864": "7445d5711f792b8fec07439052fccb66",
".git/objects/93/a21387dec411e6cb734632632699fc0bd80673": "228460f68f458d375651ed968ebcbef7",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/a4/0dcdacf42ad5d18bd19383f58fb3225b490a22": "2ab3e9d3c3cec4bb99979497bf9d5c9e",
".git/objects/ac/8ab26cf3ecf1a14a855eb9e5bda2c2487d0f08": "5b815fae7e57cad71d77f251e0b14521",
".git/objects/ad/acb8e755d4648e1de3d21aa359a445402a5745": "b5f86e3a872062c532d7925fd38d30f1",
".git/objects/a2/63efe679dd0080df77b10bb97e902bc8971ca8": "a8dc151484ac6f585025198656cbdab2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/86acf47f0eee2923e16dd8beaeb391caef0c83": "fbd8260644faf26d658d4827bb43147a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/cd6816915f030c1e1176c71da7c421fd1dd32a": "69e882619a76c03f6613d5cbccbcfd19",
".git/objects/fb/cc12648e108c0fcd05ac086dfca2eca2a9fe9e": "3e322ad1fdefda281ed2ab063249b0fe",
".git/objects/pack/pack-fca1ed26aaf346437b111710d35e9ebde716cdde.pack": "71bb866ff78ed493351d05caa199aca5",
".git/objects/pack/pack-fca1ed26aaf346437b111710d35e9ebde716cdde.idx": "b5497758e9e89cd21c70f7d323b8597d",
".git/objects/89/85feb482244a6bea94e2f00077d6ac114456b5": "d7f415a3a26c4dca7d6f832bb0001d52",
".git/objects/80/1bc177b70c79e6a667dd19186b18d01570d242": "ddfd9374b046d35097ad7f18d432778d",
".git/objects/74/21bcecb003002846d35c8bc719508e40aba311": "661d1be64bfde31a986376ff2c950560",
".git/objects/7b/6809c8d74297775a559f46bbca63268f0b1252": "eb6451b88255905fb2eb231a82404ab8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/cc12b1b5601313d4417ea0292670f4b9a0f44c": "e739f042471484e4a4ac934f3099e368",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6d/412551a9c200803539820312e8b422097ee035": "f32b97ba982ba3cb0b7b3b828f9dd4de",
".git/objects/d3/4e9f6c427c7d96dcb3194894dc11b4f2a740f8": "8d25c35cd13f6226968b6b8b4c960270",
".git/objects/a7/fe472b38ae16ad30ca3d830032e608b106532c": "c80ab66dbeb12467f5ab442f580ae3eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fc0f668e5d8d2aef5f8b9524cb645391ea8d8d": "c5dc2dae30c5ba177252aedc930af01d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/0ea35ea7ded45f027cd15fdb4e206492edeff7": "282c4481ae4353d655bff66e6c814c57",
".git/objects/4f/4061230df57bfa4fbd46aa52d2ad2f96acae07": "3a9866b8e8aa9de1c04499733dd3df50",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b21e904ca6ef186bfc2372c4d67dfe09",
".git/logs/refs/heads/main": "b21e904ca6ef186bfc2372c4d67dfe09",
".git/logs/refs/remotes/origin/HEAD": "53658ada45236e7fbddab3a71c8beb3e",
".git/logs/refs/remotes/origin/main": "282d9572cce504b6f4714cbf90a668dd",
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
".git/refs/heads/main": "168c0bb8433dcbdd4fcf2c81836c4d01",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "168c0bb8433dcbdd4fcf2c81836c4d01",
".git/index": "8a35e7aed490a316a4455f731ed23cbb",
".git/packed-refs": "6fe3b54de7cd93616b92cda4c6973b3d",
".git/COMMIT_EDITMSG": "39b5837374dfb126cbfcac6098929835",
".git/FETCH_HEAD": "8f61c4fab1350d0bd00da55d64d3acd4",
"assets/AssetManifest.json": "c5618dcb1cddf0d4d9d04e83792a0e45",
"assets/NOTICES": "5f506716c6a90cc50b9e1554733873f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/Alcooclic.png": "6826f493f34b2a1deb75052276466757",
"assets/assets/Logo_alcooclic.png": "2c61f3b6b5553047ae51bdba3c1ce76f"
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
