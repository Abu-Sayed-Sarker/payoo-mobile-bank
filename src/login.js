console.log('Log in page');
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('input-phone').value;
    const pinNum = document.getElementById('pin-input').value;

    const pNumber = parseInt(phoneNumber);


    document.getElementById('pin-input').value = '';
    document.getElementById('input-phone').value = '';

    if (pNumber === 967287131 && pinNum === 'asd') {
        window.location.href = 'trangection.html';

    }
    else {
        alert("Please enter your carrect phoone number and pin number")
    }

})
