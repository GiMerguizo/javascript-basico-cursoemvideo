// alert('Olá')
var array = []
var lista = document.getElementById('lista')
var res = document.getElementById('resultado')
var erro = document.getElementById('erro')
var soma = 0

/* function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
} */

function isVazio(array) {
  if (array.length === 0) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function limpaLista() {
  if (isVazio(array)) {
    lista.innerHTML = ''
  }
}

function adicionar() {
  let num = document.getElementById('numero')
  let item = document.createElement('option')
  
  let numero = Number(num.value)
  
  limpaLista()
  
  if (numero < 1 || numero > 100) {
    erro.innerHTML = `O número precisa estar entre 1 e 100. Tente novamente.`
  } else if (inLista(numero, array)) {
    erro.innerHTML = `Valor inválido ou já encontrado na lista.`
  } else {
    erro.innerHTML = ''
       
    array.push(numero)
    
    item.text = `Valor ${numero} adicionado.`
    item.value = numero
    lista.appendChild(item)
    res.innerHTML = ''
    
    soma += numero
  }
  
  num.value = ''
  num.focus()
  console.log(array)
}

function limpar() {
  let lista = document.getElementById('lista')
  lista.innerHTML = ''
  array = []
  soma = 0
  erro.innerHTML = ''
  res.innerHTML = ''
}

function finalizar() {
  if (isVazio(array)) {
    alert('Adicione valores antes de finalizar.')
  } else {
    res.innerHTML = `<p>Ao todo, temos ${array.length} números adicionados;<p>`
  
    array.sort((a, b) => a - b)
    console.log(array)

    res.innerHTML += `<p>O maior valor informado foi ${array[array.length - 1]}; <p>`
    res.innerHTML += `<p>O menor valor informado foi ${array[0]}; <p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma};<p>`

    let media = soma / (array.length)

    res.innerHTML += `<p>A média de todos os valores é ${media}. <p>`
  }
}

