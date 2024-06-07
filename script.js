document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const users = {
        christianspinola: 'Tequila9!',
        matheusandrade: '204060@Med',
        lauraaguiar: '123@med',
        chay: '123@med',
        lohancaliari: '123@med',
        admin: 'adminpass'
    };
    
    if (users[username] && users[username] === password) {
        if (username === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = username + '.html';
        }
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
