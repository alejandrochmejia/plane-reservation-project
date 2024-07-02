document.addEventListener('DOMContentLoaded', (event) => {
    //Fecha Vuelo
    const inputFecha = document.getElementById('fechaPartida');
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const anio = hoy.getFullYear();

    const fechaActual = `${anio}-${mes}-${dia}`;
    
    inputFecha.value = fechaActual;
    inputFecha.min = fechaActual;
    inputFecha.max = fechaActual;

    //Asientos
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
            elemento.id = seat;
            elemento.addEventListener('click', () => seleccionarAsiento(seat));
            mapa.appendChild(elemento);
            const elemento2 = document.createElement('div');
            elemento2.classList.add('blank');
            mapa.appendChild(elemento2);

        }else if (seat == '38j' || seat == '37j' || seat == '36j'){
            const elemento = document.createElement('div');
            elemento.classList.add('seat', 'available','emergency');
            elemento.textContent = seat;
            elemento.id = seat;
            elemento.addEventListener('click', () => seleccionarAsiento(seat));
            elemento.style.borderRightColor="#FF0000"
            elemento.style.borderRightStyle="solid"
            elemento.style.borderRightWidth="3px"
            mapa.appendChild(elemento);

        }else if (seat == '38a' || seat == '37a' || seat == '36a'){
            const elemento = document.createElement('div');
            elemento.classList.add('seat','available','emergency');
            elemento.textContent = seat;
            elemento.id = seat;
            elemento.addEventListener('click', () => seleccionarAsiento(seat));
            elemento.style.borderLeftColor="#FF0000"
            elemento.style.borderLeftStyle="solid"
            elemento.style.borderLeftWidth="3px"
            mapa.appendChild(elemento);

        } else {
            const elemento = document.createElement('div');
            elemento.classList.add('seat', 'available');
            elemento.textContent = seat;
            elemento.id = seat;
            elemento.addEventListener('click', () => seleccionarAsiento(seat));
            mapa.appendChild(elemento);
        }
    })
});

let cant;
let elegidos;
let listaasientos = [];
let listareservas = [];

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
    let form = document.getElementById("form2");
    form.style.display="none";
    document.getElementById("form3").style.display="block";
    document.getElementById("form3").style.opacity="1";
    console.log(cant);
    return false;
};

function btnasientos(){
    let listaescogidos = document.getElementsByClassName('selected');
    listaasientos = [];
    for (let index = 0; index < listaescogidos.length; index++) {
        listaasientos.push(listaescogidos[index].id)
        listareservas.push()
    }
    

    let form = document.getElementById("form3");
    form.style.display="none";
    document.getElementById("form4").style.display="block";
    document.getElementById("form4").style.opacity="1";
    return false;
}

function seleccionarAsiento(seat){
    const elemento = document.getElementById(seat);
    if (elemento.classList.contains('available') && elegidos < cant) {
        elemento.classList.add('selected');
        elemento.classList.remove('available')
        elegidos += 1;
    } else if (elemento.classList.contains('selected')){
        elemento.classList.add('available');
        elemento.classList.remove('selected')
        elegidos -= 1;
    }
}