export class Reserva{

    constructor(nombre,documento,email,telefono,pais,direccion){
        this.nombre = nombre;
        this.documento = documento;
        this.email = email;
        this.telefono = telefono;
        this.pais = pais;
        this.direccion = direccion;
        this.pasajeros = [];
    }
}

export class Pasajero{

    constructor(nombre,documento,clasificacion){
        this.nombre = nombre;
        this.documento = documento;
        this.clasificacion = clasificacion
        this.asiento = "";
    }
}