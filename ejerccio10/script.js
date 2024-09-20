// Capturamos el formulario
const ageFormMorning = document.getElementById('ageFormMorning');
const ageFormAfternoon = document.getElementById('ageFormAfternoon');
const ageFormNight = document.getElementById('ageFormNight');

// Capturamos los contenedores donde irán los inputs
const morningContainer = document.getElementById('morning');
const afternoonContainer = document.getElementById('afternoon');
const nightContainer = document.getElementById('night');

// Función para generar inputs según el número de estudiantes
function generarInputs(container, cantidad, turno) {
    for (let i = 0; i < cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Edad estudiante ${i + 1} (${turno})`;
        input.required = true;
        input.classList.add(turno);  // Añadimos la clase para identificar por turno
        container.appendChild(input);
    }
}

// Generamos los inputs para los 3 turnos
generarInputs(morningContainer, 5, 'mañana');
generarInputs(afternoonContainer, 6, 'tarde');
generarInputs(nightContainer, 11, 'noche');

// Función para calcular el promedio de un array de edades
function calcularPromedio(edades) {
    const suma = edades.reduce((acc, curr) => acc + curr, 0);
    return suma / edades.length;
}

// Evento para calcular los promedios y determinar el mayor
ageFormMorning.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe

    // Capturamos las edades de cada turno
    const edadesMañana = Array.from(document.getElementsByClassName('mañana')).map(input => parseInt(input.value));
    const edadesTarde = Array.from(document.getElementsByClassName('tarde')).map(input => parseInt(input.value));
    const edadesNoche = Array.from(document.getElementsByClassName('noche')).map(input => parseInt(input.value));

    // Verificamos que todas las entradas sean válidas (no NaN)
    if (edadesMañana.includes(NaN) || edadesTarde.includes(NaN) || edadesNoche.includes(NaN)) {
        alert('Por favor, ingresa todas las edades.');
        return;
    }

    // Calculamos los promedios
    const promedioMañana = calcularPromedio(edadesMañana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    // Determinamos cuál promedio es mayor
    let mayorPromedio = 'Mañana';
    let maxPromedio = promedioMañana;

    if (promedioTarde > maxPromedio) {
        mayorPromedio = 'Tarde';
        maxPromedio = promedioTarde;
    }

    if (promedioNoche > maxPromedio) {
        mayorPromedio = 'Noche';
        maxPromedio = promedioNoche;
    }

    // Mostramos los promedios y el turno con el mayor promedio
    document.getElementById('promedioMañana').textContent = promedioMañana.toFixed(2);
    document.getElementById('promedioTarde').textContent = promedioTarde.toFixed(2);
    document.getElementById('promedioNoche').textContent = promedioNoche.toFixed(2);
    document.getElementById('turnoMayor').textContent = mayorPromedio;
});
