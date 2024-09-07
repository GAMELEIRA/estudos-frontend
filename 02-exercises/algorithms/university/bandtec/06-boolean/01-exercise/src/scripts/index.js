const validateLogin = (email, password) => {
    if (email !== 'aidimin' && password !== 'seinha') {
        showMessage('<p>Seu login e senha estão inválidos</p>');
    } else if (email !== 'aidimin') {
        showMessage('<p>Seu login está inválido!</p>')
    } else if (password !== 'seinha') {
        showMessage('<p>Sua senha está inválida!</p>')
    } else {
        showMessage('<p>Usuário autenticado com sucesso!</p>');
    }
}

const showMessage = (message) => {
    const element = document.getElementById('response');
    element.innerHTML = message;
}

const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    validateLogin(email, password);
}