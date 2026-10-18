
// 1. Food Data (Menu items ka data)
const foods = [
    { id: 1, name: "Classic Beef Burger", price: 650, emoji: "🍔" },
    { id: 2, name: "Cheesy Pepperoni Pizza", price: 1200, emoji: "🍕" },
    { id: 3, name: "Crispy French Fries", price: 350, emoji: "🍟" },
    { id: 4, name: "Club Sandwich", price: 500, emoji: "🥪" },
    { id: 5, name: "Chicken Biryani", price: 450, emoji: "🍗" },
    { id: 6, name: "Cold Drink", price: 150, emoji: "🥤" }
];

// 2. Cart State (Selected items yahan save hongay)
let cart = [];

// 3. DOM Elements (HTML IDs se target karna)
const foodContainer = document.getElementById("foodContainer");
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cartBtn = document.getElementById("cartBtn");

// 4. Menu Items Render Karna
function renderMenu() {
    foodContainer.innerHTML = foods.map(item => `
        <div class="food-card">
            <div class="food-image">${item.emoji}</div>
            <h3>${item.name}</h3>
            <p>Rs. ${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    `).join("");
}

function addToCart(id) {
    // Check karo product cart mein pehle se mojood hai ya nahi
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // Agar mojood hai to sirf quantity barhao
        existingItem.quantity += 1;
    } else {
        // Agar naya item hai to foods list se dhund kar cart mein push karo
        const product = foods.find(item => item.id === id);
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

// 6. Quantity Change (+ ya -)
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;

    // Agar quantity 0 ya us se kam ho jaye to item delete kardo
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    updateCartUI();
}

// 7. Remove Item Logic
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// 8. Cart UI Update Karna (DOM screen par display karna)
function updateCartUI() {
    // Total count aur Total price calculate karna
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Header cart button update
    cartBtn.textContent = `🛒 Cart (${totalItems})`;

    // Total price update
    totalPriceEl.textContent = grandTotal;

    // Cart items container render karna
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="padding: 15px 0; color: #888;">Your cart is empty.</p>`;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <div>Rs. ${item.price} × ${item.quantity} = <b>Rs. ${item.price * item.quantity}</b></div>
            </div>

            <div class="quantity">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" style="background: #ffdede; color: #c0392b;">✕</button>
            </div>
        </div>
    `).join("");
}

// Page load hone par menu display karo
renderMenu();


