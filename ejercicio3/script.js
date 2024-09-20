// Capturamos el formulario
const salaryForm = document.getElementById('salaryForm');

// Agregamos el evento de submit para calcular el aumento
salaryForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const name = document.getElementById('name').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const category = document.getElementById('category').value;

    // Definir el porcentaje de aumento basado en la categoría
    let increasePercentage;
    switch (category) {
        case 'A':
            increasePercentage = 0.15; // 15%
            break;
        case 'B':
            increasePercentage = 0.30; // 30%
            break;
        case 'C':
            increasePercentage = 0.10; // 10%
            break;
        case 'D':
            increasePercentage = 0.20; // 20%
            break;
        default:
            increasePercentage = 0; // Por si hay algún error
    }

    // Calcular el aumento y el nuevo salario
    const increaseAmount = salary * increasePercentage;
    const newSalary = salary + increaseAmount;

    // Mostrar el resultado
    document.getElementById('result').textContent = `
        Nombre del Empleado: ${name} 
        Salario Actual: $${salary.toFixed(2)} 
        Categoría: ${category} 
        Aumento: $${increaseAmount.toFixed(2)} 
        Nuevo Salario: $${newSalary.toFixed(2)}
    `;
});
