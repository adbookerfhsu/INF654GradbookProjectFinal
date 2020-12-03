const staticCacheName = 'site-static';
const dynamicCacheName = 'site-dyamic-v1';
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/view/css/main.css',
    '/images/hgatitle.png',
    '/images/bookstackbjupress.png',
    'https://kit.fontawesome.com/f65db0dd80.js',
    'https://fonts.googleapis.com/css2?family=Poppins',
    'https://fonts.googleapis.com/css2?family=Chilanka',
    '/fallback.html'
];

//cache size limit funciton
const limitCacheSize = (name, size) =>{
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};

//install service worker
self.addEventListener('install', event => {
    //console.log('Service Worker has been installed');
    event.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('catching shell assets');
        cache.addAll(assets);
    })
    );
});

//activate event
self.addEventListener('activate', event => {
    //console.log('Service Worker has been activated');
    event.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
        )
        })
    );
});
    
// fetch event   
self.addEventListener('fetch', event => {
   //console.log('fetch event', event);
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(event.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCacheName, 15);
                    return fetchRes;
                })
            });
        }).catch(() => {
            if(event.request.url.indexOf('.html') >-1) {
            return caches.match('/fallback.html');
            }
        })
    );
});   