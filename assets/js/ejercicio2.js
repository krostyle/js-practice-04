const principal = document.getElementById('principal');
const caja = document.getElementById('caja');


principal.addEventListener('click', e => {
    if (e.target.type === 'button') {
        const bgColor = getColor(e.target.attributes.id.value);
        setColor(bgColor)
    } else {
        alert('Por favor seleccione uno de los botones coloreados.')
    }
})

//Obtener Color
const getColor = (id) => {
        const elementColor = document.getElementById(`${id}`).style.backgroundColor;
        return elementColor;

    }
    //Establecer Color
const setColor = (bgColor) => {
    caja.style.backgroundColor = `${bgColor}`
}