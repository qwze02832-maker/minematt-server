function copyIP() {
    const ip = document.getElementById('server-ip').innerText;
    const port = document.getElementById('server-port').innerText;
    const fullAddress = ip + ":" + port;

    navigator.clipboard.writeText(fullAddress).then(() => {
        const msg = document.getElementById('status-msg');
        msg.innerText = "IP и Порт скопированы!";
        setTimeout(() => { msg.innerText = ""; }, 3000);
    });
}
