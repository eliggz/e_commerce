let nombre = document.getElementById("nombre")
let nombre2 = document.getElementById("nombre2")
let apellido = document.getElementById("apellido")
let apellido2 = document.getElementById("apellido2")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let btnGuardar = document.getElementById("btnGuardar")
let btnEditar = document.getElementById("btnEditar")




if (localStorage.getItem("email") == null) {
  window.alert("Para ingresar a tu perfil, primero necesitas ingresar con una cuenta.");
  window.history.back();
}

document.getElementById("nombreDeUser").innerHTML = localStorage.nombre + " " + localStorage.apellido

btnEditar.addEventListener("click", function () {


  btnGuardar.classList.remove("disabled")

  nombre.disabled = false;
  nombre2.disabled = false;
  apellido.disabled = false;
  apellido2.disabled = false;
  email.disabled = false;
  telefono.disabled = false;





});

nombre.classList.remove("valid")
nombre.classList.remove("invalid")
apellido.classList.remove("valid")
apellido.classList.remove("invalid")
email.classList.remove("valid")
email.classList.remove("invalid")
telefono.classList.remove("valid")
telefono.classList.remove("invalid")
let nombreUsuario = ""
let nombre2Usuario = ""
let apellidoUsuario = ""
let apellido2Usuario = ""
let emailUsuario = ""
let telUsuario = ""
const form = document.getElementById("perfilForm");
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!nombre.value != '') {
    nombre.classList.add("invalid")
  }
  if (!apellido.value != '') {
    apellido.classList.add("invalid")
  }
  if (!email.value != '') {
    email.classList.add("invalid")
  }
  if (!telefono.value != '') {
    email.classList.add("invalid")
  }

  localStorage.setItem("nombre", nombre.value);
  localStorage.setItem("segundo nombre", nombre2.value);
  localStorage.setItem("apellido", apellido.value);
  localStorage.setItem("segundo apellido", apellido2.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("telefono", telefono.value);






  nombre.disabled = true;
  nombre2.disabled = true;
  apellido.disabled = true;
  apellido2.disabled = true;
  email.disabled = true;
  telefono.disabled = true;
  console.log('Form submited.');
  nombre.classList.remove("invalid")
  apellido.classList.remove("invalid")
  email.classList.remove("invalid")
  telefono.classList.remove("invalid")
});
let usuario = { 'nombre': "", 'segundo nombre': "", 'apellido': "", 'segundo apellido': "", 'email': "", 'telefono': "" }
usuario["nombre"] = localStorage.getItem("nombre")
usuario["segundo nombre"] = localStorage.getItem("segundo nombre")
usuario["apellido"] = localStorage.getItem("apellido")
usuario["segundo apellido"] = localStorage.getItem("segundo apellido")
usuario["email"] = localStorage.getItem("email")
usuario["telefono"] = localStorage.getItem("telefono")




document.getElementById("nombre").value = localStorage.getItem("nombre")
document.getElementById("nombre2").value = localStorage.getItem("segundo nombre")
document.getElementById("apellido").value = localStorage.getItem("apellido")
document.getElementById("apellido2").value = localStorage.getItem("segundo apellido")
document.getElementById("email").value = localStorage.getItem("email")
document.getElementById("telefono").value = localStorage.getItem("telefono")





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







