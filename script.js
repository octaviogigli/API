document.getElementById('botonBuscar').addEventListener('click', obtenerFrases);
document.getElementById('botonLimpiar').addEventListener('click', limpiarFrases);

function obtenerFrases() {
    const cantidad = document.getElementById('numFrases').value;
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${cantidad}`)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarFrases(datos))
        .catch(error => console.error('Error al obtener las frases:', error));
}

function mostrarFrases(frases) {
    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = ''; // Limpiar resultados anteriores

    frases.forEach(frase => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <p><strong>Personaje:</strong> ${frase.character}</p>
            <p><strong>Frase:</strong> "${frase.quote}"</p>
            <img src="${frase.image}" alt="Imagen de ${frase.character}" />
        `;
        contenedor.appendChild(tarjeta);
    });
}

function limpiarFrases() {
    document.getElementById('resultados').innerHTML = '';
}
