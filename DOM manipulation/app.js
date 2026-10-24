
let msg = document.getElementById("message");
let show = document.getElementById("display");

let clearBtn = document.getElementById("clearBtn");

msg.addEventListener("input", () => {
    show.innerText = msg.value;
});
msg.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        show.innerText = msg.value;
        msg.value = "";
    }
});

clearBtn.addEventListener("click", () => {
    msg.value = "";
    show.innerText = "Your text will appear here...";
});