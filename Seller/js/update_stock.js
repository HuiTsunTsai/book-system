
// Updata_Stock
const isbn = document.querySelector("#update_isbn");
const stock = document.querySelector("#update_stock");
const updateBtn = document.querySelector("#updateBtn");

const resIsbn = document.querySelector("#resIsbn");
const resName = document.querySelector("#resName");
const resWriter = document.querySelector("#resWriter");
const resPrice = document.querySelector("#resPrice");
const resStock = document.querySelector("#resStock");


updateBtn.addEventListener("click", function(){
    let body = {
        "isbn": isbn.value,
        "stock": stock.value
    }
    fetch("http://localhost:8080/update_book_stock", {
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
        console.log(data[0].message);

        if(data[0].message === "輸入資料不得為空" || data[0].message === "無此書籍" || data[0].message === "輸入資料錯誤"){
            alert(data[0].message);
        }else{
            resIsbn.innerHTML = data[0].isbn;
            resName.innerHTML = data[0].name;
            resWriter.innerHTML = data[0].writer;
            resPrice.innerHTML = data[0].price;
            resStock.innerHTML = data[0].stock;
        }
        
    })
    .catch(function(error){

    })
})
