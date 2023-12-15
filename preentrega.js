const SI = 'si';
const NO = 'no';
const INICIAL = 18;
const FINAL = 100;

let nombre;
let edad;
let dni;
let nacionalidad;




let planillaGeneral = [];



const personaNombre = document.getElementById('nombre');
const personaEdad = document.getElementById('edad');
const personaDni = document.getElementById('dni');
const personaNacionalidad = document.getElementById('nacionalidad');
const clave = document.getElementById('palabraClave');
const boton = document.querySelector('#registrar');
const limpiarPlanilla = document.querySelector('#vaciar');
const registro = document.querySelector('#registroForm');
const consulta = document.querySelector('#consultar');
const buscar = document.querySelector('#buscador');
const menores = document.querySelector('#MenMa');
const mayores = document.querySelector('#ManMe');







boton.addEventListener('click', () => {
    agregarPersona();
    guardarPlanilla()
    limpiarForm(registro);
});


vaciar.addEventListener('click', () => {
    continuar = prompt('Esta por borrar todo regristro de la planilla. Desea continuar ? Si / No');
    continuar === SI ? localStorage.clear() : alert('NO se borrara registro')
}
);




consulta.addEventListener('click', () => {
    traerPlanilla();
    dibujarPlanilla();
})



menores.addEventListener('click', () => {
    traerPlanilla();
    const menorEdad = planillaGeneral.filter((Persona) => { return Persona.edad < INICIAL });
    const vistaPlanilla = document.getElementById("items");
    vistaPlanilla.innerHTML = '';
    menorEdad.forEach((indiv) => {
        vistaPlanilla.innerHTML = vistaPlanilla.innerHTML +
            `<tr>
                    <td>${indiv.nombre}</td>
                    <td>${indiv.dni}</td>
                    <td>${indiv.edad}</td>
                    <td>${indiv.nacionalidad}</td>
                    </tr>    
                    `;
    })
});


mayores.addEventListener('click', () => {
    traerPlanilla();
    const mayorEdad = planillaGeneral.filter((Persona) => { return Persona.edad >= INICIAL && Persona.edad <= FINAL });
    const vistaPlanilla = document.getElementById("items");
    vistaPlanilla.innerHTML = '';
    mayorEdad.forEach((indiv) => {
        vistaPlanilla.innerHTML = vistaPlanilla.innerHTML +
            `<tr>
                        <td>${indiv.nombre}</td>
                        <td>${indiv.dni}</td>
                        <td>${indiv.edad}</td>
                        <td>${indiv.nacionalidad}</td>
                        </tr>    
                        `;
    })
});




buscar.addEventListener('click', () => {
    traerPlanilla();
    const filClave = planillaGeneral.filter((Persona) => { return Persona.nacionalidad.includes(clave.value) || Persona.nombre.includes(clave.value) });
    const vistaPlanilla = document.getElementById("items");
    vistaPlanilla.innerHTML = '';
    filClave.forEach((indiv) => {
        vistaPlanilla.innerHTML = vistaPlanilla.innerHTML +
            `<tr>
                        <td>${indiv.nombre}</td>
                        <td>${indiv.dni}</td>
                        <td>${indiv.edad}</td>
                        <td>${indiv.nacionalidad}</td>
                        </tr>    
                        `;
    })
});

