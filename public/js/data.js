(function(){
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDD68a9OuEjCNeZMjXqvWvjKyN9GO1XpvU",
        authDomain: "taskassigner-13c49.firebaseapp.com",
        databaseURL: "https://taskassigner-13c49.firebaseio.com",
        projectId: "taskassigner-13c49",
        storageBucket: "taskassigner-13c49.appspot.com",
        messagingSenderId: "293878815857"
      };
      firebase.initializeApp(config);
      var database = firebase.database();
      
      var dbref = database.ref().child('tasks/1/location');
      dbref.on('value', snap=>big.innerText = "big" + " :  " + snap.val());
}());