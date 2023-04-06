//funções dos botoes da navbar

function toLoginPage(){
    window.location.href = 'login.html';
};

function toSignupPage(){
    window.location.href = 'signup.html';
}

//função para fazer logout
function logout(){
    firebase.auth().signOut()
    .then(() => {
        window.location.href = 'login.html';
    }).catch(error => {
        alert('Erro ao tentar fazer logout!');
    });
};
