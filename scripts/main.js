class Reserva{
    constructor(nombre,documento,email,telefono,pais,direccion,boletos){
        this.boletos = boletos
        this.nombre = nombre;
        this.documento = documento;
        this.email = email;
        this.telefono = telefono;
        this.pais = pais;
        this.direccion = direccion;
        this.pasajeros = [];
        this.asientos = []
    }
}

class Pasajero{
    constructor(nombre,documento,clasificacion){
        this.nombre = nombre;
        this.documento = documento;
        this.clasificacion = clasificacion
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    //Asientos Valencia - Merida
    const asientos = [
        'x','x','x','30c','30d','30e','30f','30g','x','x',
        '31a','31b','31c','31d','31e','31f','31g','31h','31j',
        '32a','32b','32c','32d','32e','32f','32g','32h','32j',
        '33a','33b','33c','33d','33e','33f','33g','33h','33j',
        '34a','34b','34c','34d','34e','34f','34g','34h','34j',
        '35a','35b','35c','35d','35e','35f','35g','35h','35j',
        '36a','36b','36c','36d','36e','36f','36g','36h','36j',
        '37a','37b','37c','37d','37e','37f','37g','37h','37j',
        '38a','38b','38c','38d','38e','38f','38g','38h','38j',
        '39a','39b','39c','39d','39e','39f','39g','39h','39j',
        '40a','40b','40c','40d','40e','40f','40g','40h','40j',
        '41a','41b','x','41d','41e','41f','x','x','41h','41j',
        '42a','42b','x','42d','42e','42f','x','x','42h','42j',
        '43a','43b','x','43d','43e','43f','x','x','43h','43j',
        'x','x','x','x','44d','44e','44f','x','x','x','x',
        'x','x','x','x','45d','45e','45f','x','x','x','x',
    ]
    const mapa = document.getElementById('asientos-mapa');
    asientos.forEach(seat => {
        if (seat == 'x'){
            const elemento = document.createElement('div');
            elemento.classList.add('blank');
            mapa.appendChild(elemento);

        } else if (seat.charAt(seat.length - 1) == 'b' || seat.charAt(seat.length - 1) == 'g'){
            const elemento = document.createElement('div');
            elemento.classList.add('seat', 'available');
            elemento.textContent = seat;
            elemento.id = seat + "1";
            elemento.addEventListener('click', () => seleccionarAsiento(seat + "1"));
            mapa.appendChild(elemento);
            const elemento2 = document.createElement('div');
            elemento2.classList.add('blank');
            mapa.appendChild(elemento2);

        }else if (seat == '38j' || seat == '37j' || seat == '36j'){
            const elemento = document.createElement('div');
            elemento.classList.add('seat', 'available','emergency');
            elemento.textContent = seat;
            elemento.id = seat + "1";
            elemento.addEventListener('click', () => seleccionarAsiento(seat + "1"));
            elemento.style.borderRightColor="#FF0000"
            elemento.style.borderRightStyle="solid"
            elemento.style.borderRightWidth="3px"
            mapa.appendChild(elemento);

        }else if (seat == '38a' || seat == '37a' || seat == '36a'){
            const elemento = document.createElement('div');
            elemento.classList.add('seat','available','emergency');
            elemento.textContent = seat;
            elemento.id = seat + "1";
            elemento.addEventListener('click', () => seleccionarAsiento(seat + "1"));
            elemento.style.borderLeftColor="#FF0000"
            elemento.style.borderLeftStyle="solid"
            elemento.style.borderLeftWidth="3px"
            mapa.appendChild(elemento);

        } else {
            const elemento = document.createElement('div');
            elemento.classList.add('seat', 'available');
            elemento.textContent = seat;
            elemento.id = seat + "1";
            elemento.addEventListener('click', () => seleccionarAsiento(seat + "1"));
            mapa.appendChild(elemento);
        }
    })

    //Asientos Merida-Valencia
    const asientos1 = [
        'x','x','x','30c','30d','30e','30f','30g','x','x',
        '31a','31b','31c','31d','31e','31f','31g','31h','31j',
        '32a','32b','32c','32d','32e','32f','32g','32h','32j',
        '33a','33b','33c','33d','33e','33f','33g','33h','33j',
        '34a','34b','34c','34d','34e','34f','34g','34h','34j',
        '35a','35b','35c','35d','35e','35f','35g','35h','35j',
        '36a','36b','36c','36d','36e','36f','36g','36h','36j',
        '37a','37b','37c','37d','37e','37f','37g','37h','37j',
        '38a','38b','38c','38d','38e','38f','38g','38h','38j',
        '39a','39b','39c','39d','39e','39f','39g','39h','39j',
        '40a','40b','40c','40d','40e','40f','40g','40h','40j',
        '41a','41b','x','41d','41e','41f','x','x','41h','41j',
        '42a','42b','x','42d','42e','42f','x','x','42h','42j',
        '43a','43b','x','43d','43e','43f','x','x','43h','43j',
        'x','x','x','x','44d','44e','44f','x','x','x','x',
        'x','x','x','x','45d','45e','45f','x','x','x','x',
    ]
    const mapa1 = document.getElementById('asientos-mapa1');
    asientos1.forEach(seat1 => {
        if (seat1 == 'x'){
            const elemento1 = document.createElement('div');
            elemento1.classList.add('blank');
            mapa1.appendChild(elemento1);

        } else if (seat1.charAt(seat1.length - 1) == 'b' || seat1.charAt(seat1.length - 1) == 'g'){
            const elemento1 = document.createElement('div');
            elemento1.classList.add('seat', 'available');
            elemento1.textContent = seat1;
            elemento1.id = seat1 + "2";
            elemento1.addEventListener('click', () => seleccionarAsiento(seat1 + "2"));
            mapa1.appendChild(elemento1);
            const elemento21 = document.createElement('div');
            elemento21.classList.add('blank');
            mapa1.appendChild(elemento21);

        }else if (seat1 == '38j' || seat1 == '37j' || seat1 == '36j'){
            const elemento1 = document.createElement('div');
            elemento1.classList.add('seat', 'available','emergency');
            elemento1.textContent = seat1;
            elemento1.id = seat1 + "2";
            elemento1.addEventListener('click', () => seleccionarAsiento(seat1 + "2"));
            elemento1.style.borderRightColor="#FF0000"
            elemento1.style.borderRightStyle="solid"
            elemento1.style.borderRightWidth="3px"
            mapa1.appendChild(elemento1);

        }else if (seat1 == '38a' || seat1 == '37a' || seat1 == '36a'){
            const elemento1 = document.createElement('div');
            elemento1.classList.add('seat', 'available','emergency');
            elemento1.textContent = seat1;
            elemento1.id = seat1 + "2";
            elemento1.addEventListener('click', () => seleccionarAsiento(seat1 + "2"));
            elemento1.style.borderLeftColor="#FF0000"
            elemento1.style.borderLeftStyle="solid"
            elemento1.style.borderLeftWidth="3px"
            mapa1.appendChild(elemento1);

        } else {
            const elemento1 = document.createElement('div');
            elemento1.classList.add('seat', 'available');
            elemento1.textContent = seat1;
            elemento1.id = seat1 + "2";
            elemento1.addEventListener('click', () => seleccionarAsiento(seat1 + "2"));
            mapa1.appendChild(elemento1);
        }
    })
});

