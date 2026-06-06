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
