let nombre = document.getElementById("nombre")
let nombre2 = document.getElementById("nombre2")
let apellido = document.getElementById("apellido")
let apellido2 = document.getElementById("apellido2")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let btnGuardar = document.getElementById("btnGuardar")
let btnEditar = document.getElementById("btnEditar")
let nombreUsuario = ""
let nombre2Usuario = ""
let apellidoUsuario = ""
let apellido2Usuario = ""
let emailUsuario = ""
let telUsuario = ""
let usuario = { 'nombre': "", 'segundo nombre': "", 'apellido': "", 'segundo apellido': "", 'email': "", 'telefono': "" }
const registerForm = document.getElementById("registerForm"); 

if (localStorage.getItem("email") == null) {
  window.alert("Para ingresar a tu perfil, primero necesitas ingresar con una cuenta.");
  window.history.back();
}





btnEditar.addEventListener("click", function () {
  btnGuardar.classList.remove("disabled")
  nombre.disabled = false;
  nombre2.disabled = false;
  apellido.disabled = false;
  apellido2.disabled = false;
  email.disabled = false;
  telefono.disabled = false;
});


(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
      .forEach(function (form) {
          form.addEventListener('submit', function (event) {

              if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
              }

              form.classList.add('was-validated')
          }, false)
      })
})()


function formSubmit() {
  if (registerForm.checkValidity() == true) {
     localStorage.setItem("nombre",nombre.value)
     localStorage.setItem("segundo nombre",nombre2.value)
     localStorage.setItem("apellido",apellido.value)
     localStorage.setItem("segundo apellido",apellido2.value)
     localStorage.setItem("email",email.value)
     localStorage.setItem("telefono",telefono.value)
  }
}



  document.getElementById("nombre").value = localStorage.getItem("nombre")
document.getElementById("nombre2").value = localStorage.getItem("segundo nombre")
document.getElementById("apellido").value = localStorage.getItem("apellido")
document.getElementById("apellido2").value = localStorage.getItem("segundo apellido")
document.getElementById("email").value = localStorage.getItem("email")
document.getElementById("telefono").value = localStorage.getItem("telefono")

usuario["nombre"] = nombreUsuario
usuario["segundo nombre"] = nombre2Usuario
usuario["apellido"] = apellidoUsuario
usuario["segundo apellido"] = apellido2Usuario
usuario["email"] = emailUsuario
usuario["telefono"] = telUsuario









const display_image = document.getElementById("display_image")
const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;

  });
  reader.readAsDataURL(this.files[0]);
});







