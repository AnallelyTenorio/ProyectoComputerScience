class AltaGrupo{
    constructor(){
        this.listaGrupos=[]

    }
    nuevo(grupo){
        this.listaGrupos.push(grupo)
    }
}
class Grupo {
    listaAlumnosGrupo= []
    constructor (nombreGrupo){
        this.grupo=nombreGrupo
    }

    asignarGrupo (student){
        this.listaAlumnosGrupo.push (student) 
    }

    buscarAlumnoPorNombre(nombre){
        var listaAux = this.listaAlumnosGrupo

        for (let i=0; i < listaAux.length; i++){

            if (nombre === listaAux[i].name){
                return listaAux[i]
            }
        }
        return -1

    }

    buscarAlumnoPorApellido (apellido){
        var listaApe = this.listaAlumnosGrupo

        for (let i=0; i < listaApe.length; i++){

            if (apellido === listaApe[i].lastName){
                return listaApe[i]
            }
        }
        return "No se encontro en el grupo"
    }

    obtenerPromedioAlumno (nombre){

        
    }
    obtenerPromedioGrupo (){

    }
    ordenarListaAscendente(){

    }
    ordenarListaDescendente(){

    }

}

function buscarNombre (listaGrupo, nombre) {

}
function fillDropDownGrupos(grupos){
    grupos.innerHTML=""
    listaGrupos.listaGrupos.forEach(grp => {
        var opt = document.createElement("option")
        opt.text = grp.grupo
        opt.value = grp.grupo   
        grupos.appendChild(opt)
    })
}
function encontrarGrupo(grupoAsignado) {
    for (let i=0; i < listaGrupos.listaGrupos.length; i++){
        if (listaGrupos.listaGrupos[i].grupo==grupoAsignado){
            return i
        }
    }
    return -1
}