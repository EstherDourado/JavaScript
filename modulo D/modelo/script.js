function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imgs/manha.png'
        document.body.style.background = '#8ba4a1'
    } else if (hora>= 12 && hora <= 18){
        //Boa Tarde
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#feb618'
    } else if (hora >= 18){
        //Boa Noite
        img.scr = 'imgs/marnoite.png'
        document.body.style.background = '#003f5e'
    }
    
}