let cant;
let elegidos;
let reserva = 0;
var darkmode = false;

function btnhomepage(){
    let form = document.getElementById("homepage");
    form.style.display="none";
    document.getElementById("form1").style.display="block";
    document.getElementById("form1").style.opacity="1";
    document.getElementById("consultar-boton").style.display="block";
    document.getElementById("consultar-boton").style.opacity="1";
    select1 = document.getElementById("lugarOrigen")
    select2 = document.getElementById("lugarDestino")
    selectb = document.getElementById("tipoboleto")
    fecha1 = document.getElementById("fechaPartida")
    fecha2 = document.getElementById("fechaRegreso")

    select1.addEventListener('change', () => {
        if (select1.value === 'valencia') {
            select2.value = 'merida';
            fecha1.value = '2024-07-03'
            fecha1.min = '2024-07-03'
            fecha1.max = '2024-07-03'
        } else if (select1.value === 'merida') {
            select2.value = 'valencia';
            fecha1.value = '2024-07-13'
            fecha1.min = '2024-07-13'
            fecha1.max = '2024-07-13'
        }
    });

    select2.addEventListener('change', () => {
        if (select2.value === 'valencia') {
            select1.value = 'merida';
            fecha1.value = '2024-07-13'
            fecha1.min = '2024-07-13'
            fecha1.max = '2024-07-13'
        } else if (select2.value === 'merida') {
            select1.value = 'valencia';
            fecha1.value = '2024-07-03'
            fecha1.min = '2024-07-03'
            fecha1.max = '2024-07-03'
        }
    });

    selectb.addEventListener('change',()=>{
        if (selectb.value === 'ida-vuelta'){
            select1.value = 'valencia';
            select2.value = 'merida';
            fecha1.value = '2024-07-03'
            fecha1.min = '2024-07-03'
            fecha1.max = '2024-07-03'
            fecha2.value = '2024-07-13'
            fecha2.min = '2024-07-13'
            fecha2.max = '2024-07-13'
            select1.disabled = true;
            select2.disabled = true;
            fecha2.style.display = "block"
            document.getElementById('label-regreso').style.display = "block"
        } else if (selectb.value === 'ida'){
            select1.value = 'valencia';
            select2.value = 'merida';
            select1.disabled = false;
            select2.disabled = false;
            fecha2.style.display = "none"
            document.getElementById('label-regreso').style.display = "none"
        }
    });
    
    return false;
}

