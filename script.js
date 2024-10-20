/* Functions */

function trocaCor(cor) {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = cor
    /* Colocar Onclik no HTML */
  
  }
  
  function corAleatoria() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const yellow = Math.floor(Math.random() * 255)
    
    document.body.style.backgroundImage = 'none'
    
    document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue}, ${yellow})`
  }
  
  function aplicaCorPersonalizada() {
    const corInput = document.querySelector('.input-cor').value
  
    trocaCor(corInput)
  }
  
  function escolherImagem(imagem) {
    const reader = new FileReader()
  
    reader.onload = function (evento) {
      const urlImagem = evento.target.result
  
      document.body.style.backgroundImage = `url('${urlImagem}')`
    }
    reader.readAsDataURL(imagem)
  }