document.getElementById('add-btn').addEventListener('click', function () {
    document.getElementById('Cash-out-sec').classList.add('hidden')
    document.getElementById('Add-Mony-sec').classList.remove('hidden')
})
document.getElementById('cash-btn').addEventListener('click', function () {
    document.getElementById('Cash-out-sec').classList.remove('hidden')
    document.getElementById('Add-Mony-sec').classList.add('hidden')
})