function btnreservar(){
    cant = document.getElementById("Cantpasajeros").value;
    elegidos = 0;
    let form = document.getElementById("form1");
    form.style.display="none";
    document.getElementById("form2").style.display="block";
    document.getElementById("form2").style.opacity="1";
    return false;
};

function btncontacto(){

    let nombrereservante = document.getElementById("nombre-contacto").value;
    let prefixDocumento = document.getElementById("prefijo-documento").value;
    let documentoreservante = document.getElementById("documento-contacto").value;
    let emailreservante = document.getElementById("email-contacto").value;
    let prefixNumero = document.getElementById("prefijo-numero").value;
    let telefonoreservante = document.getElementById("telefono-contacto").value;
    let paisreservante = document.getElementById("pais-contacto").value;
    let direccionreservante = document.getElementById("direccion-contacto").value;
    let boletosreservante = document.getElementById("tipoboleto").value;

    if(nombrereservante == '' || documentoreservante =='' || emailreservante=='' || telefonoreservante=='' || paisreservante=='' || direccionreservante ==''){
        window.alert("Faltan datos por rellenar.");
        return false;
    } else if (verificarNombre(nombrereservante)){
        window.alert("Nombre no permitido.");
        return false;
    } else if (verificarNumeros(documentoreservante)){
        window.alert("Documento no permitido.");
        return false;
    } else if (verificarEmail(emailreservante)){
        window.alert("Email no permitido.");
        return false;
    } else if (verificarNumeros(telefonoreservante)){
        window.alert("Telefono no permitido.");
        return false;
    }
    reserva = new Reserva(nombrereservante,prefixDocumento + documentoreservante,emailreservante,prefixNumero + telefonoreservante,paisreservante,direccionreservante,boletosreservante);
    console.log(reserva)
    let form = document.getElementById("form2");
    form.style.display="none";
    document.getElementById("form3").style.display="block";
    document.getElementById("form3").style.opacity="1";
    for (let i = 1; i <= cant; i++) {
        let elemento = document.createElement('h3');
        elemento.classList.add('h3-1');
        elemento.style.marginLeft = "10px"
        elemento.innerHTML = "Pasajero " + i;
        document.getElementById("div-form3").appendChild(elemento);
        div = document.createElement('div');
        div.classList.add('divform');
        document.getElementById("div-form3").appendChild(div);
        elemento = document.createElement('input');
        elemento.classList.add('inputForm');
        elemento.id = "nombre" + i;
        elemento.type = "text";
        elemento.placeholder = "Nombre Completo"
        div.appendChild(elemento);
        select1 = document.createElement('select');
        select1.classList.add('inputForm');
        select1.classList.add('input-prefix');
        select1.id = "prefix" + i;
        select1.type = "text";
        div.appendChild(select1);
        venezolano = document.createElement('option');
        venezolano.value = "v";
        venezolano.innerHTML = "Venezolano"
        select1.appendChild(venezolano);
        extranjero = document.createElement('option');
        extranjero.value = "e";
        extranjero.innerHTML = "Extranjero"
        select1.appendChild(extranjero);
        juridico = document.createElement('option');
        juridico.value = "j";
        juridico.innerHTML = "Juridico"
        select1.appendChild(juridico);
        pasaporte = document.createElement('option');
        pasaporte.value = "";
        pasaporte.innerHTML = "Pasaporte"
        select1.appendChild(pasaporte);
        elemento = document.createElement('input');
        elemento.classList.add('inputForm');
        elemento.id = "documento" + i;
        elemento.type = "text";
        elemento.placeholder = "Número de Documento"
        div.appendChild(elemento);
        select = document.createElement('select');
        select.classList.add('inputForm');
        select.id = "selector" + i;
        div.appendChild(select);
        adulto = document.createElement('option');
        adulto.value = "adulto";
        adulto.innerHTML = "Adulto (16-64 años)";
        select.appendChild(adulto);
        nino = document.createElement('option');
        nino.value = "nino";
        nino.innerHTML = "Niño (4-15 años)";
        select.appendChild(nino);
        infante = document.createElement('option');
        infante.value = "infante";
        infante.innerHTML = "Infante (0-3 años)";
        select.appendChild(infante);
        mayor = document.createElement('option');
        mayor.value = "mayor";
        mayor.innerHTML = "Adulto Mayor (+65 años)";
        select.appendChild(mayor);
        discapacidad = document.createElement('option');
        discapacidad.value = "discapacidad";
        discapacidad.innerHTML = "Persona con discapacidad física";
        select.appendChild(discapacidad);
    }
    return false;
};

