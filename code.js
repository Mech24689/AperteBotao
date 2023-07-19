const btn = document.querySelector('button')
const login = document.querySelector('#nome')
const senha = document.querySelector('#senha')
const container = document.querySelector('.container')

btn.addEventListener('mouseover', mudaPosition, false)
btn.addEventListener('mouseenter', move, false)


container.addEventListener('mouseover', () => {
    if(login.value == 'gabriel'){
        login.style.border = '2px solid green'
    }
    else if(login.value == ""){
        login.style.border = '2px solid black'
    }
    else{
        login.style.border = '2px solid red'
    }
})

container.addEventListener('mouseover', () => {
    if(senha.value == '123'){
        senha.style.border = '2px solid green'
        
    }
    else if(senha.value == ""){
        senha.style.border = '2px solid black'
    }
    else{
        senha.style.border = '2px solid red'
    }
})

function move() {
    btn.classList.toggle('btn-right')
    btn.classList.toggle('btn-left')
}

function mudaPosition (){
    if(login.value == 'gabriel' && senha.value == '123'){
        btn.removeEventListener('mouseenter', move, false)
    }else{
        btn.addEventListener('mouseenter', move, false)
    }
}

btn.addEventListener('click', () => {
    alert('Parabéns, você apertou o botão!')
})