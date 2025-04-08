let arr = []
let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')
    let pais = document.querySelector('#pais')
    let lista = document.querySelector('.lista')

    let dados = {
        nome: nome.value,
        idade: idade.value,
        pais: pais.value
    }
    arr.push(dados)

    lista.innerHTML = ''
    arr.forEach((element) => {
        console.log(element)
        lista.innerHTML += `
        <p> Nome: ${element.nome} </p>
        <p> Idade: ${element.idade} </p>
        <p> País: ${element.pais} </p>
        <hr>
    `
    });

})
