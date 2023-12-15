function dibujarPlanilla() {
    const vistaPlanilla = document.getElementById("items");
    vistaPlanilla.innerHTML = '';
    planillaGeneral.forEach((indiv) => {
        vistaPlanilla.innerHTML = vistaPlanilla.innerHTML +
            `<tr>
                <td>${indiv.nombre}</td>
                <td>${indiv.dni}</td>
                <td>${indiv.edad}</td>
                <td>${indiv.nacionalidad}</td>
                </tr>    
                `;
    });
}


function limpiarForm(formulario) {
    formulario.reset();
};




function guardarPlanilla() {
    localStorage.setItem('planilla', JSON.stringify(planillaGeneral));
};


function traerPlanilla() {
    planillaGeneral = JSON.parse(localStorage.getItem('planilla'));
};