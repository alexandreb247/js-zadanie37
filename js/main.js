var p = document.getElementById("tekst");

var button1 = document.getElementById('dodaj');
button1.onclick = function () {
    p.textContent = 'Tekst został dodany';
}

var button2 = document.getElementById('usun');
button2.onclick = function () {
    p.textContent = null;
}