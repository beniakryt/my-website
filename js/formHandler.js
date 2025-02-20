document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('quote-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Показать сообщение об успешной отправке
            var responseElement = document.getElementById('response');
            responseElement.innerText = "Email sent successfully!";
            responseElement.style.color = "green";

            // Закрыть модальное окно через 2 секунды
            setTimeout(() => {
                var modal = document.getElementById("quote-modal");
                modal.style.display = "none";
                responseElement.innerText = ""; // Очистить сообщение
            }, 2000);
        })
        .catch(error => {
            console.error('Error:', error);
            var responseElement = document.getElementById('response');
            responseElement.innerText = "Failed to send email.";
            responseElement.style.color = "red";
        });
    });
});