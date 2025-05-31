self.addEventListener('push', function(event) {
  const data = event.data?.json() || { title: 'Yeni Bildirim', body: 'Bir bildirim aldınız.' };
  const options = {
    body: data.body,
    icon: 'icon.png',
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
