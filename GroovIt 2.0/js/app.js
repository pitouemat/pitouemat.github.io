let msg = document.getElementById('day');
let agora = new Date();
let horas = agora.getHours();


if (horas >= 0 && horas <= 12) {
    //BOM DIA
    msg.innerHTML = "Bom Dia"

}else if (horas > 12 && horas < 18) {
    //BOA TARDE
    msg.innerHTML = "Boa Tarde"

}else {
    //BOA TARDE
    msg.innerHTML = "Boa Noite"
}


