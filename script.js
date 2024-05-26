document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const users = {
        christianspinola: 'Tequila9!',
        maheusandrade: '204060@Med',
        user3: 'password3',
        user4: 'password4',
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
