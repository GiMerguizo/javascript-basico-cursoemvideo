// alert('Olá')
var resultado = document.getElementById('resultado')

function contar() {
  var inicio = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var passos = document.getElementById('passos')
 
  if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
    resultado.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] Faltam dados!')
  } else {
    // alert('TUDO OK!')
    resultado.innerHTML = 'Contando: <br>'
    
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passos = Number(passos.value)
    
    if (passos <= 0) {
      alert(`Passo inválido! Considerando PASSO = 1`)
      passos = 1
    }
    
    resultado.innerHTML += ' &#128205; &#128073; ';
    
    if (inicio < fim) {
       for (var i = inicio; i <= fim; i += passos) {
        resultado.innerHTML += i + ' &#128073; ';  
      }
    } else {
      for (var i = inicio; i >= fim; i -= passos) {
        resultado.innerHTML += i + ' &#128073; '; 
      }
    }
    resultado.innerHTML += ' &#128681; ';
  }
   
  console.log('FIM')
}