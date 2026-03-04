function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano')
  var res = document.getElementById('res')
  var foto = document.getElementById('foto')
  
  // Imagem padrão (caso precise)
  var imagem = ''

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 5) {
        // Bebê
        imagem = 'https://images.unsplash.com/photo-1686226739312-700c14c0c30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjYwNzd8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 12) {
        // Criança
        imagem = 'https://images.unsplash.com/photo-1591845466147-c6c601063c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjYyOTR8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 18) {
        // Juvenil
        imagem = 'https://images.unsplash.com/photo-1725438125766-372c0990835a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjY2Nzd8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 35) {
        // Jovem
        imagem = 'https://images.unsplash.com/photo-1714510395218-ff27b9f1f978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjY4MzF8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 50) {
        // Adulto
        imagem = 'https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA3MjI0NzB8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 65) {
        // Quase melhor idade
        imagem = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjY5NDR8&ixlib=rb-4.1.0&q=80&w=400'
      } else {
        // Idoso
        imagem = 'https://images.unsplash.com/photo-1555888997-03e986fc157b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA3MjI1MTF8&ixlib=rb-4.1.0&q=80&w=400'
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 5) {
        // Bebe
        imagem = 'https://images.unsplash.com/photo-1578178107900-e8ef3855b9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA3MjIxMjl8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 12) {
        // Criança
        imagem = 'https://images.unsplash.com/photo-1591845466283-621e346f07c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjcyNDl8&ixlib=rb-4.1.0&q=80&w=400'        
      } else if (idade < 18) {
        // Juvenil
        imagem = 'https://images.unsplash.com/photo-1622057757383-f3af349525d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0MjczMTJ8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 35) {
        // Jovem
        imagem = 'https://images.unsplash.com/photo-1542305983-c4100e4b8cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA3MjI4MjJ8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 50) {
        // Adulto
        imagem = 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA3MjI4NzB8&ixlib=rb-4.1.0&q=80&w=400'
      } else if (idade < 65) {
        // Quase melhor idade
        imagem = 'https://images.unsplash.com/photo-1615538785945-6625ccdb4b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mjc0MDB8&ixlib=rb-4.1.0&q=80&w=400'
      } else {
        // Idoso
        imagem = 'https://images.unsplash.com/photo-1525599428495-0441bd5c67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA3MjI5MTB8&ixlib=rb-4.1.0&q=80&w=400'
      }
    }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
    
    // Atualiza o HTML da div foto com a imagem correta
    if (imagem) {
        foto.innerHTML = `<img src="${imagem}" alt="Foto de ${genero}" id="imagem">`
    }
  }
}