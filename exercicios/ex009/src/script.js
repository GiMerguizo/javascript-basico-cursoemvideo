/* var pais = 'Brasil';
console.log(`Vivendo em ${pais}`);

if (pais == 'Brasil') {
  console.log('Você é Brasileiro!')
} else {
  console.log('Você é Estrangeiro!')
} */

function verificar() {
  var pais = document.querySelector('input#pais').value.toUpperCase()
  var res = document.querySelector('div#resultado')
  var nacionalidade
  var bandeira = document.querySelector('div#bandeira')
  
  if (pais == 'BRASIL') {
    nacionalidade = 'Brasileiro'
    bandeira.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Bandeira do Brasil" width="300">`
  } else {
    nacionalidade = 'Estrangeiro'
    bandeira.innerHTML = ``
  }
  
  res.innerHTML = `<p>Para o país <strong>${pais}</strong>, a nacionalidade é <strong>${nacionalidade}</strong></p>`
}