function btnpasajeros(){
    boleto = document.getElementById('tipoboleto').value;
    origen = document.getElementById("lugarOrigen").value

    for (let i = 1; i <= cant; i++) {
        let nombre = document.getElementById("nombre" + i).value;
        let prefix = document.getElementById("prefix" + i).value;
        let documento = document.getElementById("documento" + i).value;
        let selector = document.getElementById("selector" + i).value;
        if (verificarNombre(nombre)){
            window.alert("Nombre de pasajero " + i + " no permitido.");
            return false;
        }
        if (verificarNumeros(documento)){
            window.alert("Documento de pasajero " + i + " no permitido.");
            return false;
        }
        let pasajero = new Pasajero(nombre,prefix + documento,selector)
        reserva.pasajeros.push(pasajero)
    }

    if (boleto == "ida"){
        if (origen == "valencia"){
            let form = document.getElementById("form3");
            form.style.display="none";
            document.getElementById("form4").style.display="block";
            document.getElementById("form4").style.opacity="1";
            elegidos = 0;
        } else if (origen == "merida"){
            let form = document.getElementById("form3");
            form.style.display="none";
            document.getElementById("form5").style.display="block";
            document.getElementById("form5").style.opacity="1";
            elegidos = 0;
        }
    } else if (boleto = "ida-vuelta"){
        let form = document.getElementById("form3");
        form.style.display="none";
        document.getElementById("form4").style.display="block";
        document.getElementById("form4").style.opacity="1";
        elegidos = 0;
    }
}

