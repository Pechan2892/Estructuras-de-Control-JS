// Capturamos el formulario y el contenedor de inputs
const numberForm = document.getElementById('numberForm');
const inputsContainer = document.getElementById('inputs');

// Generamos 10 campos de entrada de número
for (let i = 0; i < 10; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `num${i}`;
    input.placeholder = `Valor ${i + 1}`;
    inputsContainer.appendChild(input);
}

// Función para analizar los números ingresados
function analizarNumeros(numeros) {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let num of numeros) {
        if (num < 0) {
            negativos++;
        } else if (num > 0) {
            positivos++;
        }

        if (num % 15 === 0) {
            multiplosDe15++;
        }

        if (num % 2 === 0) {
            sumaPares += num;
        }
    }

    return {
        negativos,
        positivos,
        multiplosDe15,
        sumaPares
    };
}

// Agregamos el evento de submit para el formulario
numberForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe

    // Capturamos los 10 valores ingresados
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        const valor = parseInt(document.getElementById(`num${i}`).value);
        if (isNaN(valor)) {
            alert("Por favor, ingresa todos los valores correctamente.");
            return;
        }
        numeros.push(valor);
    }

    // Llamamos a la función de análisis
    const resultado = analizarNumeros(numeros);

    // Mostramos el resultado en el HTML
    document.getElementById('result').innerHTML = `
        <p>Cantidad de valores negativos: ${resultado.negativos}</p>
        <p>Cantidad de valores positivos: ${resultado.positivos}</p>
        <p>Cantidad de múltiplos de 15: ${resultado.multiplosDe15}</p>
        <p>Valor acumulado de números pares: ${resultado.sumaPares}</p>
    `;
});
