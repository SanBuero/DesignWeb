let LIST_URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

//array donde se cargarán los datos recibidos:
let categoriesArray = [];


//función que realiza el fetch() a la url recibida y devuelve un objeto con los datos y el estado de la respuesta:
let getJSNData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
    console.log(array)
    let htmlContentToAppend = ""

    for(let i = 0; i < array.products.length; i++){ 
        let category = array.products[i];
        htmlContentToAppend += `
        <div class="row mb-2 p-2 shadow rounded">      
              <div class= "col-2">
                <img src="${category.image}" alt="any" class="img-fluid" " width="200px">
              </div>
              <div class= "col">
                <h4 class="blockquote">${category.name} - ${category.currency}${category.cost}</h4>
                <span class="-blockquote">${category.description}</span>
              </div>  
              <div class="col">
                <p>${category.soldCount} vendidos</p>
              </div>
        </div>
        `
        document.getElementById('container').innerHTML = htmlContentToAppend;
    }
}

/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/


document.addEventListener("DOMContentLoaded", function(e){
    getJSNData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});