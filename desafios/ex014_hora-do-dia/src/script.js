function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  // var hora = 14
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = 'https://images.unsplash.com/photo-1508717334315-37b159f24d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyOTAzNDl8&ixlib=rb-4.1.0&q=80&w=400'
    document.body.style.background = 'rgb(252, 194, 106, 0.7)'
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = 'https://images.unsplash.com/photo-1577257108037-e85032e84049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyOTUwNzV8&ixlib=rb-4.1.0&q=80&w=400'
    document.body.style.background = 'rgb(255, 129, 66)'
  } else {
    // Boa noite
    img.src = 'https://images.unsplash.com/photo-1482406611936-43ea538e39d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAyOTUxMDN8&ixlib=rb-4.1.0&q=80&w=400'
    document.body.style.background = 'rgb(22, 27, 46)'
  }
}


