const formulario = document.getElementById("form2");
const inputs = document.querySelectorAll("#form2 input")

const expresions = {
    nombre: /^[a-zA-Z]+$/,
    documento: /^\d{7,14}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.]+$/,
    telefono: /^\d{7,14}$/,
    direccion: /^[a-zA-Z]+$/
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "nombre":
            validarCampo(expresions.nombre, e.target, "nombre")
        break;
        case "documento":
            validarCampo(expresions.documento, e.target, "documento")
        break;
        case "correo":
            validarCampo(expresions.correo, e.target, "correo")
        break;
        case "telefono":
            validarCampo(expresions.telefono, e.target, "telefono")
        break;
        case "direccion":
            validarCampo(expresions.direccion, e.target, "direccion")
        break;
    }
}

const registro = {
    nombre: false ,
    documento: false ,
    correo: false,
    telefono: false,
    direccion:false
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        campos[campo] = true
    } else {
    }
    campos[campo] = false
}

inputs.forEach (() => {
    input.addEventListener("keyup", validarFormulario);
})

formulario.addEventListener ("submit", (e) => {
    e.preventDefault();

    if(campos.nombre && campos.documento && campos.correo && campos.direccion && campos.telefono) {
        formulario.reset();
    }
})

