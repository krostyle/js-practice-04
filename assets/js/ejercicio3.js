const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const validar = (result) => {
    if (result < 0) {
        return 0
    } else {
        return result;
    }
}

const regex = new RegExp('\\d')

const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const btnSumar = document.getElementById('btn-sumar')
const btnRestar = document.getElementById('btn-restar')
const resultado = document.querySelector('.resultado')


btnSumar.addEventListener('click', e => {
    if (regex.test(valor1.value) && regex.test(valor2.value)) {
        const num1 = parseFloat(valor1.value)
        const num2 = parseFloat(valor2.value)
        resultado.innerHTML = validar(sumar(num1, num2))
    } else {
        alert('Por favor ingrese solo números')
    }
})

btnRestar.addEventListener('click', e => {
    if (regex.test(valor1.value) && regex.test(valor2.value)) {
        const num1 = parseFloat(valor1.value)
        const num2 = parseFloat(valor2.value)
        resultado.innerHTML = validar(restar(num1, num2))
    } else {
        alert('Por favor ingrese solo números')
    }
})