// arrow function
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const result = document.getElementById("result");

const calculateTotal = (price, quantity) => {
    return price * quantity;
};
const calculateButton = document.getElementById("calculateBtn");
calculateButton.addEventListener("click", ()=>{
    const price= Number(priceInput.value);
    const quantity= Number(quantityInput.value);
    const total= calculateTotal(price, quantity);
    result.textContent= `Total: Rs. ${total}`;
})