let html='';




function calcularEnvio(){
  let envio = document.querySelector("input[name=publicationType]:checked").value
    total = subtotal+(subtotal*(envio/100))
document.getElementById("subtotal1").innerHTML = subtotal
document.getElementById("costoenvio").innerHTML = Math.round((subtotal*(envio/100))) 
document.getElementById("total").innerHTML = total

}




function calcularPrecios(productIndex){
  let cantidad = document.getElementById("cantidad").value
  console.log(cantidad)
  let subtotalhtml = document.getElementById("subtotal")
  console.log(subtotal)
  let costo = data.products[productIndex].cost
  console.log(costo)
  subtotal = cantidad*costo
  subtotalhtml.innerHTML = subtotal
 }

 let data = []
 let subtotal = 0
 let total = 0

 

 /* function seleccionPago(){
  let campo1 = document.getElementById("radioTarjeta")
  let campo2 = document.getElementById("radioTransferencia")
let campo3 = document.getElementById("inputTarjeta")
 let campo4 = document.getElementById("inputCodigo")
 let campo5 = document.getElementById("inputVto")

 if(radioTarjeta.checked){
  console.log("hola")
  campo3.removeAttribute("inputTarjeta", "readonly")
}
 }
 */



















 getJSONData('https://japceibal.github.io/emercado-api/cats_products/101.json').then(function (resultObj) {
  console.log(resultObj)
  if (resultObj.status == "ok") {
        data = resultObj.data;
       let html = ''; 
               html += `  
            <table class="table">
  <thead>
    <tr class= "text-primary">
    <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td class="table__productos">
     <img  src="${data.products[3].image}">
      </td>
      <td class="table__nombre">
      <h5 id="nombre">${data.products[3].name}</h5>
       </td>
      <td class="table__costo">
      <p>USD ${data.products[3].cost}</p>
      </td>
      <td class="table__cantidad">

      <input id="cantidad" type="number" onblur="calcularPrecios(3)" value="1">
    
      </td>
      <td id="subtotal">
     
      </td>
    </tr>
  </tbody>
</table>

<br> 
            
            ` 
            
            


    document.getElementById("containerCart").innerHTML = html;
       }
 });

   
    