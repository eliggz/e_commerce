let carrito=[];

let html='';



fetch('https://japceibal.github.io/emercado-api/cats_products/101.json  ').then((Response) => {
    return Response.json()
 }).then((data) => {   

    
      
            html+=`
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
      <h5>${data.products[3].name}</h5>
       </td>
      <td class="table__costo">
      <p>USD ${data.products[3].cost}</p>
      </td>
      <td class="table__cantidad">

      <input id="cantidad" type="number" value="1">
    
      </td>
      <td>Pendiente</td>
    </tr>
  </tbody>
</table>

<br> 
            
            ` 
            
            


        document.getElementById("containerCart").innerHTML = html;
       
    });
   
    
