function manejarSubmit(event){
    event.preventDefault();
    const contrasena=document.getElementById("contraseña").value;
    const usuario=document.getElementById("correo").value;
   
    if (contrasena != "" && usuario != "") {
        window.open("https://eliggz.github.io/mercado.github.io/home","_self");
       localStorage.usuario = usuario
    }
    else if (contrasena != "") {
        alert("Se necesitan llenar los siguientes campos:\n e-mail");
    }
    else if (correo != ""){
        alert("Se necesitan llenar los siguientes campos:\n contraseña");
    }
    else {
        alert("Se necesitan llenar los siguientes campos:\n e-mail \ncontraseña")
    }
}
function accesoGoogle(){
    window.open("/home.html","_self");
}
