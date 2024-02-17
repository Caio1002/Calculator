/*CALCULADORA*/

/* 1° criar pos objetos/arrays para os elementos que serão manipulados: */
const obj_txt_display = document.querySelector('#txt_display')
const array_bt_num = document.querySelectorAll('.bt_num')
const array_botoes = document.querySelectorAll('.botoes')
const obj_bt_calcular = document.querySelector('#bt_calcular')
const obj_bt_limpar = document.querySelector('#bt_limpar')

/*2° declarar variavel para controlar a limpeza do display. iniciar com false*/
let limpa_display = false

/*3°declarar variavel para controlar a quantidade de digitos no display. iniciar com zero*/
let conta_display = 0

/*4° adicionar o evento para chamar as funcoes*/
for (obj_bt_num of array_bt_num) {
    obj_bt_num.addEventListener('click', function() {FunMontaDisplay(this.innerText) } )
}

for (obj_botao of array_botoes) {
    const operacao = obj_botao.getAttribute('data-oper')
    obj_botao.addEventListener('click', function() {FunMontaDisplay(operacao) } )
}

obj_bt_calcular.addEventListener('click', FunCalcularResultado)
obj_bt_limpar.addEventListener('click', FunLimpar)

/*5° declarar as funções para executar as ações:*/

function FunMontaDisplay(par_txt) {
    if (limpa_display == true) {
        obj_txt_display.value = ''
        limpa_display = false
        conta_display = 0
    }
    if (conta_display < 20) {
        obj_txt_display.value += par_txt
        conta_display++
    }
    else {
        alert('Limite de digitos!')
    }
}

function FunCalcularResultado() {
    try {
        obj_txt_display.value = eval(obj_txt_display.value)
    }
    catch (erro) {
        alert('Conta inválida. Erro ' + erro.message)
    }
    limpa_display = true
}

function FunLimpar() {
    obj_txt_display.value = ''
    conta_display = 0
}


/* redimensionar o poligono*/

/*1° criar os objetos para os elementos que serao manipulados: */
obj_num_largura = document.querySelector('#num_largura')
obj_num_altura = document.querySelector('#num_altura')
obj_div_poligono = document.querySelector('#div_poligono')
obj_p_perimetro = document.querySelector('#p_perimetro')

/*2° adicionar os eventos para chamar a funcao: */
obj_num_largura.addEventListener('change', FunRedimensionarPoligono)
obj_num_altura.addEventListener('change', FunRedimensionarPoligono)

/*3° declarar a funcao para executar as ações: */
function FunRedimensionarPoligono() {
    if (obj_num_largura.value < 50 || obj_num_largura.value > 100
      || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
          alert('Valores invalidos')
    }
    else {
        obj_div_poligono.style.width = obj_num_altura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        obj_div_poligono.innerText = 'Área: ' + (obj_num_largura.value * obj_num_altura.value) + 'px²'
        obj_p_perimetro.innerText = 'Perímetro: ' +
        ( parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) +
          parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) ) + 'px'
    }
}