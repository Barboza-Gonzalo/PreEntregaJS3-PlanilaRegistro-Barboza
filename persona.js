function Persona (nombre , edad , dni , nacionalidad){
    this.nombre = nombre ;
    this.edad = edad ;
    this.dni = dni ;
    this.nacionalidad = nacionalidad ;
}



function agregarPersona (){
    let personaNueva = new Persona (personaNombre.value,+personaEdad.value,personaDni.value,personaNacionalidad.value);
    
    planillaGeneral.push (personaNueva);
    
    };





