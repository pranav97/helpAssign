(function(){
    const config = {
        apiKey: "AIzaSyDD68a9OuEjCNeZMjXqvWvjKyN9GO1XpvU",
        authDomain: "taskassigner-13c49.firebaseapp.com",
        databaseURL: "https://taskassigner-13c49.firebaseio.com",
        projectId: "taskassigner-13c49",
        storageBucket: "taskassigner-13c49.appspot.com",
        messagingSenderId: "293878815857"
    };

    var database = firebase.database();

    const locat = document.getElementById('loc');
    const proble = document.getElementById('prob');
    const urgen = document.getElementById('urg');
    const toolsn = document.getElementById('tools');
    const tasksn = document.getElementById('tasks');
    const submit = document.getElementById('submit');

    submit.addEventListener('click', e=>{
        database.ref('/' + locat.value).set({
            problem: proble.value,
            urgency: urgen.value,
        });
    });
}());