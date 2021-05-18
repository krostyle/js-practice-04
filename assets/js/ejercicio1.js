//Elementos del DOM
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const resultado = document.querySelector('.resultado');
const errorNombre = document.querySelector('.errorNombre');
const errorAsunto = document.querySelector('.errorAsunto');
const errorMensaje = document.querySelector('.errorMensaje')

//Expresión regular para validar la entrada de datos.
const regex = new RegExp('[A - Za - z]', 'm');

//Función de validación
const validate = (input) => {
    const flag = regex.test(input);
    return flag;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((validate(nombre.value)) && (validate(asunto.value)) && (validate(mensaje.value))) {
        resultado.innerHTML = `<p>Mensaje enviado con éxito !!</p>`
        errorNombre.innerHTML = '';
        errorAsunto.innerHTML = '';
        errorMensaje.innerHTML = '';
    } else {
        switch (validate(nombre.value)) {
            case false:
                errorNombre.innerHTML = 'El nombre es requerido';
                break
            case true:
                errorNombre.innerHTML = '';
                break;
        }
        switch (validate(asunto.value)) {
            case false:
                errorAsunto.innerHTML = 'El nombre es requerido';
                break;
            case true:
                errorAsunto.innerHTML = '';
                break;
        }
        switch (validate(mensaje.value)) {
            case false:
                errorMensaje.innerHTML = 'El nombre es requerido';
                break;
            case true:
                errorMensaje.innerHTML = '';
                break;
        }
    }
});