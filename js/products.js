let lista_productos = [];
function mostrarListado(){
console.log(lista_productos)
  let htmlContentToAppend = "";
  console.log(lista_productos.products)
  lista_productos.products.map(elemento => {
    htmlContentToAppend += `
      <div onclick="setCatID(${elemento.id})" class="list-group-item list-group-item-action cursor-active">
          <div class="row">
           <p class="mb-1"> USD: ${elemento.cost}</p>
              <div class="col-3">
                  <img src="${elemento.image}" alt="${elemento.description}" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${elemento.name}</h4>
                  </div>
                  <p class="mb-1">${elemento.description}</p><p class="mb-1"> Vendidos: ${elemento.soldCount} </p>
                  
              </div>
          </div>
         
      </div>
      
      `
  })
 
      document.getElementById("listado_productos").innerHTML = htmlContentToAppend;
  }
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCTS_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          lista_productos = resultObj.data
          mostrarListado()
      }
  });

});
