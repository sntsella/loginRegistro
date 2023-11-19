function login() {
    var email = document.getElementById('txtlogin')
    var senha = document.getElementById('txtsenha')

   if (email.value == '' || senha.value == ''){
        window.alert('Preencha todos os campos.')
    } else{
        alert('Dados Salvos com sucesso!')
    }
}

function registro() {
    var email = document.getElementById('txtemail')
    var senha = document.getElementById('txtsenha')
    var confsenha = document.getElementById('txtconfsenha')

   if (email.value == '' || senha.value == '' || confsenha.value == '') {
        window.alert('Preencha todos os campos.')
    } else{
        alert('Dados Salvos')
    }
}
