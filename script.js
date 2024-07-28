var popupadd = document.getElementById("addpopup")
var popup = document.querySelector(".popup")
var overlay = document.querySelector(".overlay")

popupadd.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
})

// function addpop(){
//     popup.style.display="block"
//     overlay.style.display="block"
// }

// Select cancel button,so it wont close popup by default

var cancelbutton = document.getElementById("cancel-book")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    overlay.style.display="none"
})

var addbook = document.getElementById("add-book")
var container = document.querySelector(".container")
var bookinput = document.getElementById("book-input")
var authorinput = document.getElementById("author-input")
var desinput = document.getElementById("des-input")

addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div = document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${bookinput.value}</h2>
            <h3>${authorinput.value}</h3>
            <p>${desinput.value}</p>
            <button id="dlt" onclick="deletebook(event)">Delete</button>`
        container.append(div)
        popup.style.display="none"
        overlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}