const vessel = [{
    name: 'Waffle Cone',
    price: 3,
    quantity: 0
},
{
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 5,
    quantity: 0
}]

const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    quantity: 0,
    price: .5
}]

function orderWaffleCone() {
    console.log('ordering Waffle Cone')
    if (vessel[0].quantity + vessel[1].quantity + vessel[2].quantity > 0) {
        vessel[0].quantity = 0
        vessel[1].quantity = 0
        vessel[2].quantity = 0
        vessel[0].quantity += 1
    }
    else {
        vessel[0].quantity += 1
    }
    // console.log(vessel[0].quantity)
    drawCart()
}

function orderWaffleBowl() {
    console.log('ordering Waffle Bowl')
    if (vessel[0].quantity + vessel[1].quantity + vessel[2].quantity > 0) {
        vessel[0].quantity = 0
        vessel[1].quantity = 0
        vessel[2].quantity = 0
        vessel[1].quantity += 1
    }
    else {
        vessel[1].quantity += 1
    }
    // console.log(vessel[1].quantity)
    drawCart()
}

function orderDippedCone() {
    console.log('ordering Dipped Cone')
    if (vessel[0].quantity + vessel[1].quantity + vessel[2].quantity > 0) {
        vessel[1].quantity = 0
        vessel[0].quantity = 0
        vessel[2].quantity = 0
        vessel[2].quantity += 1
    }
    else {
        vessel[2].quantity += 1
    }
    // console.log(vessel[2].quantity)
    drawCart()
}

function orderCookieDough() {
    console.log('ordering Cookie Dough')
    iceCream[0].quantity += 1
    // console.log(iceCream[0].quantity)
    drawCart()
}

function orderVanilla() {
    console.log('ordering Vanilla')
    iceCream[1].quantity += 1
    // console.log(iceCream[1].quantity)
    drawCart()
}

function orderStrawberry() {
    console.log('ordering Strawberry')
    iceCream[2].quantity += 1
    // console.log(iceCream[2].quantity)
    drawCart()
}

function orderSprinkles() {
    console.log('ordering Sprinkles')
    toppings[0].quantity += 1
    // console.log(toppings[0].quantity)
    drawCart()
}

function orderChocolateChips() {
    console.log('ordering Chocolate Chips')
    toppings[1].quantity += 1
    // console.log(toppings[1].quantity)
    drawCart()
}

function orderCookieChunks() {
    console.log('ordering Cookie Chunks')
    toppings[2].quantity += 1
    // console.log(toppings[2].quantity)
    drawCart()
}

function drawCart() {
    let cartContent = ''
    let cartTotal = 0
    for (let i = 0; i < vessel.length; i++) {
        if (vessel[i].quantity > 0) {
            cartContent += `<p>${vessel[i].quantity}x ${vessel[i].name} $${(vessel[i].price * vessel[i].quantity).toFixed(2)}</p>`
            // console.log(cartContent)
            cartTotal += (vessel[i].price * vessel[i].quantity)
        }
    }
    for (let i = 0; i < iceCream.length; i++) {
        if (iceCream[i].quantity > 0) {
            cartContent += `<p>${iceCream[i].quantity}x ${iceCream[i].name} $${(iceCream[i].price * iceCream[i].quantity).toFixed(2)}</p>`
            // console.log(cartContent)
            cartTotal += (iceCream[i].price * iceCream[i].quantity)
        }
    }

    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].quantity > 0) {
            cartContent += `<p>${toppings[i].quantity}x ${toppings[i].name} $${(toppings[i].price * toppings[i].quantity).toFixed(2)}</p>`
            // console.log(cartContent)
            cartTotal += (toppings[i].price * toppings[i].quantity)
        }
    }

    let cartItemsElem = document.getElementById('cart-items')
    cartItemsElem.innerHTML = cartContent

    let cartTotalElem = document.getElementById('cart-total')
    cartTotalElem.innerHTML = `<p>$${cartTotal.toFixed(2)}</p>`
}

function checkout() {
    for (let i = 0; i < toppings.length; i++) {
        vessel[i].quantity = 0
        iceCream[i].quantity = 0
        toppings[i].quantity = 0
    }
    drawCart()
}