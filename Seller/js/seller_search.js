
// BookSearch
const select = document.querySelector("#search_select");
const input = document.querySelector("#input");
const btn = document.querySelector("#search_btn");

const resIsbn = document.querySelector("#resIsbn");
const resName = document.querySelector("#resName");
const resWriter = document.querySelector("#resWriter");
const resPrice = document.querySelector("#resPrice");
const resStock = document.querySelector("#resStock");
const resSales = document.querySelector("#resSales");

btn.addEventListener("click", function(){
    let body = {
        "name": input.value,
        "isbn": input.value,
        "writer": input.value
    }
    fetch("http://localhost:8080/bookseller_find_book", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){

    })
})