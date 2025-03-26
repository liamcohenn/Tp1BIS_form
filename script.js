const MAX = 10
const MIN = 1

const form = document.getElementById("notas");

const notaMatematicas = document.getElementById("notaMatematicas")
const notaLengua = document.getElementById("notaLengua")
const notaEFSI = document.getElementById("notaEfsi")

const cantMaterias = 3

function calcularPromedio()
{
    //VALIDACION
    if(notaMatematicas < MIN|| notaMatematicas >MAX || notaLengua < MIN|| notaLengua >MAX || notaEFSI < MIN|| notaEFSI >MAX){
        alert("La nota debe estar entre 1 y 10")
    }

    //FUNCION
    let promedio = (notaMatematicas + notaEFSI + notaLengua) / cantMaterias
}
function materiaMayorNota()
{
    //VALIDACION
    if(notaMatematicas < MIN|| notaMatematicas >MAX || notaLengua < MIN|| notaLengua >MAX || notaEFSI < MIN|| notaEFSI >MAX){
        alert("La nota debe estar entre 1 y 10")
    }

    //FUNCION
    let notaMaxima
    if (notaMatematicas > notaLengua && notaMatematicas > notaEFSI) {
        notaMaxima = "Matematicas"
    }
    if (notaLengua > notaMatematicas && notaLengua > notaEFSI) {
        notaMaxima = "Lengua"
    }
    if (notaEFSI > notaLengua && notaEFSI > notaMatematicas) {
        notaMaxima = "EFSI"
    }
    console.log(notaMaxima)
}
     
    document.getElementById("promedio").addEventListener('onclick', function(evento){
        evento.preventDefault();
        calcularPromedio()
    }
    )

    document.getElementById("mayorNota").addEventListener('onclick', function(evento){
        evento.preventDefault();
        materiaMayorNota()
    }
    )