function btnasientos(){
    if (cant != document.getElementsByClassName('selected').length){
        window.alert("Faltan asientos por elegir");
        return false;
    } else {
        let selectedElements = Array.from(document.getElementsByClassName('selected'));
        for (let index = 0; index < selectedElements.length; index++) {
            reserva.asientos.push(selectedElements[index].id);
            selectedElements[index].classList.add('unavailable');
            selectedElements[index].classList.remove('selected');
        };
    };

    if (boleto == "ida"){
        return false;
    } else if (boleto == "ida-vuelta"){
        let form = document.getElementById("form4");
        form.style.display="none";
        document.getElementById("form5").style.display="block";
        document.getElementById("form5").style.opacity="1";
        elegidos = 0;
    };
}

function btnasientos1(){
    if (cant != document.getElementsByClassName('selected').length){
        window.alert("Faltan asientos por elegir");
        return false;
    } else {
        let selectedElements = Array.from(document.getElementsByClassName('selected'));
        for (let index = 0; index < selectedElements.length; index++) {
            reserva.asientos.push(selectedElements[index].id);
            selectedElements[index].classList.add('unavailable');
            selectedElements[index].classList.remove('selected');
        };
    }
    return false;
}

function seleccionarAsiento(seat){
    const elemento = document.getElementById(seat);
    if (elemento.classList.contains('available') && elegidos < cant) {
        elemento.classList.add('selected');
        elemento.classList.remove('available');
        elegidos += 1;
    } else if (elemento.classList.contains('selected')){
        elemento.classList.add('available');
        elemento.classList.remove('selected')
        elegidos -= 1;
    }
}

function abrirmodal(){
    document.getElementById("modal").style.pointerEvents = "auto";
    document.getElementById("modal").style.opacity = "1";
}

function cerrarmodal(){
    document.getElementById("modal").style.pointerEvents = "none";
    document.getElementById("modal").style.opacity = "0";
}

function modooscuro(){
    if (darkmode == false){
        console.log("test");
        document.getElementById("circulo").style.marginLeft = "50%";
        darkmode = true;
        document.getElementById("cuerpo").style.backgroundImage = "url(../resources/wallpaper2.png)"
        document.getElementById("circulo").style.backgroundColor = "#f4fefe"
        document.getElementById("circulo").style.borderColor = "#b4c3cc"
    } else if (darkmode == true){
        document.getElementById("circulo").style.marginLeft = "2px";
        darkmode = false;
        document.getElementById("cuerpo").style.backgroundImage = "url(../resources/wallpaper.png)"
        document.getElementById("circulo").style.backgroundColor = "#f89d58"
        document.getElementById("circulo").style.borderColor = "#f9b17a"
    }
}

function verificarNombre(cadena) {
    // Expresión regular para detectar cualquier cosa que no sea una letra o un espacio
    const regex = /[^\p{L}\s]/u;
    
    // Testea la cadena con la expresión regular
    return regex.test(cadena);
}

function verificarEmail(cadena) {
    // Expresión regular para detectar un correo electrónico válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Testea la cadena con la expresión regular y retorna el resultado inverso
    return !regex.test(cadena);
}

function verificarNumeros(cadena) {
    // Expresión regular para verificar si la cadena contiene al menos un carácter que no sea un número
    const regex = /[^0-9]/;
    
    // Testea la cadena con la expresión regular y retorna el resultado
    return regex.test(cadena);
}