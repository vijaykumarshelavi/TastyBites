/****************** language********************/
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
/******************End language********************/

 /****************** hambarger hide show ********************/
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }
 /****************** END hambarger hide show ********************/


 /****************** ADD CART SECTION ********************/
const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

 /****************** OPEN ADD CART ********************/
btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

 /****************** CLOSE ADD CART ********************/
btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
 
  let btnRemove=document.querySelectorAll('#cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });


  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });


  
  let cartBtns=document.querySelectorAll('#add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();

}



function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];


function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.food-price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;

 
 let newProduct={title,price,imgSrc}

 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }


let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <div class="quantity">Quantity:<input type="number" value="1" class="cart-quantity">
    Time:
    <select class="time"> 
    <option>10min</option>
    <option>15min</option>
    <option>20min</option>
    <option>25min</option>
    </select>
    </div>
    </div>
    <i class="fa-solid fa-trash" id="cart-remove"></i>
 
 
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;





  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}
function updateTotale()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const descValues=document.getElementById('amount');


  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);

    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
  
  });
  descValues.innerHTML='Rs.'+total;
}

// Tabs
function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  

  document.getElementById("defaultOpen").click();


/**************************loding ***************/

  setTimeout(function() {
    document.querySelector('.loading-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 2000);


  setTimeout(function() {
    location.reload();
  }, 10000000);
     /****************** CHATBOT ********************/
   
	   window.watsonAssistantChatOptions = {
      integrationID: "92e7d3ed-9a24-4851-9541-69a67dcea373", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "13ac3769-9f22-4310-8354-77c21249fa4f", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
      };
      setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
      });
       /****************** END CHATBOT ********************/