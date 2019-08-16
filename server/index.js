const webpush = require('web-push')

// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys()

const vapidKeys = {
  publicKey: 'BBqVhVxklj8TxV7NRW52IqnZ23xXi6L_CSayuwOCUmUNx6i3HyoJUxX55Ir7rDEKkjp4PF0j_cIFgjXmks4M3fg',
  privateKey: 'OC4 - ul5KGFbR5hr8PRwpVGdDKA2ygpd_9xwFIy - Gr0s'
}

// webpush.setGCMAPIKey('<Your GCM API Key Here>')
webpush.setVapidDetails(
  'mailto:jaswant.galaxy.web@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

// This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// }

// const pushSubscription = {
//   endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABdNwKfcUk9fIiYUE_ADqkRYS0Q5fNv5XcdSuPEl466_4afJv1pj8pvq5i2Vq_K3HW8SttysN4VDZlRMf0_i6lmT5K5nOG_7GG9qF4Hy-C8UbsUZwk8OGbTaS3aTmR371ddVAdfM62_e2EcxmooprZX3nCuwFr4ohs1ll88jdP6fK4qEpk',
//   keys: {
//     auth: 'TFHjCabAPfhKgAkYggYZ3Q',
//     p256dh: 'BIkkwB9HIL6ngTfupgM-ieZEzb6L6g7EkJa-PFMbszXiZhNdIrn1kbvLECdhc4z0QvZdN1NHFcVTMOPIcv2K-M0' }
// }

const pushSubscription = { endpoint: 'https://fcm.googleapis.com/fcm/send/fkWs2Q2mh5g:APA91bHejYlIN2iitOeY3FGm-y5PaepRcnblROWGVV1dP1eEs-Bl4i9BUPzCKN24-y_ACXN_60ypO32YTtxtbObfgjFkXs3BgpTp4kGhCWWNEe7x8eDwjPP_lScSoBC8CiIXvGM9C8Uj', expirationTime: null, keys: { p256dh: 'BHEcgEIYjfPqiLXcLVkD1j31hY7G_CYuTg1MXW85scnt8bkMtN8zOiBOI7Zu2t2KT6ciXQAzaeVe1d9E-uq--G8', auth: 'X3oLb8SEjAUxTk5j4QBo8w' } }

webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
