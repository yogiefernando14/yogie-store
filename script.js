const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

if(menuBtn){

menuBtn.addEventListener("click", () => {

sidebar.classList.add("active");

});

}

if(closeBtn){

closeBtn.addEventListener("click", () => {

sidebar.classList.remove("active");

});

}

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

addCartBtn.addEventListener("click",()=>{

if(selectedSize === ""){

alert("Pilih size terlebih dahulu");

return;

}

const productName =

document.querySelector(".product-info h1").innerText;

const productPrice =

document.querySelector(".product-price").innerText;

const product = {

name: productName,

price: productPrice,

size: selectedSize,

qty: qty

};

console.log("PRODUCT =", product);

alert("MASUK ADD CART");

let cart =

JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

console.log("CART =", cart);
alert(JSON.stringify(cart));
  
let totalQty = 0;

cart.forEach(item,index) => {

totalQty += item.qty;

});

localStorage.setItem(
"cartTotal",
totalQty
);

const cartBadge =

document.getElementById("cartCount");

if(cartBadge){

cartBadge.innerText = totalQty;

}

window.location.href = "cart.html";

});

}
const cartCount = document.getElementById("cartCount");

let total = localStorage.getItem("cartTotal") || 0;

if(cartCount){
cartCount.innerText = total;
}

let qty = 1;

const qtyValue = document.getElementById("qtyValue");
const plusBtn = document.getElementById("plusQty");
const minusBtn = document.getElementById("minusQty");

if (plusBtn) {
  plusBtn.addEventListener("click", () => {
    qty++;
    qtyValue.textContent = qty;
  });
}

if (minusBtn) {
  minusBtn.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      qtyValue.textContent = qty;
    }
  });
}

window.addEventListener("load",()=>{

const badge =
document.getElementById("cartCount");

const total =
localStorage.getItem("cartTotal") || 0;

if(badge){

badge.innerText = total;

}

});

const cartItems =
document.getElementById("cartItems");

if(cartItems){

const cart =
JSON.parse(localStorage.getItem("cart")) || [];

console.log("CART PAGE LOAD");
console.log(cart);

let grandTotalValue = 0;

cartItems.innerHTML += `

<div class="cart-card">

<h3>${item.name}</h3>

<p>Size : ${item.size}</p>

<p>Qty : ${item.qty}</p>

<p>${item.price}</p>

<button onclick="removeItem(${index})" class="remove-btn">
REMOVE
</button>

</div>

`;

});

const grandTotal =
document.getElementById("grandTotal");

if(grandTotal){

grandTotal.innerText =
"IDR " +
grandTotalValue.toLocaleString("id-ID");

}

}
