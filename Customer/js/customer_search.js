// out
// const resIsbn = document.querySelector("#resIsbn");
// const resName = document.querySelector("#resName");
// const resWriter = document.querySelector("#resWriter");
// const resPrice = document.querySelector("#resPrice");
// const resStock = document.querySelector("#resStock");


// TypeSearch
const typeInput = document.querySelector("#typeInput");
const typeBtn = document.querySelector("#typeBtn");

typeBtn.addEventListener("click", function(){
    let body = {
        "type": typeInput.value
    }

    fetch("http://localhost:8080/find_book", {
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
        console.log("11")
        const list = [];
        const text = "";

        if(data[0].message === "輸入資料不得為空"){
            alert(data[0].message);
        }
        else{
            data.forEach(function(i){
                console.log(i)
                console.log(i.isbn)
                // list.push(i.isbn);
                // console.log(list)
                // text = `<li>${i.isbn}</li>`;
                // console.log(text)
            })
        }
    })
    .catch(function(error){

    })
})


// Search



