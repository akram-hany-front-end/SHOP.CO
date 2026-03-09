const range = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

range.addEventListener("input", () => {
  priceValue.textContent = "$ " + range.value;
});

const products = document.querySelectorAll(".single-product-card-style")
const pagination = document.getElementById("pagination")

const itemsPerPage = 10
let currentPage = 1

function showPage(page){

const totalPages = Math.ceil(products.length / itemsPerPage)

if(page < 1) page = 1
if(page > totalPages) page = totalPages

currentPage = page

let start = (page - 1) * itemsPerPage
let end = start + itemsPerPage

products.forEach((product,index)=>{

if(index >= start && index < end){
product.style.display = "block"
}else{
product.style.display = "none"
}

})

renderPagination()
}

function renderPagination(){

pagination.innerHTML=""

const totalPages = Math.ceil(products.length / itemsPerPage)


// Prev Button
let prev = document.createElement("button")
prev.innerText = "<<Prev"
prev.onclick = () => showPage(currentPage - 1)
pagination.appendChild(prev)


// Page Numbers
for(let i=1;i<=totalPages;i++){

let btn = document.createElement("button")

btn.innerText = i

if(i === currentPage){
btn.classList.add("active")
}

btn.onclick = () => showPage(i)

pagination.appendChild(btn)

}


// Next Button
let next = document.createElement("button")
next.innerText = "Next>>"
next.onclick = () => showPage(currentPage + 1)
pagination.appendChild(next)

}

showPage(1)