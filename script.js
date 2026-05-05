// Открыть правила
function openRules() {
    document.getElementById("rulesModal").style.display = "block";
}

// Закрыть правила
function closeRules() {
    document.getElementById("rulesModal").style.display = "none";
}

// Закрытие при клике вне окна
window.onclick = function(event) {
    let modal = document.getElementById("rulesModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Копирование IP
function copyIP() {
    const ip = document.getElementById('ip').innerText;
    const port = document.getElementById('port').innerText;
    navigator.clipboard.writeText(ip + ":" + port);
    alert("IP сервера " + ip + ":" + port + " скопирован!");
}
