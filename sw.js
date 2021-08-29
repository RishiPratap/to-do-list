self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

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