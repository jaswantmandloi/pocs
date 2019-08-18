const webpush = require('web-push')

// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys()

const vapidKeys = {
  publicKey: 'BJQ18IXSBnhBzN-PC8tJh0WJP-dzulli5I0zie3xhGGcuaiK_slrRKhVvbY_BTla_IxZ8vz2sqbIFzBGvWIU-G0',
  privateKey: '-OqnorSIx6Zy4-dOf018B5me94XnOfETfNhkGPwfIOM'
}

// webpush.setGCMAPIKey('<Your GCM API Key Here>')
webpush.setVapidDetails(
  'mailto:jaswant.galaxy.web@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

//"



const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fPN6qeJJndM:APA91bEF9_eYCuQ1odnFC_PnFjCv9Y3dHKXw25E0RYJSh6lw7PCNLXIX-hhfXBEwF3BojbYqyAuvCtFCOFlLNckYp3hxd7KgrpAPVKuuPU-UnOoWIZGV8JKvYC7KaT3ogCmCosSREY-Y","expirationTime":null,"keys":{"p256dh":"BAP3iCXokwOh4lNqB605A2o5AFyagGXW_IuGpm3493jT9BPTOEfHca3QLwHfPlYZRxahR8lLPEIGfVzWnbozfPE","auth":"rTPkkBLPVjWKZRvpIsvRCA"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
