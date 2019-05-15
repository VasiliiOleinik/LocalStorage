'use strict';
// Принимает 2 аргумента: ключ => значение
// localStorage.setItem('number', 1); // Записать в локалсторадже

// localStorage.getItem("number") // Полчить данные

// localStorage.removeItem("number"); // Удалить ключ

// localStorage.clear(); // Полностью очистить хранилище


//////////////////////

window.addEventListener("DOMContentLoaded", function () {

    let checkbox = document.getElementById('remeberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = "#FF4766";
    }

    checkbox.addEventListener("click", () => {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener("click", () => {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766";
    });
//////////////////////////////////////


    let persone = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    };

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Alex', serializedPersone);
    console.log(JSON.parse(localStorage.getItem("Alex")));

});