function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

// function puedeReservar(cantidad) {
//     return cantidad <= 2;
// }

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

// const botonReservar = document.querySelector("#boton-reservar");
//
// botonReservar.addEventListener("click", function () {
//     console.log("El usuario hizo click");
// })


const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function () {
    const tazasActuales = Number(contadorTazas.textContent);

    if (!puedeReservar(tazasActuales)) return;

    const tazasRestantes = tazasActuales - 1;
    contadorTazas.textContent = tazasRestantes;
    console.log("Reserva registrada")

    if (!puedeReservar(tazasRestantes)) {
        botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
        console.log("Ya no hay cupos disponibles!")
    }
})


fetch('https://api.open-mateo.com/v1/forecast?latitude=4.6&longitude=74.08&current_weather=true')
    .then(response => response.json())
    .then(data => console.log(data.text))




const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));