let submit = document.getElementById("submit");
let fullName = document.getElementById("name");
let rollNo = document.getElementById("roll-no");
let msg = document.getElementById("error-msg");

submit.addEventListener("click", () => {

    msg.innerHTML = "";

    let p = document.createElement("p");

    if (fullName.value.trim() === "" && rollNo.value.trim() === "") {
        p.innerText = "Please enter your credentials";
        p.style.color = "red";

    } else if (fullName.value.trim() === "") {
        p.innerText = "Please enter your Full Name";
        p.style.color = "red";

    } else if (rollNo.value.trim() === "") {
        p.innerText = "Please enter your Roll Number";
        p.style.color = "red";

    } else {
        p.innerText = "Valid submission";
        p.style.color = "green";
    }

    msg.appendChild(p);

});