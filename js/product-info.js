let catID= localStorage.getItem("catID");
console.log();


getJSONData(PRODUCT_INFO_URL + catID + EXT_TYPE).then(function (resultObj){
    console.log(resultObj);
    if(resultObj.status == "ok"){
        let elemento = resultObj.data;
        let htmlContentToAppend = "";
        htmlContentToAppend+=`
        <div onclick="setCatID(${elemento.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
             <p class="mb-1"> USD: ${elemento.cost}</p>
                <div class="col-3">
                    <img src="${elemento.images[0]}" alt="${elemento.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${elemento.name}</h4>
                    </div>
                    <p class="mb-1">${elemento.description}</p><p class="mb-1"> Vendidos: ${elemento.soldCount} </p>
                    
                </div>
            </div>
           
        </div>
        
        `;

    document.getElementById("infoProductos").innerHTML = htmlContentToAppend;
}
});
getJSONData(PRODUCT_INFO_COMMENTS_URL + catID + EXT_TYPE).then(function (resultObj) {
    console.log(resultObj)
    if (resultObj.status == "ok") {
         let comments = resultObj.data;
         let htmlContentToAppend = '';
         if (comments.length > 0) {
             comments.forEach(function (comment) {
                 let productScore = comment.score;
                 let score = ''
                 for (let i = 1; i <= productScore; i++) {
                     score += '<i class="far fa-star checked"></i>';
                 }
                 for (let i = productScore + 1; i <= 5; i++) {
                     score += '<i class="far fa-star"></i>'
                 }
                 htmlContentToAppend += `
                 <li class= "media border list-group-item">
                     <div class="media-body">
                         <label class= "mt-0"><strong>${comment.user}</strong>
                         <span class="mute"> - ${comment.dateTime}</span>
                         <span> - ${score}</span>
                         </label>
                         <br>
                         <label class="small">${comment.description}</label>
                 </div>
                 </li>
                 `;
             });
             document.getElementById("comentariosProducto").innerHTML = htmlContentToAppend;
         }
     }
 })
 function guardarComentario(){
 let comentarioTexto = document.getElementById("comentarioTexto").value
 let comentarioScore = document.getElementById("comentarioScore").value
 let fecha = new Date()
 let usuario = localStorage.usuario
 console.log(comentarioTexto,comentarioScore,usuario)
 let productScore = comentarioScore;
 let score = ''
 for (let i = 1; i <= productScore; i++) {
     score += '<i class="far fa-star checked"></i>';
 }
 for (let i = productScore + 1; i <= 5; i++) {
     score += '<i class="far fa-star"></i>'
 }
 let html =document.getElementById("comentariosProducto").innerHTML
 html+=`
 <li class= "media border list-group-item">
     <div class="media-body">
         <label class= "mt-0"><strong>${usuario}</strong>
         <span class="mute"> - ${fecha.getDay()} ${fecha.getMonth()} ${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()} </span>
         <span> - ${score}</span>
         </label>
         <br>
         <label class="small">${comentarioTexto}</label>
 </div>
 </li>
 `;
 document.getElementById("comentariosProducto").innerHTML = html;
 }
 
