
// Add_Book
const set_btn = document.querySelector(".set_btn");

set_btn.addEventListener("click", function(){

    const name = document.querySelector("#inputName");
    const isbn = document.querySelector("#inputIsbn");
    const writer = document.querySelector("#inputWriter");
    const price = document.querySelector("#inputPrice");
    const stock = document.querySelector("#inputStock");
    const type = document.querySelector("#inputType");
    const sales = document.querySelector("#inputSales");

    let body = {
        "book_list":[{
            "name": name.value,
            "isbn": isbn.value,
            "writer": writer.value,
            "price": +price.value,
            "stock": +stock.value,
            "sales": +sales.value,
            "type": type.value
            }]
    }
    fetch("http://localhost:8080/set_book", {
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
        console.log(data.message);
        alert(data.message);
    })
    .catch(function(error){

    })
    
})
