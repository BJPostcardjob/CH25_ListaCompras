// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar")
let btnClear = document.getElementById("btnClear")

let alertaValidaciones = document.getElementById("alertaValidacionestexto")
let btnValidaciones = document.getElementById("alertValidaciones")

// Limpiar campos
btnAgregar.addEventListener("click", function(event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML = "";
    alertaValidacionesTexto.style.display = "none";
    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
    if (txtNombre.value.length == 0) {
        txtNombre.value = txtNombre.value.trim();
        if (txtNombre.value.length == 0) {
            txtNombre.style.border = "solid thin red";
            lista += "<li>se debe escribir un nombre valido</li>"
            alertaValidacionesTexto.innerHTML = "Se debe escribir un nombre valido";
            alertaValidaciones.style.display = "block";
        } else {
            txtNombre.style.border = "";
        }

        }//if txtNombre

    if (txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        lista += "<li>se debe escribir un nombre validos</li>"
        alertaValidaciones.style.display="block";
    }else{
        txtNumber.style.border="";
        }//if txtNumber
        lista += "</ul>";
        alertaValidacionesTexto.insertAdjacentHTML("beforeend",lista);
});      //btnAgregar click

    txtNumber.addEventListener("blur", function(event){
        event.preventDefault();
        txtNombre.value = txtNombre.value.trim();

});//txtNumber.blur

    txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});//txtNombre.blur