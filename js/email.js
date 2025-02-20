document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("quote-modal");
    const form = document.getElementById("quote-form");
    const responseDiv = document.getElementById("response");
    const closeBtn = document.querySelector(".close");

    if (!form) {
        console.error("Форма с ID 'quote-form' не найдена!");
        return;
    }

    // Закрытие модального окна
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Закрытие при клике вне формы
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Инициализация EmailJS (замени на свой публичный ключ)
    emailjs.init("CH9Nxkn5z_cq_eG3g");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        emailjs.sendForm("service_detlzoh", "template_71gqwqq", this)
            .then(function (response) {
                responseDiv.innerHTML = "<p style='color: green;'>Message sent successfully!</p>";
                form.reset(); // Очистка формы
                setTimeout(() => { modal.style.display = "none"; }, 2000); // Закрываем модалку через 2 сек
            }, function (error) {
                responseDiv.innerHTML = "<p style='color: red;'>Error sending message.</p>";
                console.error("Ошибка отправки:", error);
            });
    });
});