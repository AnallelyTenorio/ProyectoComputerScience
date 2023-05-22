class Alumno {

    constructor(nombre, apellidos, edad){
        this.name = nombre
        this.lastName = apellidos
        this.age = edad
    }
}

class AltaAlumno{

    constructor(){
        this.listaAlumnos =[]
    }
    nuevo(alumno){
        this.listaAlumnos.push(alumno)
    }
}



//-------------------------

//let ana = new Alumno("Ana", "Tenorio", 30)

//clases[0].inscribeAlumno(ana)
//clases[0].asignarCalificacion(ana,9)

//console.log("clase: ", clases[0].nombre, "alumnos: ", clases[0].alumnos)
//console.log("clase: ", clases[1].nombre, "alumnos: ", clases[1].alumnos)