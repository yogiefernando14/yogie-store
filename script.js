const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
sidebar.classList.remove("active");
});

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cartSidebar = document.getElementById("cartSidebar");

if(cartBtn){

cartBtn.addEventListener("click",()=>{

cartSidebar.classList.add("active");

});

}

if(closeCart){

closeCart.addEventListener("click",()=>{

cartSidebar.classList.remove("active");

});

}

const sizeButtons = document.querySelectorAll(".size-btn");

const addCartBtn = document.getElementById("addCartBtn");

let selectedSize = "";

sizeButtons.forEach(btn => {

btn.addEventListener("click", () => {

sizeButtons.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

selectedSize = btn.innerText;

});

});

if(addCartBtn){

addCartBtn.addEventListener("click", () => {

if(selectedSize === ""){

alert("Pilih size terlebih dahulu");

return;

}

localStorage.setItem("size", selectedSize);

window.location.href = "cart.html";

});

}

const cartCount = document.getElementById("cartCount");

let total = localStorage.getItem("cartTotal") || 0;

if(cartCount){
cartCount.innerText = total;
}
