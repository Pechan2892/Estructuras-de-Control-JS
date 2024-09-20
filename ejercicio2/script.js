// Capturamos el formulario
const gradeForm = document.getElementById('gradeForm');

// Agregamos el evento de submit para calcular la nota
gradeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const name = document.getElementById('name').value;
    const carnet = document.getElementById('carnet').value;
    const exam = parseFloat(document.getElementById('exam').value);
    const tasks = parseFloat(document.getElementById('tasks').value);
    const attendance = parseFloat(document.getElementById('attendance').value);
    const research = parseFloat(document.getElementById('research').value);

    // Calcular la nota final usando las ponderaciones
    const finalGrade = (exam * 0.2) + (tasks * 0.4) + (attendance * 0.1) + (research * 0.3);

    // Mostrar los resultados
    document.getElementById('result').textContent = `
        Nombre del Alumno: ${name} 
        Carnet: ${carnet} 
        Nota Final: ${finalGrade.toFixed(2)}
    `;
});
