// Definición del objeto Edificio
function Edificio(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = [];
    document.write(`Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}<br>`);
}

// Métodos del objeto Edificio
Edificio.prototype.agregarPlantasYPuertas = function (numPlantas, puertas) {
    for (let i = 0; i < numPlantas; i++) {
        this.plantas.push(new Array(puertas).fill(null));
    }
};

Edificio.prototype.modificarNumero = function (numero) {
    this.numero = numero;
};

Edificio.prototype.modificarCalle = function (calle) {
    this.calle = calle;
};

Edificio.prototype.modificarCodigoPostal = function (codigo) {
    this.codigoPostal = codigo;
};

Edificio.prototype.imprimeCalle = function () {
    return this.calle;
};

Edificio.prototype.imprimeNumero = function () {
    return this.numero;
};

Edificio.prototype.imprimeCodigoPostal = function () {
    return this.codigoPostal;
};

//Metodo para agregar un propietario
Edificio.prototype.agregarPropietario = function (nombre, planta, puerta) {
    if (this.plantas[planta - 1] && this.plantas[planta - 1][puerta - 1] !== undefined) {
        this.plantas[planta - 1][puerta - 1] = nombre;
        document.write(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}<br>`);
    } else {
        document.write('Planta o puerta no válida<br>');
    }
};
//Metodo para imprimir plantas
Edificio.prototype.imprimePlantas = function () {
    document.write(`Listado de propietarios del edificio calle ${this.calle} número ${this.numero}<br>`);
    for (let planta = 0; planta < this.plantas.length; planta++) {
        for (let puerta = 0; puerta < this.plantas[planta].length; puerta++) {
            const propietario = this.plantas[planta][puerta];
            if (propietario !== null && propietario !== undefined) {
                document.write(`Propietario del piso ${puerta + 1} de la planta ${planta + 1}: ${propietario}<br>`);
            }
        }
    }
};
//Creación de edificios
const edificioA = new Edificio('Garcia Prieto', 58, '15706');
const edificioB = new Edificio('Camino Caneiro', 29, '32004');
const edificioC = new Edificio('San Clemente', 's/n', '15705');

document.write(`El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}<br>`);
document.write(`La calle del edificio C es: ${edificioC.imprimeCalle()}<br>`);
document.write(`El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}<br>`);

edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario('Jose Antonio Lopez', 1, 1);
edificioA.agregarPropietario('Luisa Martinez', 1, 2);
edificioA.agregarPropietario('Marta Castellón', 1, 3);
edificioA.agregarPropietario('Antonio Pereira', 2, 2);

edificioA.imprimePlantas();

edificioA.agregarPlantasYPuertas(1, 1);
edificioA.agregarPropietario('Pedro Meijide', 3, 2);

edificioA.imprimePlantas();