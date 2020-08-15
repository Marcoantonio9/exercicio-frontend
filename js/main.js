//Botão ver mais

let mostrarTexto = document.querySelector('#btn-ver')
    mostrarTexto.addEventListener('click', abrirTexto)

function abrirTexto(e){
    document.querySelector('.texto-oculto').classList.toggle('mostrar-texto')

    document.querySelector('#btn-ver').style.display = 'none'

    e.preventDefault()
}

//Exibir campo de assuntos e conteudo 

let exibindoCampos = document.querySelector('#criar-topico')
    exibindoCampos.addEventListener('click', exibirCampo)

function exibirCampo(e){
    document.querySelector('.campos-topicos').classList.toggle('exibir-campos-topicos')
    //ocultar subtitulo h3
    document.querySelector('.container-discussoes').classList.toggle('ocultar-discussoes')

    //Ocultando botão criar 
    document.querySelector('#criar-topico').style.display = 'none'

    //Exibir subtitulo span 
    document.querySelector('.sub2').classList.toggle('exibir-sub2')    

    e.preventDefault()
}

//Enviar tópico
let btnEnviar = document.querySelector('.btn-topicos')
    btnEnviar.addEventListener('click', enviarForm)

function enviarForm(e){

    document.querySelector('.segundo-container-discussoes').style.display = 'flex'

    document.querySelector('.sub2').style.display = 'none'

    document.querySelector('.feedback').style.display = 'flex'


    e.preventDefault()
}

//Criar novo tópico
let criarNovoTopico = document.querySelector('#enviar-novamente')
    criarNovoTopico.addEventListener('click', criandoTopico)

function criandoTopico(){
    document.location.reload(true)
}

//Funções para exibição de comentários
let comentarios = document.querySelector('#coments')
    comentarios.addEventListener('click', exibindoComents)

function exibindoComents(e){
    document.querySelector('.comentarios').classList.toggle('exibir-coments')

    e.preventDefault()
}

let comentarios2 = document.querySelector('#coments2')
    comentarios2.addEventListener('click', exibindoComents2)

function exibindoComents2(e){
    document.querySelector('.comentarios2').classList.toggle('exibir-coments')

    document.querySelector('.comentarios3').classList.toggle('exibir-coments')

    e.preventDefault()
}

//Menu responsivo
let btnMenu = document.querySelector('.btncheck')
    btnMenu.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('exibir-sidebar')
})