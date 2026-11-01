// Condición para verificar si hay cupo en la cata de café
const cupoCata = 8;
const inscritos = 5;

// Verificar si hay cupo disponible para la cata de café
// Si el cupo es mayor que el número de inscritos, se puede abrir la reserva
// De lo contrario, la cata está llena y se debe ofrecer una lista de espera
if (cupoCata > inscritos) {
    console.log("¡Aún hay cupo, abrir reserva!");
} else {
    console.log("Cata llena, ofrecer lista de espera.");
}