let carrito=[];
let inputCantidad= document.getElementById("inputCantidad");
let subtotal = 0;





fetch('https://japceibal.github.io/emercado-api/cats_products/101.json  ').then((Response) => {
    return Response.json()
 }).then((data) => {   
   
    html=''
    
      console.log(subtotal)
      
            html+=`
            <div>
            <ul class="list-group">
            <li class="list-group-item d-inline-flex"><img class="img-thumbnail" src=${data.products[3].image}> <p class="mb-2"> ${data.products[3].name} </p><p class="mb-2"> ${data.products[3].cost} <form>
            <input class="col-lg-*" id="inputCantidad" type="input"></input>
            </form> </p></li>      
           
            </ul>
            </div>
            
            `
            


        document.getElementById("containerCart").innerHTML = html;
       
    });
   





