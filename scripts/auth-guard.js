
function authGuard(){

    firebase.auth().onAuthStateChanged(user => {
        if(!user){
            window.location.href = 'index.html';
        };
    });
};
authGuard();