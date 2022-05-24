let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

//Estilizacao

nome.style.width = '40%'
email.style.width = '40%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido!' //.innerHTML ->  
        txt.style.color = 'red' 
        txt.style.fontWeight='bold' 
        nome.style.borderColor='#ff4d4d'
        
    }else{
        txt.innerHTML = 'Nome válido!'
        txt.style.color = '#1B1464' 
        txt.style.fontWeight='bold'  
    }
}

//Função de verificação:


function verificar(){
    if(nome.value =="" || email.value =="" || mensagem.value ==""){
        alert('Campo sem preenchimento!')
        return false
    }
    return true
}

function enviar(){
    if(verificar()){
        alert('Olá '+ nome.value +'! Mensagem enviada com sucesso!')
    }
}


