
class Subject {

    alumnos = []

    constructor (nombreMateria) {
        this.nombre = nombreMateria
    }

    inscribeAlumno(student){
        let s = {
            alumno: student,
            calificacion: 0
        }
        this.alumnos.push(s)
    }

    asignarCalificacion(alumno, calificacion) {
        console.log (alumno)
        let posicion = this.encontrarAlumno(alumno.name)
        if (posicion == -1) {
            return -1
        }
        this.alumnos[posicion].calificacion = calificacion
    }

    encontrarAlumno(nombre){
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].alumno.name == nombre) {
                return i
            }
        }
        return -1
    }
}




//----------------
const clases = [
    new Subject("Matematicas"),
    new Subject("Historia"),
    new Subject("Español"),
    new Subject("Biologia"),
    new Subject("Quimica")
]

function encontrarClase(claseSeleccionada) {
        for (let i=0; i < clases.length; i++){
            if (clases[i].nombre==claseSeleccionada){
                return i
            }
        }
        return -1
}
function encontrarAlumno(nombreAlumno){
    for (let i = 0; i < alumnos.listaAlumnos.length; i++) {
        if (alumnos.listaAlumnos[i].name == nombreAlumno) {
            return i
        }
    }
    return -1
}

function fillDropDownSubjects(materias){
    materias.innerHTML=""
    clases.forEach(sub => {
        var opt = document.createElement("option")
        opt.text = sub.nombre
        opt.value = sub.nombre   
        materias.appendChild(opt)
    })
}

