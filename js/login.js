function manejarSubmit(event){
    event.preventDefault();
    const contrasena=document.getElementById("contraseña").value;
    const correo=document.getElementById("correo").value;
    if (contrasena != "" && correo != "") {
        window.open("https://eliggz.github.io/home.html","_self");
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
