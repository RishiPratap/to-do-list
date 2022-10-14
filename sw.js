const staticDevCoffee = "cache website";
const assets = [
  "manifest.json",
  "sw.js",
  "icon.png",
  "icon (1).png",
  "icon (2).png",
  "screenshot.png"
]
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  }
  )
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'show') {
    // show action was clicked
    event.waitUntil(self.clients.matchAll().then(function(clientList){
      if(clientList.length > 0) {
          return clientList[0].focus();
      };
        })
        );
  } else {
    // Main body of notification was clicked
    event.waitUntil(self.clients.matchAll().then(function(clientList){
      if(clientList.length > 0) {
          return clientList[0].focus();
      };
        })
        );
  }
}, false);