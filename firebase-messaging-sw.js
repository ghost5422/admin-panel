importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCDNbgKzJdBKEZUnWH09Az6ZCwUefWJXhY",
  authDomain: "onlinesiparis-2cf91.firebaseapp.com",
  projectId: "onlinesiparis-2cf91",
  storageBucket: "onlinesiparis-2cf91.appspot.com",
  messagingSenderId: "366801664755",
  appId: "1:366801664755:web:57b577f1943ebdf1ab8c85",
  databaseURL: "https://onlinesiparis-2cf91-default-rtdb.europe-west1.firebasedatabase.app"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[FCM SW] Arka planda mesaj geldi:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i.hizliresim.com/7sp9pd6.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
