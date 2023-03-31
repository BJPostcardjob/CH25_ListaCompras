// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertaValidaciones = document.getElementById("alertaValidacionesTexto");
let btnValidaciones = document.getElementById("alertValidaciones");

let tabla = document.getElementById ("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let isValid = true;
let idTimeout; 
let precio = 0;
let contador = 0;
let totalEnProductos = 0;
let costoTotal = 0;

let datos = []; // aqui se alamacenan datos de la tabla

let resumen = `{"contadorProductos" : ${contador},
                "totalEnProductos"  : ${totalEnProductos},
                "costoTotal"        : ${costoTotal.toFixed(2)}}`;
localStorage.setItem ("resumen", resumen) ;
        //localStorage.setItem("contadorProductos", contador);
        //localStorage.setItem("contadorProductos", contador);        
        //localStorage.setItem("contadorProductos", contador);
        txtNombre.value="";
        txtNumber.value="";
        txtNombre.focus();
    // if Valid
;
// btnAgregar click

// Limpiar campos
btnClear.addEventListener("click", function (event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
    cuerpoTabla[0].innerHTML="";

    contador = 0;
    totalEnProductos = 0;
    costoTotal = 0;
    contadorProductos.innerText = "0";
    productosTotal.innerText = "0";
    precioTotal.innerText = "$ 0";

    localStorage.setItem("contadorProductos",contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));

});//click btnClear

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
        }//if

        if (isNaN(txtNumber.value)){
            return false;
        }

        if (parseFloat(txtNumber.value)<=0){
            return false;
        }//if

        return true;

}//validarCantidad

function getPrecio() {
    return Math.floor(Math.random() * 50 * 100) / 100;
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

    if (! validarCantidad()){
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
                        <td>${txtNumber.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                    </tr>`;
               
        let elemento =   `{
                                   "id": ${contador}
                              "nombre"$: ${txtNumber.value}
                            "cantidad" :${txtNumber.value}
                              "precio" :${precio}
                            }`;
    
        datos.push( JSON.parte(elemento));

        localStorage.setItem("datos", JSON.stringify(datos) );

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
        localStorage.setItem("contadorProductos", "0");
    } //if
    let res = JSON.parse (localStorage.getItem("resumen"));
    if (this.localStorage.getItem("Datos")== null) {
        datos= JSON.parse (localStorage.getItem("Datos"));

        datos.forEach(r =>{
             
            let row =   `<tr>
            <td>${r. id}</td>
            <td>${r.nombre}</td>
            <td>${r.cantidad}</td>
            <td>${r.precio}</td>
        </tr>`;
                cuerpoTabla[0].insertAdjacentHTML("beforeend", ron);

        });

    }; // !-null
    // if (localStorage.getItem("totalEnProductos")==null){
    //    localStorage.setItem("totalEnProductos", "0");
    // }//if

    // if (localStorage.getItem("costoTotal")==null){
    //  localStorage.setItem("costoTotal", "0");
    // }//if
       contador= res.contadorProductos; //(localStorage.getItem("contadorProductos"));
       totalEnProductos = res.totalEnProductos; // (localStorage.getItem("totalEnProductos"));
       costoTotal = res.costoTotal; //(localStorage.getItem("costoTotal"));

        contadorProductos.innerText=contador;
        productosTotal.innerText=totalEnProductos;
        precioTotal.innerText= `$ ${costoTotal.toFixed(2)}`;

    }); 


/*
localStorage - Almacena Información en el navegador, y se mantiene aunque
                el navegador se cierre

sessionStorage - Almacena información en el navegador, y se pierde cuando 
                el navegador se cierra 


                local vs session (Sorage)
    El tiempo   que la información es almacenada

*/

/*




*/



let btnGuardar = document.getElementById("btnGuardar");
let btnVer = document.getElementById("btnVer");
let btnBorrar = document.getElementById("btnBorrar");
let txtData= document.getElementById("data");
let alertResultado = document.getElementById("alertResultado");
let key = "info";

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    //localStorage API
    if (txtData.value.trim() === "") {
        alert("Por favor, ingrese algún valor");
        return;
    }
    localStorage.setItem("info", txtData.value);
    localStorage.setItem("info", txtData.value);
    //localStorage.setItem(key, txtData.value);
    sessionStorage.setItem(key, txtData.value);
    //aditamento extra texto conf
    if (txtData.value.trim() === "") {
        alert("Por favor, ingrese algún valor");
        return;
    }
    localStorage.setItem("info", txtData.value);
    if (txtData.value.trim() === "") {
        alertResultado.classList.remove("alert-success");
        alertResultado.classList.add("alert-danger");
        alertResultado.innerText = "El campo no puede estar vacío.";
    } else {
        localStorage.setItem(key, txtData.value.trim());
        alertResultado.classList.remove("alert-danger");
        alertResultado.classList.add("alert-success");
        alertResultado.innerText = "Datos guardados correctamente.";
    }
});

btnVer.addEventListener("click", function(event){
    event.preventDefault();
    alertResultado.innerText = localStorage.getItem(key);
    //aditamento extra texto conf
    let data = localStorage.getItem(key);
    if (!data) {
        alertResultado.classList.remove("alert-success");
        alertResultado.classList.add("alert-warning");
        alertResultado.innerText = "No hay datos almacenados.";
    } else {
        alertResultado.classList.remove("alert-danger");
        alertResultado.classList.add("alert-success");
        alertResultado.innerText = data;
    }
});

btnBorrar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem(key);
    txtData.value = "";
    alertResultado.classList.remove("alert-danger");
    alertResultado.classList.add("alert-success");
    alertResultado.innerText = "Datos borrados correctamente.";
});

// Manejo de errores
if (typeof(Storage) === "undefined") {
    alertResultado.classList.remove("alert-success");
    alertResultado.classList.add("alert-danger");
    alertResultado.innerText = "Lo siento, su navegador no soporta el almacenamiento local.";
}