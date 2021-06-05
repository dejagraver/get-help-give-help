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

  const auth = firebase.auth();

  function signup(event) {
    event.preventDefault();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstname && lastname && email && password) {
      
      firebase.auth().signUp(firstname, lastname, email, password)
      .then(input)
      const input = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password
        }),
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('.login-form').addEventListener('submit', login);
  document.querySelector('.signup-form').addEventListener('submit', signup);


function login(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
      });
  
      if (response.ok) {
    console.log('Error creating custom token:', error);
  };
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  
  
  function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector('#logout').addEventListener('click', logout);


  auth.onAuthStateChanged(function (user){
    if (user){
      var email = user.email
      //user signed in
    } else {
      //no user signed in 
    }
  })


//   FirebaseAuth.getInstance().revokeRefreshTokens(uid);
//   UserRecord user = FirebaseAuth.getInstance().getUser(uid);
// // Convert to seconds as the auth_time in the token claims is in seconds too.
//   long revocationSecond = user.getTokensValidAfterTimestamp() / 1000;
//   System.out.println("Tokens revoked at: " + revocationSecond);

//   DatabaseReference ref = FirebaseDatabase.getInstance().getReference("metadata/" + uid);
//   Map<String, Object> userData = new HashMap<>();
//   userData.put("revokeTime", revocationSecond);
//   ref.setValueAsync(userData);

//   try {
//     // Verify the ID token while checking if the token is revoked by passing checkRevoked
//     // as true.
//     boolean checkRevoked = true;
//     FirebaseToken decodedToken = FirebaseAuth.getInstance()
//         .verifyIdToken(idToken, checkRevoked);
//     // Token is valid and not revoked.
//     String uid = decodedToken.getUid();
//   } catch (FirebaseAuthException e) {
//     if (e.getAuthErrorCode() == AuthErrorCode.REVOKED_ID_TOKEN) {
//       // Token has been revoked. Inform the user to re-authenticate or signOut() the user.
//     } else {
//       // Token is invalid.
//     }
//   }

//   app.post('/getRestrictedData', (req, res) => {
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
//           res.end(JSON.stringify(data);
//         }, error => {
//           res.status(500).send({ error: 'Server error!' })
//         });
//       }
//     });
//   });

//   function onIdTokenRevocation() {
//     // For an email/password user. Prompt the user for the password again.
//     let password = prompt('Please provide your password for reauthentication');
//     let credential = firebase.auth.EmailAuthProvider.credential(
//         firebase.auth().currentUser.email, password);
//     firebase.auth().currentUser.reauthenticateWithCredential(credential)
//       .then(result => {
//         // User successfully reauthenticated. New ID tokens should be valid.
//       })
//       .catch(error => {
//         // An error occurred.
//       });
//   }

// firebase.auth().setPersistence('local').then(() => {
//   .auth()
//   .signInWithEmailandPassword(environment.email, environment.password)
//   .then((userCredential) => (this.user = userCredential.user));
// })