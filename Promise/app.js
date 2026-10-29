let btn = document.getElementById("btn");
let order = document.getElementById("order-process");

function step(message, time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        
            let p= document.createElement("p")
            p.innerText = message;
            order.appendChild(p);

            resolve();
        }, time)
    })
}
btn.addEventListener("click",() =>{
    step("order received!", 2000)
    .then(()=>{
          return step("Preparing your pizza...", 2000);
    })
      .then(() => {
            return step("Pizza is ready!", 1000);
        })
        .then(() => {
            return step("Order delivered! 🍕", 1500);
        });
})