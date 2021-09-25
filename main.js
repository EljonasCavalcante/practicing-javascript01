//alert("Hello Word!")

function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = 20//data.getHours()  
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >= 6 && hora < 12) {
    // Bom dia!
    img.src = 'img/manha.png'
    document.body.style.background = '#445f6f'
  } else if(hora >= 12 && hora < 18) {
    // boa tarde!
    img.src = 'img/tarde.png'
    document.body.style.background = '#fd8a17'
  } else if(hora >= 18 && hora > 0 ) {
    // boa noite
    img.src = 'img/noite.png'
    document.body.style.background = '#705178'
    
  }else {
    // boa madrugada
    img.src = 'img/bianca.png'
  }
}
