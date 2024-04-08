var firebaseConfig = {
  apiKey: "AIzaSyAKdp8U1XwtRGARbIlrFXyC1hmXQZQv6Ro",
  authDomain: "selleradd-2d097.firebaseapp.com",
  databaseURL: "https://selleradd-2d097-default-rtdb.firebaseio.com",
  projectId: "selleradd-2d097",
  storageBucket: "selleradd-2d097.appspot.com",
  messagingSenderId: "11923648205",
  appId: "1:11923648205:web:9353937cf8ecdab01ec384",
  measurementId: "G-46D58B6H2D"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function redirect1() {
  window.location.href = 'retrivedata.html';
}

function save() {
 var username = document.getElementById("username").value;
 var pname = document.getElementById("pname").value;
  var pimage = document.getElementById("pimage").value;
  var pdesc = document.getElementById("pdesc").value;
  var lowprice = document.getElementById("lowprice").value;
  var expprice = document.getElementById("expprice").value;

  // Check if username is not empty
  if (!username) {
    alert("Please enter a username.");
    return;
  }

  // Check if pname is not empty
  if (!pname) {
    alert("Please enter a product name.");
    return;
  }

  // Save data to Firebase
  database.ref('users/' + username).set({
    pname: pname,
    pimage: pimage,
    pdesc: pdesc,
    expprice: expprice,
    lowprice: lowprice
  }, function(error) {
    if (error) {
      alert("Data could not be saved." + error);
    } else {
      alert("Data saved successfully.");
    }
  });
}

function getAllDataFromRealtimeDatabase(callback) {
  firebase.database().ref('/').once('value')
    .then(snapshot => {
      const datadb = snapshot.val();
      callback(null, datadb);
    })
    .catch(error => {
      callback(error, null);
    });
}

// Example usage:
getAllDataFromRealtimeDatabase((err, datadb) => {
  if (err) {
    console.error('Error retrieving data: ', err);
  } else {
    console.log('Retrieved data: ', datadb);

  }
});