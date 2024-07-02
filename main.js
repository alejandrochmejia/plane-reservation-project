document.addEventListener('DOMContentLoaded', (event) => {
    //Fecha Vuelo
    const inputFecha = document.getElementById('fechaPartida');
    const inputFecha2 = document.getElementById('nacimiento-contacto');
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
        '41a','41b','41c','41d','x','41f','41g','41h','41j',
        '42a','42b','42c','42d','x','42f','42g','42h','42j',
        '43a','43b','43c','43d','x','43f','43g','43h','43j',
        'x','x','x','44c','44d','x','44f','44g','x','x',
        'x','x','x','45c','45d','x','45f','45g','x','x',
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
            mapa.appendChild(elemento);
            const elemento2 = document.createElement('div');
            elemento2.classList.add('blank');
            mapa.appendChild(elemento2);
        } else {
        const elemento = document.createElement('div');
        elemento.classList.add('seat', 'available');
        elemento.textContent = seat;
        elemento.id = seat;
        mapa.appendChild(elemento);
        }
    })
});

let cant;
let reservarBtn = document.getElementById('boton-form');

function reservar(){
    cant = document.getElementById("Cantpasajeros").value;
    let form = document.getElementById("form1");
    form.style.display="none";
    document.getElementById("form2").style.display="block";
    document.getElementById("form2").style.opacity="0";
    document.getElementById("form2").style.opacity="1";
    return false;
};

function contacto(){
    let form = document.getElementById("form2");
    form.style.display="none";
    document.getElementById("form3").style.display="block";
    document.getElementById("form3").style.opacity="0";
    document.getElementById("form3").style.opacity="1";
    console.log(cant);
    return false;
};