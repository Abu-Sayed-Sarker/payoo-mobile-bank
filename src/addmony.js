document.getElementById("Add-Mony").addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount = parseFloat(document.getElementById('amount').value);
    const inputPin = document.getElementById('Pin').value;
    const blance = parseFloat(document.getElementById('blance').innerText);

    document.getElementById('amount').value = '';
    document.getElementById('Pin').value = '';

    if (inputPin === 'asd') {
        document.getElementById('blance').innerText = inputAmount + blance;


    }
    else {
        alert("Enter your carrect Pin number")
    }

})