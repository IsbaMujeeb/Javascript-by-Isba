
let btn = document.getElementById("btn");
let order = document.getElementById("order-process");

function step(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let pizzaAvailable = true;

            if (pizzaAvailable === true) {
                let p = document.createElement("p");
                p.innerText = message;
                order.appendChild(p);

                resolve();
            } else {
                reject("Sorry, pizza is unavailable!");
            }
        }, time);
    });
}

btn.addEventListener("click", () => {
    order.innerHTML = "";

    step("Order received!", 1000)
        .then(() => {
            return step("Preparing your pizza...", 1500);
        })
        .then(() => {
            return step("Pizza is ready!", 1000);
        })
        .then(() => {
            return step("Order delivered! 🍕", 1000);
        })
        .catch((error) => {
            let p = document.createElement("p");
            p.innerText = error;
            order.appendChild(p);
        });
});
