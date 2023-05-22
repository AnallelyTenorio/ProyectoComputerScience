let alumnos=new AltaAlumno ()

function altaAlumno () {
    let nombre= document.getElementById("inputName").value
    let apellidos= document.getElementById("inputLastName").value
    let edad= document.getElementById("inputAge").value
    let alumno = new Alumno (nombre,apellidos,edad)
    alumnos.nuevo(alumno)
    document.getElementById("inputName").value=""
    document.getElementById("inputLastName").value=""
    document.getElementById("inputAge").value=""
    alert("Alumno guardado")

}
function fillDropDownAlumnos(dropDown){
    console.log ("dropDown", dropDown)
    dropDown.innerHTML=""
    alumnos.listaAlumnos.forEach(alum => {
        var opt = document.createElement("option")
        opt.text = alum.name
        opt.value = alum.name  
        dropDown.appendChild(opt)
    })
}
let clase = []
function inscribirAlumno (nombreClase, alumno) {
    let clase = new Clase (nombreClase, alumno)
    clase.push(clase)
}
function buttonDarAlta(){
    document.getElementById("altaAlumno").classList.remove("hidden")
    document.getElementById("paginaInicio").classList.add("hidden")
}
function buttonInscribir(){
    document.getElementById("inscribirAclase").classList.remove("hidden")
    document.getElementById("paginaInicio").classList.add("hidden")
    fillDropDownAlumnos(document.getElementById("selectInscribirAlumnos"))
    fillDropDownSubjects(document.getElementById("nombreClases"))
}
function buttonAsignar(){
    document.getElementById("asignarCalificacion").classList.remove("hidden")
    document.getElementById("paginaInicio").classList.add("hidden")
    fillDropDownAlumnos(document.getElementById("selectCalificarAlumno"))
    fillDropDownSubjects(document.getElementById("nombreClasesAsignar"))
}
function buttonGrupos(){
    document.getElementById("grupos").classList.remove("hidden")
    document.getElementById("paginaInicio").classList.add("hidden")
}
function buttonInicioAlta(){
    document.getElementById("altaAlumno").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonInicioInscribir(){
    document.getElementById("inscribirAclase").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}

function buttonAtrasAsignar(){
    document.getElementById("asignarCalificacion").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonInicioGrupo(){
    document.getElementById("grupos").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonCrearGrupo(){
    document.getElementById("grupos").classList.add("hidden")
    document.getElementById("crearGrupo").classList.remove("hidden")
}
function buttonAtrasCrearGrupo(){
    document.getElementById("crearGrupo").classList.add("hidden")
    document.getElementById("grupos").classList.remove("hidden")
}

function buttonAsignarGrupo(){
    document.getElementById("grupos").classList.add("hidden")
    document.getElementById("asignarGrupo").classList.remove("hidden")
    fillDropDownGrupos(document.getElementById("selectGrupoAsignarGrupo"))
    fillDropDownAlumnos(document.getElementById("selectAlumnoAsignarGrupo"))
}
function buttonAtrasAsignarGrupo(){
    document.getElementById("asignarGrupo").classList.add("hidden")
    document.getElementById("grupos").classList.remove("hidden")
}
function buttonBuscarGrupo(){
    document.getElementById("grupos").classList.add("hidden")
    document.getElementById("buscar").classList.remove("hidden")

}
function buttonBuscarNombre(){
    document.getElementById("buscar").classList.add("hidden")
    document.getElementById("buscarNombre").classList.remove("hidden")
}
function buttonInicioBuscarPorNombre(){
    document.getElementById("buscarNombre").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonBuscarApellidos(){
    document.getElementById("buscar").classList.add("hidden")
    document.getElementById("buscarApellido").classList.remove("hidden")
}
function buttonInicioBuscarporApellido(){
    document.getElementById("buscarApellido").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonBuscarListaOrdenada(){
    document.getElementById("buscar").classList.add("hidden")
    document.getElementById("buscarListaOrdenada").classList.remove("hidden")
}
function buttonInicioListaOrdenada(){
    document.getElementById("buscarListaOrdenada").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonBuscarPromedioGrupo(){
    document.getElementById("buscar").classList.add("hidden")
    document.getElementById("buscarPromedioGrupo").classList.remove("hidden")
    fillDropDownGrupos(document.getElementById("grupoBuscarPromedio"))
}
function buttonInicioPromedioGrupo(){
    document.getElementById("buscarPromedioGrupo").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")

}
function buttonBuscarPromedioAlumno(){
    document.getElementById("buscar").classList.add("hidden")
    document.getElementById("buscarPromedioAlumno").classList.remove("hidden")
}
function buttonInicioPromedioAlumno(){
    document.getElementById("buscarPromedioAlumno").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonSalirBuscar(){
    document.getElementById("buscar").classList.add("hidden")
    document.getElementById("paginaInicio").classList.remove("hidden")
}
function buttonGuardarInscribir(){
    let nombreAlumno= document.getElementById("selectInscribirAlumnos").value
    let claseSeleccionada=document.getElementById("nombreClases").value
    let posicion= encontrarClase(claseSeleccionada)
    let posicionAlumno= encontrarAlumno(nombreAlumno)
    clases[posicion].inscribeAlumno(alumnos.listaAlumnos[posicionAlumno])
   console.log (nombreAlumno)
   console.log (claseSeleccionada)
   console.log (posicion)
   console.log (posicionAlumno)
    alert ("Alumno inscrito")
}
function buttonGuardarAsignar(){
    let materiaCalificar=document.getElementById("nombreClasesAsignar").value
    let alumnoCalificar=document.getElementById("selectCalificarAlumno").value
    let calificacion=document.getElementById("calificacionAsignada").value
    let posicion= encontrarClase(materiaCalificar)
    let posicionAlumno=encontrarAlumno(alumnoCalificar)
    console.log (materiaCalificar)
    console.log (alumnoCalificar)
    console.log (calificacion)
    console.log (posicion)
    console.log (posicionAlumno)
    console.log(alumnos)
    clases[posicion].asignarCalificacion(alumnos.listaAlumnos[posicionAlumno], calificacion)

    alert ("Calificacion asignada")
    document.getElementById("calificacionAsignada").value=""

} 
function buttonGuardarAsignarGrupo(){
    let grupoAsignado=document.getElementById("selectGrupoAsignarGrupo").value
    let alumnoAsignado=document.getElementById("selectAlumnoAsignarGrupo").value
    let posicionGrupo=encontrarGrupo(grupoAsignado)
    let posicionAlumno=encontrarAlumno(alumnoAsignado)
    listaGrupos.listaGrupos[posicionGrupo].asignarGrupo(alumnos.listaAlumnos[posicionAlumno])
    alert ("Grupo asignado")
}
let listaGrupos=new AltaGrupo()

function buttonGuardarCrearGrupo(){
    let nombreGrupo=document.getElementById("inputNameGrupo").value
    let grupo=new Grupo (nombreGrupo)
    listaGrupos.nuevo(grupo)
    document.getElementById("inputNameGrupo").value=""
    alert ("Grupo creado")

}

function buttonBuscarPorNombre(){
    let nombreIngresado=document.getElementById("inputNombreBuscar").value
    let alumno = -1
    let i = 0
    let grp
    console.log(listaGrupos)
    while (i < listaGrupos.listaGrupos.length && alumno === -1){
        grp = listaGrupos.listaGrupos[i]
        console.log("grupo",grp)
        alumno = grp.buscarAlumnoPorNombre(nombreIngresado)
        console.log("alumno", alumno)
        i++
    }
    console.log("Alumno encontrado: ", alumno)
    if (alumno != -1) { 
        alert(alumno.name+" "+"esta inscrita en el grupo "+grp.grupo)    
    } else {
        alert("No se encontro en el grupo")
    }
}

function buttonBuscarPorApellido(){
    let apellidoIngresado=document.getElementById("inputApellidoBuscar").value
    let alumno = -1
    let i = 0
    let grp
    console.log(listaGrupos)
    while (i < listaGrupos.listaGrupos.length && alumno === -1){
        grp = listaGrupos.listaGrupos[i]
        console.log("grupo",grp)
        alumno = grp.buscarAlumnoPorApellido(apellidoIngresado)
        console.log("alumno", alumno)
        i++
    }
    console.log("Alumno encontrado: ", alumno)
    if (alumno != -1) { 
        alert(alumno.lastName+" "+"esta inscrita en el grupo "+grp.grupo)    
    } else {
        alert("No se encontro en el grupo")
    }
}
function buttonCalcularPromedioGrupo(){
    let grupoSelec= document.getElementById("grupoBuscarPromedio").value
    let posicionGrupo=encontrarGrupo(grupoSelec)
    let alumnosEnGrupo=listaGrupos.listaGrupos[posicionGrupo].listaAlumnosGrupo
    let promedioSumaGrupo = 0
    let promedioCantidadClases = 0
    clases.forEach(clase => {        
        clase.alumnos.forEach(alumnoEnClase => {
            alumnosEnGrupo.forEach(alumnoEnGrupo => {
                if (alumnoEnClase.alumno.name == alumnoEnGrupo.name) 
                {
                    console.log("clase", clase.nombre, 
                    "alumnoEnGrupo", alumnoEnGrupo.name, 
                    "alumnoEnClase", alumnoEnClase.alumno.name, 
                    "calificacion", alumnoEnClase.calificacion)
                    console.log (promedioSumaGrupo)
                     promedioSumaGrupo = Number(promedioSumaGrupo) + Number(alumnoEnClase.calificacion)
                     promedioCantidadClases += 1
                }
            })
        })
    })
    console.log("promedioSumaGrupo", promedioSumaGrupo, "promcantidadClases", promedioCantidadClases)
    let promedioGrupo = promedioSumaGrupo / promedioCantidadClases
    alert("Promedio del grupo " + grupoSelec + " es: " + promedioGrupo)
}
