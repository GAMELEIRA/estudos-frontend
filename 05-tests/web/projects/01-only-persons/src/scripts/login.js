const validateLogin = () => {
    const userElement = document.getElementById('user');
    const passwordElement = document.getElementById('password');
    console.log(typeof passwordElement.value);
    if (userElement.value === 'chucrute' && passwordElement.value === 'chucrutao') {
        window.location.href = '../pages/list-persons.html';
    } else {
        alert('Usuário ou Senha errados');
    }
}