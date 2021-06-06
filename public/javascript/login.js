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
        //check dashboard
        document.location.replace('/giveboard/');
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
  //check dashboard
        document.location.replace('/giveboard/');
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




/*
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
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
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

*/