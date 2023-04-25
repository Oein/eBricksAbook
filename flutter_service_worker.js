'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "15dab9fe8b29a87965941da14921c85f",
"index.html": "d1bce826ec7754fd80a4f728a5db8d8d",
"/": "d1bce826ec7754fd80a4f728a5db8d8d",
"main.dart.js": "52e2d438a89563a7b2ade80f08f97adc",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e590b9cd4ee0bcdfb13e1a3da5cd991",
"assets/AssetManifest.json": "e134eadd08daab9d5aab83cdf7f88695",
"assets/NOTICES": "271c7bedef927a5e26a3098e5a30e1e3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/602.png": "9df29bbe9548e33e42fae0829bba8297",
"assets/assets/images/2502.png": "6eed8b2aea134cc39b7b69b3e77a7262",
"assets/assets/images/2503.png": "4f1ba4ee7769a3f2ee4a19c10bc0435e",
"assets/assets/images/nf501.png": "b21b6139698667ee698e47c49e3db829",
"assets/assets/images/603.png": "1a5ffc5849e3c33c165144c529ea77f7",
"assets/assets/images/401.png": "4434a5347b9b87e312821131ed8b06f7",
"assets/assets/images/403.png": "06bc1f88e19290302fcd375cdd173bdc",
"assets/assets/images/601.png": "8cfbb62f19325573585e084d3d39659b",
"assets/assets/images/2501.png": "5b990e5884e328ca1a9b97c89be35511",
"assets/assets/images/nf503.png": "7c365d768f9661288fe7a330b26d7c18",
"assets/assets/images/nf502.png": "fe24bfacb3c898926f31e7f1858967d9",
"assets/assets/images/402.png": "616e8d43622ef0d4d71ab4e51ae66fca",
"assets/assets/images/303.png": "6a790d097c2b5001cbf98c14ab5da255",
"assets/assets/images/2003.png": "a8e0a0c5898152b7fa4feff83f13379c",
"assets/assets/images/2002.png": "5b293c9ff73ed36e9197cddc1e6b91f7",
"assets/assets/images/302.png": "b8d9a9c41558534a4b3510607f4757b5",
"assets/assets/images/2001.png": "3cd3d7d9e70781b5e1028ce8524ed265",
"assets/assets/images/301.png": "1b1f2e0e07ec6589d6b02bd1178ef73d",
"assets/assets/images/2401.png": "4d132e96b540cfe140594ffaf65c4f26",
"assets/assets/images/503.png": "a64efb0eaafefee09e8cd08ebff8b66f",
"assets/assets/images/502.png": "4c61aa1e002ec5fc07a84f5bd83b96aa",
"assets/assets/images/2402.png": "e1f1cbdc8576f6ac858865653d9fab67",
"assets/assets/images/501.png": "26995055253fc8bfaecdcf39457dd123",
"assets/assets/images/2403.png": "487f2b2c960622cb7af8083c9eeb6f0f",
"assets/assets/images/n3003.png": "9c9ece4f8414f63149ab93728ff54ae2",
"assets/assets/images/nf801.png": "e319f587bcd47b5634c5253617dd4e35",
"assets/assets/images/1503.png": "11f77537f23c33d3baf4d37ae6f38b4b",
"assets/assets/images/1701.png": "b9979eee0f49b523596c306fabc63cec",
"assets/assets/images/1502.png": "f4618f67118e03f96dd57af9bce9d1af",
"assets/assets/images/n3002.png": "0c4dffa6dde6206bfdc470ec73957f5d",
"assets/assets/images/nf802.png": "811d4803d109fb9eb9d9e51fbb13b50d",
"assets/assets/images/1702.png": "1d9c24a516b252145515fc163410a42c",
"assets/assets/images/1703.png": "ada5c6141e75b56ecba2040ea9a1dac1",
"assets/assets/images/1501.png": "d999783781f2cf2712834a1b5bcb06ff",
"assets/assets/images/nf803.png": "0fc4d192d5229f652388c7da9e8b3b48",
"assets/assets/images/n3001.png": "5621f5b5f10e9a6591c0ceb27f2bf9fc",
"assets/assets/images/nf1001.png": "387a8ff283831b3653e22594d4ac3573",
"assets/assets/images/3001.png": "da031d2345c997fded19e87115dc165e",
"assets/assets/images/802.png": "29499123f24e620e88e35e37cd076c82",
"assets/assets/images/803.png": "ff3ecc4d5e01e9bce1878da9e8fa5979",
"assets/assets/images/nf1002.png": "0c815c2736492d23b23e6131bdd130a8",
"assets/assets/images/3002.png": "398407ceac1ddc9a5e6df975e02ec71a",
"assets/assets/images/801.png": "f8228dc37941183ca2c285b7f8633a2c",
"assets/assets/images/3003.png": "e8026f5c1c18d487b37e5a034406274d",
"assets/assets/images/nf1003.png": "3ed084809e22ba577b46c6c9435ea921",
"assets/assets/images/1002.png": "c1a8b36446f8d01e5a943c9880c1666b",
"assets/assets/images/1003.png": "4127cca5f75ec1f6240ae1bd97f0881a",
"assets/assets/images/1201.png": "f913c4690a379200ab5dbbbb302d2713",
"assets/assets/images/1203.png": "1683b950ddaee3ee815ffb19c74d4681",
"assets/assets/images/1001.png": "3879e27f9aadfe6148d630e1c1dd8d60",
"assets/assets/images/1202.png": "58e5bd89f58de696e6a47ff2d3fef701",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
