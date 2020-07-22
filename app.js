const foods = [
    {
        id: 1,
        name: "Hamburger",
        price: 10000,
        img: "./assets/burger.jpg",
        qty: 0,
    },
    {
        id: 2,
        name: "Pizza",
        price: 24000,
        img: "./assets/burger.jpg",
        qty: 0
    },
    {
        id: 3,
        name: "Fried Chicken",
        price: 30000,
        img: "./assets/burger.jpg",
        qty: 0
    },
    {
        id: 4,
        name: 'French Fries',
        price: 10000,
        img: "./assets/burger.jpg",
        qty: 0
    },
    {
        id: 5,
        name: 'Fried Mushrooms',
        price: 15000,
        img: "./assets/burger.jpg",
        qty: 0
    },
]

const discountCodes = {
    first: (2 / 100),
    second: (4 / 100),
    third: (5 / 100)
}

const increaseQty = id => {
    foods.map(food => { if (food.id === id) food.qty += 1 })
    renderFoods(foods)
}

const decreaseQty = (id) => {
    foods.map(food => { if (food.id === id && food.qty > 0) food.qty -= 1 })
    renderFoods(foods)
}

const totalPrice = (foods) => {
    sum = 0
    foods.forEach(food => {
        sum += food.qty * food.price
    })

    document.getElementById('totalPrice').innerHTML = `${sum} <span> تومان</span>`
}

let discountedPrice = 0
const applyDiscount = () => {
    discountedPrice = 0
    const inputValue = document.getElementById("discountCode").value
    if (inputValue === "first") {
        discountedPrice = discountCodes.first * sum
    } else if (inputValue === "second") {
        discountedPrice = discountCodes.second * sum
    } else if (inputValue === "third") {
        discountedPrice = discountCodes.third * sum
    }
    else {
        document.getElementById("discountCode").style = "background-color: rgba(235, 14, 14, 0.774)"
    }

    if (inputValue === "first" || inputValue === "second" || inputValue === "third") {
        document.getElementById("discountCode").style = "background-color: rgba(28, 218, 37, 0.644)"
    }
    // switch (document.getElementById("discountCode").value) {
    //     case "first":
    //         discountedPrice = discountCodes.first * sum
    //         break;

    //     case "second":
    //         discountedPrice = discountCodes.second * sum
    //         break;

    //     case "third":
    //         discountedPrice = discountCodes.third * sum
    //         break;

    //     default:
    //         document.getElementById("discountCode").style = "background-color: red"
    // }

    document.getElementById('discountedPriceTotal').innerHTML = `${discountedPrice} <span> تومان</span>`
    finalPrice()
}

const tips = () => {
    tipPrice = sum * (1 / 100)
    document.getElementById('tips').innerHTML = `${tipPrice} <span> تومان</span> `
}

const finalPrice = () => {
    document.getElementById('finalPrice').innerHTML = `${(sum + tipPrice) - discountedPrice} <span> تومان</span> `
}


renderFoods = foods => {
    document.getElementById("renderFoods").innerHTML = ''
    foods.map(food => {

        document.getElementById("renderFoods").innerHTML += `
   
            <div class="items">

                <div class="items-box">
                        
                    <div class="items-box-img">
                        <img src="${food.img}" alt="" class="items-box-img-i" />
                    </div>

                    <div class="items-box-text">
                        <h2 class="items-box-text-h1">${food.name}</h2>
                        <span class="items-box-text-h1-gheymat"> ${food.price}  تومان </span>

                        <div class="items-box-text-click">

                            <img src="assets/plus-icon.png" alt="" class="items-box-text-click-increase" onClick="increaseQty(${food.id});" />
                            <img src="assets/minus-icon.ico" alt="" class="items-box-text-click-decrease" onClick="decreaseQty(${food.id})" />
                            <span class="items-box-text-click-count" >${food.qty}</span>
                            
                        </div>

                    </div>

                    <div class="items-box-gheymat">
                        <span class="items-box-gheymat-s"> ${(food.qty) * (food.price)} <span>تومان</span></span>
                    </div>
                    
                </div>
                
            </div>`
    })


    totalPrice(foods)
    tips()
    finalPrice()
}

renderFoods(foods)