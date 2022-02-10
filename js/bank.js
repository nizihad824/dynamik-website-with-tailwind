

document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;
  
    //    get password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        console.log('valid user');
        window.location.href ='banking.html'
    }
})
