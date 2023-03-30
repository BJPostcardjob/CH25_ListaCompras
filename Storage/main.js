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