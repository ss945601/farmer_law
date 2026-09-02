'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "df3415c040b2fd7072da02ca152ef1fa",
"version.json": "5f2f8951a50291727b09d68032a93d69",
"index.html": "8e5a65659e7225c15f033febad5ca1f7",
"/": "8e5a65659e7225c15f033febad5ca1f7",
"main.dart.js": "a88880bf869514cbbe0b856b7f760d85",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "898fd5258ea452c3e7dd2d73692ec4df",
".git/config": "bddeaeb510519cd6132debb72de05da3",
".git/objects/50/de3c78708de349c92b2e006e5922c1710940a0": "f459a286ea8590ca9c8808f9ca2a9628",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/35/d06f24961f288b172ad681c34b92884c5e5fa1": "8b97b4b8361461dcd30076f54ff98d0a",
".git/objects/3c/95eeda8c7a595c2ec1dc5bb85f9c54ee8e3b6a": "6741bc2937b9d868bde1a020312f89ca",
".git/objects/05/15beec200e17808e255e822db65a85ac0c9fad": "d565ff35bb4180a33b109206d8650133",
".git/objects/9d/ca4a8d871afd040279900e0cae184040750811": "6fcffef228f33a0a53a150f74ef8478d",
".git/objects/02/7fb1edb1bfcc3d931dcc60cb8ba1e1e68419ae": "1c4b753d3949a7082f755c2b37f5b44d",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/2e21297b422504bc438b2d98b32cdc14266b61": "745a5eea8153a295806441e2b1ab55ee",
".git/objects/be/d9b3ccb154c17b636fef5ba765b0fcadd0e645": "6c8904292f502d01233d5d27687af494",
".git/objects/be/8c3d377e985c41e133d92c2ff21ed144a591bc": "2d318cd8c5a0403831d6471c1cdc3313",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/f3/72362bbb477258251c0b52a187590d97b33fbc": "8e0066f4a181894da0e171af5f5ade7c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/d7776dd414946c57cb9f0f96baabcd8743b29d": "1e5f69ae22d643bb9a55bfbe64d63ecd",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/4d73dbeca7a196ee64e51c83f895f26053e652": "85d34e30c237f928db1cc45f9b334014",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/a39828fa794a63d987be91e9455698e5a28443": "eb69f99e74faa99d2f28703a410b6547",
".git/objects/c1/483a658f569bd2a311c83220c243d8338e3132": "25df1bd39cfd80f11bf357c8774eded8",
".git/objects/c6/45b29e25e721e299df9ea1d592b291488e5a38": "2a9c3873345524a0cbeadec416acf7e1",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/0bcdb3c3e7e721723663ed97b71128d6a809fc": "62ba0f9f610d9d0ac8794873059ad041",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/89/52f21576aa06b152125f379bf536b8270d09bd": "0b2a9fcefe0e1ef7d88ff132a005174b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/301068637d0536f6ca73aec71ed425af46c9f2": "c1e9b516ba9f661f5cb577f3f255be82",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/0d77e9c390904c2a9e2ec9bca371d1621bab76": "c115f3ec4bf1352d4855e9628b3487ee",
".git/objects/88/5bb198da70610c2e348eb1403b8e857ddb13c7": "31375f6ad1ea268d0c67e13011365d6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5c/8ca859a97cff7f5a2effd47413f52609cf976f": "d5a5150d4fb21165ac065f0d2087a638",
".git/objects/5d/24cdaf3208e1420be9423e9c24d5812c47bbad": "8de77ff3b2ec1018b2cd76a13a18318f",
".git/objects/65/0bbd114423e6705de1424a86c8a81de90164b9": "03b5b28b2ff8fabe30b7049777981880",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/39/2dd99b7ab45aaf93c9f0746777cd71b7a268a4": "463aaae373b1db5e15ba39323c706bd1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/0e308e5c495296359dadb15ff4597c378a1277": "50019d92c26fd907a3430e35da387dbb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ff/8afa519dc96d68a8c640a939674c16255cc235": "ced676cff5c95d58f3743715f09379b5",
".git/objects/c2/759ab2af64f04da08a663b1de5dcdb786ec9d4": "4f99724304be69c948f560511230d007",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/818298922817087f431597f3643ecf269bcb4d": "f11698d397451f5727900d194ea5a1d4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/017d499d500e49b3dc4511158afd5f6c5b33cf": "0340fb151d96e85f0aca57373498f4c9",
".git/objects/77/05c0958470264963a8d1524348858b3d2a75db": "8d07eda4601e015a861b72c9d4e4e270",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/31c5f2384d1f4cbed4cc57deaf1d01190aa140": "2736faa9fbd0b03a17a6a7addfd2b437",
".git/objects/82/687a8ca9aa596b5b7d07174a1de06dbbbe9543": "177889dd97deeba06c0adc2c52ff5be2",
".git/objects/82/0d7ec4daeee40e192dabe797c107c09471abe6": "74eea349314c77867919e3270c6379c9",
".git/objects/8b/80d38651081c7f3c33f14015407d5f43a6b73f": "3af1092a5eb7b5b845e7eac9dabc6455",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/5f348736b883cb2d28324be8d1bd519cf3e739": "11fd1cdff6218b47bf0d42ad719c077c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3cd31042f21e4fd5920b1cf024359d8d",
".git/logs/refs/heads/main": "bd07de87088212ac1fccb0da4010b8f2",
".git/logs/refs/remotes/origin/main": "2a74edb79f7d793633e1fda3a567ceef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "843621ef7609f1b9a5ef4cc76641bbc7",
".git/refs/remotes/origin/main": "843621ef7609f1b9a5ef4cc76641bbc7",
".git/gk/config": "e857e72e2e6c668f97e55913438f7aa5",
".git/index": "4da0f35802906d8f1fcd4c6747d47162",
".git/COMMIT_EDITMSG": "474587b0f6854cfc9f4274ec45cb4ee2",
"assets/AssetManifest.json": "133161bd764dc930293950122f4319ed",
"assets/NOTICES": "5fd4d1ceababf622529b9d92d4bf1772",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f215816510859b82db21bf6ed20ed3a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b1e8f9f95dc1f2744fa0efb191681b1f",
"assets/fonts/MaterialIcons-Regular.otf": "a135928e2c87e02fb50ce7e42870b9b6",
"assets/assets/cloze_law.txt": "a7f1610c0dbbf6880b50764c12e96774",
"assets/assets/farmer_law.txt": "954846acc18f5a7739144534214dcf3f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
