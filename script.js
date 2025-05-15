const MAX = 10
const MIN = 1
const APROBADO = 6

function validacionNotas(input) {
    const nota = parseFloat(input.value);
    if (nota < MIN || nota > MAX) 
    {
        input.style.color = 'red';
    } 
    else 
    {
        input.style.color = 'green';
    }
}

function obtenerNotas() {
    const matematicas = parseFloat(document.getElementById('notaMatematicas').value);
    const lengua = parseFloat(document.getElementById('notaLengua').value);
    const efsi = parseFloat(document.getElementById('notaEfsi').value);
    return [matematicas, lengua, efsi];
}
function validarCampos() {
    const matematicas = document.getElementById('notaMatematicas').value;
    const lengua = document.getElementById('notaLengua').value;
    const efsi = document.getElementById('notaEfsi').value;

    if (matematicas === '' || lengua === '' || efsi === '') {
        alert('Complete los campos vacíos');
        return false;
    }

    return true;
}

function calcularPromedio() {
    const notas = obtenerNotas();
    if (!validarCampos()) {
        return;
    }
    if (notas.some(nota => nota < MIN || nota > MAX)) 
    {
        alert(`Las notas ingresadas deberian ser entre ${MIN} y ${MAX} `);
        return;
    }

    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Promedio: ${promedio}`;
    
    if (promedio >= APROBADO) {
        resultado.style.color = 'green';
    } else {
        resultado.style.color = 'red';
    }
}
function materiaMayorNota() {
    const notas = obtenerNotas();
    if (!validarCampos()) {
        return;
    }
    if (notas.some(nota => nota < 1 || nota > 10)) {
        alert('Por favor, ingrese notas válidas entre 1 y 10.');
        return;
    }
    const materias = ['matemáticas', 'lengua', 'efsi'];
    const maxNota = Math.max(...notas);

    const mejorMateria = materias.filter((materia, index) => notas[index] === maxNota);
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.textContent = `Materia(s) con mayor nota: ${mejorMateria.join(', ')}`;
    resultadoDiv.style.color = 'blue';
}