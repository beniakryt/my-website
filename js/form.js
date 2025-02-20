document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("quote-modal");
    var btn = document.getElementById("quote-btn");
    var closeBtn = document.querySelector(".close");

    // Проверяем, что все элементы найдены
    if (!form || !btn || !closeBtn) {
        console.error("Ошибка: один из элементов не найден!");
        console.log("Форма:", form);
        console.log("Кнопка:", btn);
        console.log("Кнопка закрытия:", closeBtn);
        return;
    }

    // Открытие модального окна
    btn.addEventListener("click", function () {
        form.style.display = "flex";
    });

    // Закрытие окна при нажатии на X
    closeBtn.addEventListener("click", function () {
        form.style.display = "none";
    });

    // Закрытие при клике вне формы
    window.addEventListener("click", function (event) {
        if (event.target === form) {
            form.style.display = "none";
        }
    });
});