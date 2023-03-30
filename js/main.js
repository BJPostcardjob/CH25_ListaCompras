// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertaValidaciones = document.getElementById("alertaValidacionestexto");
let btnValidaciones = document.getElementById("alertValidaciones");

let tabla = document.getElementByYd ("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let idValid = true;
let idTimeout; 
let precio = 0;
let contador = 0;
let totalEnProductos = 0;
let costoTotal = 0;

// Limpiar campos
btnClear.addEventListener("click", function (event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
    cuerpoTabla[0].innerHTML="";

    contador = 0;
    totalEnProductos = 0;
    costoTotal = 0;
    contadorProductos.innertext = "0";
    productosTotal.innerText = "0";
    precioTotal.innerText = "$ 0";

    localStorage.setItem("contadorProductos",contador);
    localStorage.setItem("totalEnProdcutos", totalEnProdcutos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));

});//click btnClear

function validarCanntidad(){
    if (txtNumber.value.length==0){
        return false;
        }//if

        if (isNaN(txtNumber.value)){
            returnfalse;
        }

        if (parsefloat(txtNumber.value)<=0){
            return false;
        }//if

        return true;

}//validarCantidad

function getPrecio(){
    Math.floor(Math,random()* 50 * 100) /100;
}// get precio


btnAgregar.addEventListener("click", function(event) {
    event.preventDefault();
    clearTimeout(idTimeout);
    console.log(getPrecio());
    alertValidacionesTexto.innerHTML = "";
    alertaValidacionesTexto.style.display = "none";
    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
    if (txtNombre.value.length <=2) {
        txtNombre.value = txtNombre.value.trim();
        if (txtNombre.value.length == 0) {
            txtNombre.style.border = "solid thin red";
            lista += "<li>se debe escribir un nombre valido</li>"
            alertaValidacionesTexto.innerHTML = "Se debe escribir un nombre valido";
            alertaValidaciones.style.display = "block";
            isValid = false;
        } else {
            txtNombre.style.border = "";
        }

        }//if txtNombre

    if (! validarCanntidad()){
        txtNumber.style.border="solid thin red";
        lista += "<li>se debe escribir un nombre validos</li>"
        alertaValidaciones.style.display="block";
        isValid = false;
    }else{
        txtNumber.style.border="";
        }//if txtNumber
        lista += "</ul>";
        alertaValidacionesTexto.insertAdjacentHTML("beforeend",lista);
        idTimeout=setTimeout (function(){
            alertValidaciones.style.display="none";
        }, 3000);
        if (isValid){
        precio = getPrecio();
        contador ++;
        let row =   `<tr>
                        <td>${contador}</td>
                        <td>${txtNombre.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                    </tr>`;

        //LimpiarCamposTabla
        cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText=contador;
        totalEnProductos += parseFloat(txtNumber.value);
        productosTotal.innerText=totalEnProductos;
        costoTotal += precio * parseFloat (txtNombre.value);
        precioTotal.innerText= `$ ${costoTotal.toFixed(2)}`;
        localStorage.setItem("contadorProductos",contador);
        localStorage.setItem("totalEnProductos",totalEnProductos);
        localStorage.setItem("costoTotal",costoTotal);
        txtNombre.value="";
        txtNumber.value="";
        txtNombre.focus();
    }//if isValid
});      //btnAgregar click

    txtNumber.addEventListener("blur", function(event){
        event.preventDefault();
        txtNombre.value = txtNombre.value.trim();

});//txtNumber.blur

    txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});//txtNombre.blur

window.addEventListener("load", function(event){
    if (localStorage.getItem("contadorProductos")==null){
        localStorage.getItem("contadorProductos", "0");
    }//if
    
    if (localStorage.getItem("totalEnProductos")==null){
        localStorage.getItem("totalEnProductos", "0");
    }//if

    if (localStorage.getItem("costoTotal")==null){
        localStorage.getItem("costoTotal", "0");
    }//if
    contador= parseInt(localStorage.getItem("contadorProductos"));
       totalEnProductos = parseInt(localStorage.getItem("totalEnProductos"));
       costoTotal = parseFloat(localStorage.getItem("costoTotal"));

        contadorProductos.innerText=contador;
        productosTotal.innerText=totalEnProductos;
        precioTotal.innerText= `$ ${costoTotal}`;

    }); 