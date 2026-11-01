const tazasDisponibles = 50;
const tazasReservadas = 0;
const reservasPorPersona = 2;


function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

function puedeReservar(cantidad) {
    if (cantidad <= reservasPorPersona && (tazasReservadas + cantidad) <= tazasDisponibles) {
        return true;
    }
    return false;
}

if (puedeReservar(2)) {
    console.log("Reserva permitida");
} else {
    console.log("Reserva no permitida, máximo 2 tazas por reserva");
}