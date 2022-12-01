
function manejarSubmit(event){
    event.preventDefault();
    let contrasena=document.getElementById("contraseña");
    let correo=document.getElementById("correo");
   
    

    if (contrasena.value != '' && correo.value != '') {
        window.open("/home.html","_self");
     localStorage.setItem("email",correo.value)
     usuario.email = localStorage.getItem("email")
     
    }
    else if (contrasena.value != "") {
        alert("Se necesitan llenar los siguientes campos:\n e-mail");
    }
    else if (correo.value != ""){
        alert("Se necesitan llenar los siguientes campos:\n contraseña");
    }
    else {
        alert("Se necesitan llenar los siguientes campos:\n e-mail \ncontraseña")
    }
}
function accesoGoogle(){
    window.open("/home.html","_self");
}

