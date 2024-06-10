const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

function showDiv() {
    var x = document.getElementById("ticket");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function closeDiv() {
    var x = document.getElementById("ticket");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function addToCart(button) {
    let cartItemsCount = document.getElementById('ticket-items');
    let currentCount = parseInt(cartItemsCount.innerText);
    currentCount++;
    cartItemsCount.innerText = currentCount;
    
    const item = button.parentElement;
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseFloat(item.getAttribute('data-price'));
    const itemImg = item.getAttribute('data-img');

    const cartItems = document.getElementById('ticket-items-list');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <img src="${itemImg}" alt="${itemName}">
        <span>${itemName}</span> - $<span>${itemPrice}</span>
    `;
    cartItems.appendChild(cartItem);

    let totalPrice = document.getElementById('total-price');
    let currentPrice = parseFloat(totalPrice.innerText);
    currentPrice += itemPrice;
    totalPrice.innerText = currentPrice.toFixed(2);
}