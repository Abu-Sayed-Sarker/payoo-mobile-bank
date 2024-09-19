document.getElementById("cash-out").addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount2 = parseFloat(document.getElementById('amount2').value);
    const inputPin2 = document.getElementById('Pin2').value;
    const blance2 = parseFloat(document.getElementById('blance').innerText);

    document.getElementById('amount2').value = '';
    document.getElementById('Pin2').value = '';


    if (inputPin2 === 'asd') {
        const result = blance2 - inputAmount2;
        if (result < 0) {
            alert("Your blance is low")
        }
        else {
            document.getElementById('blance').innerText = result;
        }



    }
    else {
        alert("Enter your carrect Pin number")
    }

})