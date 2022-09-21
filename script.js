function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagen')
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são <strong>${hora}:${min}h</strong>, Bom dia!`
        window.document.body.style.background = '#FFDEAD'
        img.src = 'img/manha.png'
    }else if (hora < 18){
        msg.innerHTML = `Agora são ${hora}:${min}h, Boa Tarde!`
        window.document.body.style.background = '#FFFFE0'
        img.src = 'img/tarde.png'
    }else{
        msg.innerHTML = `Agora são ${hora}:${min}h, Boa Noite!`
        window.document.body.style.background = '#1E90FF'
        img.src = 'img/noite.png'
    }
}

