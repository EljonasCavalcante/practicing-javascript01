
function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')  
  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || fano.value > ano) {
   window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
      genero = 'Homem'
      document.body.style.background = 'black'
      if(idade >= 0 && idade < 12) {
        // criança
        img.setAttribute('src', 'img/menino.png') 
      }else if(idade < 21 ){
        // jovem
        img.setAttribute('src', 'img/homem-jovem.png') 
      }else if(idade < 50) {
        // adulto
        img.setAttribute('src', 'img/homem-adulto.png') 
      }else {
        // idoso
        img.setAttribute('src', 'img/idoso-1.png') 
      }

    } else if(fsex[1].checked) {
      genero = 'Mulher'
      document.body.style.background = 'pink'
      if(idade >= 0 && idade < 12) {
        // criança
        img.setAttribute('src', 'img/menina.png') 
      }else if(idade < 21 ){
        // jovem
        img.setAttribute('src', 'img/mulher-jovem.png') 
      }else if(idade < 50) {
        // adulto
        img.setAttribute('src', 'img/mulher-adulta.png') 
      }else {
        // idosa
        img.setAttribute('src', 'img/mulher-velha.png') 
      }
    }
    res.style.textAling = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
  }
}