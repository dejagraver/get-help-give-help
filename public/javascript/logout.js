///this needs to be pasted into the body tag with in the HTML files 

// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-login.js"></script> */}

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>

{/* <script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD4a1zBHTz5WCT__Y7IaGvMFKlS03nknJI",
    authDomain: "get-help-give-help-3fc47.firebaseapp.com",
    projectId: "get-help-give-help-3fc47",
    storageBucket: "get-help-give-help-3fc47.appspot.com",
    messagingSenderId: "83016709803",
    appId: "1:83016709803:web:8d79f75beb5c5f006769ee",
    measurementId: "G-27VGBMGRRV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script> */}

// firebase.auth().signInWithCustomToken(token)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });


// const uid = 'some-uid';
// admin
//   .auth()
//   .createCustomToken(uid)
//   .then((customToken) => {
//     // Send token back to client
//   })
//   .catch((error) => {
//     console.log('Error creating custom token:', error);
//   });


// FirebaseAuth.getInstance().revokeRefreshTokens(uid);
// UserRecord user = FirebaseAuth.getInstance().getUser(uid);
// // Convert to seconds as the auth_time in the token claims is in seconds too.
// long revocationSecond = user.getTokensValidAfterTimestamp() / 1000;
// System.out.println("Tokens revoked at: " + revocationSecond);

// DatabaseReference ref = FirebaseDatabase.getInstance().getReference("metadata/" + uid);
// Map<String, Object> userData = new HashMap<>();
// userData.put("revokeTime", revocationSecond);
// ref.setValueAsync(userData);

// try {
//   // Verify the ID token while checking if the token is revoked by passing checkRevoked
//   // as true.
//   boolean checkRevoked = true;
//   FirebaseToken decodedToken = FirebaseAuth.getInstance()
//       .verifyIdToken(idToken, checkRevoked);
//   // Token is valid and not revoked.
//   String uid = decodedToken.getUid();
// } catch (FirebaseAuthException e) {
//   if (e.getAuthErrorCode() == AuthErrorCode.REVOKED_ID_TOKEN) {
//     // Token has been revoked. Inform the user to re-authenticate or signOut() the user.
//   } else {
//     // Token is invalid.
//   }
// }

// app.post('/getRestrictedData', (req, res) => {
//   // Get the ID token passed.
//   const idToken = req.body.idToken;
//   // Verify the ID token, check if revoked and decode its payload.
//   admin.auth().verifyIdToken(idToken, true).then((claims) => {
//     // Get the user's previous IP addresses, previously saved.
//     return getPreviousUserIpAddresses(claims.sub);
//   }).then(previousIpAddresses => {
//     // Get the request IP address.
//     const requestIpAddress = req.connection.remoteAddress;
//     // Check if the request IP address origin is suspicious relative to previous
//     // IP addresses. The current request timestamp and the auth_time of the ID
//     // token can provide additional signals of abuse especially if the IP address
//     // suddenly changed. If there was a sudden location change in a
//     // short period of time, then it will give stronger signals of possible abuse.
//     if (!isValidIpAddress(previousIpAddresses, requestIpAddress)) {
//       // Invalid IP address, take action quickly and revoke all user's refresh tokens.
//       revokeUserTokens(claims.uid).then(() => {
//         res.status(401).send({error: 'Unauthorized access. Please login again!'});
//       }, error => {
//         res.status(401).send({error: 'Unauthorized access. Please login again!'});
//       });
//     } else {
//       // Access is valid. Try to return data.
//       getData(claims).then(data => {
//         res.end(JSON.stringify(data);
//       }, error => {
//         res.status(500).send({ error: 'Server error!' })
//       });
//     }
//   });
// });

// function onIdTokenRevocation() {
//   // For an email/password user. Prompt the user for the password again.
//   let password = prompt('Please provide your password for reauthentication');
//   let credential = firebase.auth.EmailAuthProvider.credential(
//       firebase.auth().currentUser.email, password);
//   firebase.auth().currentUser.reauthenticateWithCredential(credential)
//     .then(result => {
//       // User successfully reauthenticated. New ID tokens should be valid.
//     })
//     .catch(error => {
//       // An error occurred.
//     });
// }

// firebase.auth().setPersistence('local').then(() => {
// .auth()
// .signInWithEmailandPassword(environment.email, environment.password)
// .then((userCredential) => (this.user = userCredential.user));
// })


// //SESSION CODE
// //for every authenticated request inspect the ID token and 
// //check if the request's IP address matches previous trusted IP addresses 
// //or is within a trusted range before allowing access to restricted data
// app.post('/getRestrictedData', (req, res) => {
//     // Get the ID token passed.
//     const idToken = req.body.idToken;
//     // Verify the ID token, check if revoked and decode its payload.
//     admin.auth().verifyIdToken(idToken, true).then((claims) => {
//       // Get the user's previous IP addresses, previously saved.
//       return getPreviousUserIpAddresses(claims.sub);
//     }).then(previousIpAddresses => {
//       // Get the request IP address.
//       const requestIpAddress = req.connection.remoteAddress;
//       // Check if the request IP address origin is suspicious relative to previous
//       // IP addresses. The current request timestamp and the auth_time of the ID
//       // token can provide additional signals of abuse especially if the IP address
//       // suddenly changed. If there was a sudden location change in a
//       // short period of time, then it will give stronger signals of possible abuse.
//       if (!isValidIpAddress(previousIpAddresses, requestIpAddress)) {
//         // Invalid IP address, take action quickly and revoke all user's refresh tokens.
//         revokeUserTokens(claims.uid).then(() => {
//           res.status(401).send({error: 'Unauthorized access. Please login again!'});
//         }, error => {
//           res.status(401).send({error: 'Unauthorized access. Please login again!'});
//         });
//       } else {
//         // Access is valid. Try to return data.
//         getData(claims).then(data => {
//           res.end(JSON.stringify(data));
//         }, error => {
//           res.status(500).send({ error: 'Server error!' });
//         });
//       }
//     });
//   });

// research making PUT requests to firebase api
// router.put('/email', (req, res) => {
//     User.update(
//         {
//             first_name: req.body.first_name
//         }
//     )
// })
