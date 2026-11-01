console.log("V60");
console.log("Kyoto drip");
console.log("shipon");
console.log("Prensa francesa");


const metodos = ["V60", "Kyoto drip", "shipon", "Prensa francesa"];

for (const metodo of metodos) {
    console.log(metodo);
}


const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const reserva of reservasDelDia) {
    totalTazas += reserva;
}

console.log("Total de tazas reservadas hoy: " + totalTazas);