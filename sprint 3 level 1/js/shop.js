// If you have time, you can move this variable "products" to a ison or is file and load the data in this is. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (obiects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (obiects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cartList array
        if (i == id - 1) {
            cartList.push(products[i]);
            console.table(cartList);
        }
    }
    generateCart()
    calculateTotal()
}

// Exercise 2
function cleanCart() {
    cartList.splice(0, cartList.length);
    console.log('CartList: ' + cartList);
    cart.splice(0, cart.length);
    console.log('Cart: ' + cart);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //total = cartList.map(item => item.price).reduce((a, b) => a + b, 0);
    total = 0;
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        price = cart[i].subTotal;

        if (cart[i].subTotalWithDiscount != undefined) {
            price = cart[i].subTotalWithDiscount;
        }
        total += price;
    }
    
    console.log('Total price: ' + total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart.splice(0, cart.length);
    for (let i = 0; i < cartList.length; i++) {
        let index = cart.findIndex(cart => cart.id == cartList[i].id);

        if (index == -1) {
            let article = cartList[i];
            article.quantity = 1;
            article.subTotal = cartList[i].price;
            cart.push(cartList[i]);
        } else {
            let article = cart[index];
            article.quantity++;
            article.subTotal = article.price * article.quantity;
        }
        
    }
    applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let cookingOilPosition = cart.findIndex(cart => cart.name == 'cooking oil');
    let instantMixturePosition = cart.findIndex(cart => cart.name == 'Instant cupcake mixture');

    let cookingOil, instantMixture;
    cookingOil = cart[cookingOilPosition];
    instantMixture = cart[instantMixturePosition];

    if (cookingOilPosition != -1 && cookingOil.quantity >= 3) {
        let discountOilPrice = cookingOil;
        discountOilPrice.subTotalWithDiscount = 10 * discountOilPrice.quantity;
    }

    if (instantMixturePosition != -1 && instantMixture.quantity >= 10) {
        let discountMixturePrice = instantMixture;
        discountMixturePrice.subTotalWithDiscount = (((5/3)*2) * discountMixturePrice.quantity).toFixed(2);
        discountMixturePrice.subTotalWithDiscount = parseFloat(discountMixturePrice.subTotalWithDiscount);
    }
        
    console.table(cart);
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const tableBody = document.getElementById("cart_list");
    tableBody.innerHTML = "";
    let totalCart = document.getElementById("total_price");

    for (let i = 0; i < cart.length; i++) {
        const tableRow = document.createElement('tr');

        const tableHead = document.createElement('th');
        tableHead.setAttribute('scope', 'row');
        let nodeName = document.createTextNode(cart[i].name);
        tableHead.appendChild(nodeName);
        tableRow.appendChild(tableHead);

        const tableCellPrice = document.createElement('td');
        let nodePrice = document.createTextNode(cart[i].price);
        tableCellPrice.appendChild(nodePrice);
        tableRow.appendChild(tableCellPrice);

        const tableCellQtty = document.createElement('td');
        let nodeQtty = document.createTextNode(cart[i].quantity);
        tableCellQtty.appendChild(nodeQtty);
        tableRow.appendChild(tableCellQtty);

        const tableCellTotal = document.createElement('td');
        let nodeTotal = document.createTextNode(cart[i].subTotal);
        if (cart[i].subTotalWithDiscount != undefined) {
            nodeTotal = document.createTextNode(cart[i].subTotalWithDiscount);
        }
        tableCellTotal.appendChild(nodeTotal);
        tableRow.appendChild(tableCellTotal);
        
        tableBody.appendChild(tableRow);
    }
    totalCart.innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}