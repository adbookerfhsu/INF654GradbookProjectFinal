const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/view/css/main.css',
    '/images/hgatitle.png',
    '/images/bookstackbjupress.png',
    'https://kit.fontawesome.com/f65db0dd80.js',
    'https://fonts.googleapis.com/css2?family=Poppins',
    'https://fonts.googleapis.com/css2?family=Chilanka'
];

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
                .filter(key => key !== staticCacheName)
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
            return cacheRes || fetch(event.request);
        })
    );
});   