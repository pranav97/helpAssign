(function(){
    const config = {
        apiKey: "AIzaSyAmZ8lZEcvpDd73LxKVWbPXfCRJUZNEG4k",
        authDomain: "project-kindling.firebaseapp.com",
        databaseURL: "https://project-kindling.firebaseio.com",
        storageBucket: "project-kindling.appspot.com",
    };

    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const btnLogOut = document.getElementById('btnLogOut');

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

    btnLogOut.addEventListener('click', e =>{
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            alert('You are logged in!');
            location.assign('index.html');
        } else {
            console.log('not logged in');
            alert('You are not logged in!')
        }
    });
}());