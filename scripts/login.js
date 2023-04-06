// função do firebase que fica toda hora verificando se mudou o state da autenticação do usuario
//se ele mudou de nao logado para logado, de logado para nao logado etc
//quando ocorrer mudança a função vai acontecer e recebe como parametro a informação atual do usuario
//essa função deve estar aqui em cima do arquivo js
function changeUserState(){
    firebase.auth().onAuthStateChanged(user => {    //user = logado ele tem infos   //user = nao logado, ele é null
        if(user){
            window.location.href = 'index.html'
        }
    })
}
changeUserState();


//button para pagina de login
function toLoginPage(){
    window.location.href = 'login.html';
};

function toSignupPage(){
    window.location.href = 'signup.html';
}

//valores de input e erros
function onChangeEmail(){
    toggleEmailErrors();
    toggleRegisterButtonDisable();
};

function onChangePassword(){
    togglePasswordErrors();
    validatePasswordMatch();
    toggleRegisterButtonDisable();
};



function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
};

function toggleEmailErrors(){
    const email = form.email().value;
    if(!email){
        //mostrar o erro que email é obrigatorio
        // document.getElementById('email-required-error').style.display = 'block';    //era assim e refatorando fica como abaixo
        form.emailRequiredError().style.display = 'block';
    } else {
        form.emailRequiredError().style.display = 'none';
    }

    if(validateEmail(email)){
        //mostrar erro que o email é invalido
        form.emailInvalidError().style.display = 'none';
    } else {
        form.emailInvalidError().style.display = 'block';
    }
};

function togglePasswordErrors(){
    // const password = document.getElementById('password').value;      //era assim mas refatorando ficará como abaixo
    const password = form.password().value;
    if(!password){
        //mostrar que o erro é senha obrigatoria
        form.passwordRequiredError().style.display = 'block';
    } else {
        form.passwordRequiredError().style.display = 'none';
    }

    if(password.length >= 6){
        form.passwordMinLengthError().style.display = 'none';
    } else {
        form.passwordMinLengthError().style.display = 'block';
    }
};


//ao inves de escrever todos os document.getElements...
const form = {
    name: () => document.getElementById('name'),
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirm-password'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    passwordNotMatchError: () => document.getElementById('password-not-match-error'),
    registerButton: () => document.getElementById('register-button')
};


//função de login
function login(){
    showLoading()
     //login com firebase
     firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value)
     .then(response => {
        window.location.href = 'index.html';
        hideLoading();
     }).catch(error => {
        hideLoading();
        alert(getMessageError(error));
     });
}

//funçao de erro no login
function getMessageError(error){
    if(error.code == 'auth/user-not-found'){
        return 'Usuário não encontrado';
    };
    if(error.code == 'auth/wrong-password'){
        return 'Senha inválida';
    };
    if(error.code == 'auth/email-already-in-use'){
        return 'Usuário já existe';
    };
};

//função para fazer cadastro
function register(){
    showLoading();
    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        hideLoading();
        window.location.href = 'login.html';
    }).catch(error => {
        hideLoading();
        alert(getMessageError(error));
    });
};

//função para fechar a pagina login e voltar pra index.html
function closePage(){
    window.location.href = 'index.html';
}


//função para recuperação de senha
function recoverPassword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value)   //retorna uma promise
    .then(() => {
        hideLoading();
        alert('Email enviado com sucesso!');
    }).catch(error => {
        hideLoading();
        alert(getMessageError(error));
    });
};

function onChangeConfirmPassword(){
    validatePasswordMatch();
    toggleRegisterButtonDisable();
};

function validatePasswordMatch(){
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.passwordNotMatchError().style.display = 
        password == confirmPassword ? 'none' : 'block';
}

function toggleRegisterButtonDisable(){
    form.registerButton().disabled = !isFormValid();
}

function isFormValid(){
    const email = form.email().value;
    if(!email || !validateEmail(email)){
        return false;
    };

    const password = form.password().value;
    if(!password || password.length < 6){
        return false;
    };

    const confirmPassword = form.confirmPassword().value;
    if(password != confirmPassword){
        return false;
    };

    return true;
};




