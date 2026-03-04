// window.document.write('Olá, Mundo!')
var corpo = document.body
var p1 = document.getElementsByTagName('p')[1]
var d = document.getElementById('msg')

corpo.style.background = 'black'
p1.style.color = 'blue'
d.style.background = 'green'
d.innerText = 'Estou aguardando... '

document.write('Está escrito assim: ' + p1.innerHTML)