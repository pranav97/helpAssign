(function(){
    const config = {
        apiKey: "AIzaSyDD68a9OuEjCNeZMjXqvWvjKyN9GO1XpvU",
        authDomain: "taskassigner-13c49.firebaseapp.com",
        databaseURL: "https://taskassigner-13c49.firebaseio.com/",
        projectId: "taskassigner-13c49",
        storageBucket: "taskassigner-13c49.appspot.com",
        messagingSenderId: "293878815857"
    };

    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e =>{
        const email = txtEmail.value
        const password = txtPassword.value
        const auth = firebase.auth()

        const promise = auth.signInWithEmailAndPassword(email,password);
        promise
            .catch(e => console.log(e.message));
    });
    btnRegister.addEventListener('click', e =>{
        const email = txtEmail.value
        const password = txtPassword.value
        const auth = firebase.auth()

        const promise = auth.createUserWithEmailAndPassword(email,password);
        promise 
            .catch(e => console.log(e.message));
    });

    btnLogout.addEventListener('click', e =>{
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            alert('You are logged in!');
            location.assign('index.html');
        } else {
            console.log('not logged in');
            //alert('You are not logged in!');
            //location.assign('login.html');
        }
    });
}());