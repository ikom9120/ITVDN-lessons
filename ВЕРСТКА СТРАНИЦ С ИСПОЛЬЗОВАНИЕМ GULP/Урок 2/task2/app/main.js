document.addEventListener("DOMContentLoaded", function (event) {
    let button = document.getElementsByTagName("button")[0] // получаем кнопку
// навешиваем обработчик на событие клик
    button.addEventListener("click", function () {
        document.getElementById("demo").innerHTML = "Привет JavaScript";
    })
});

