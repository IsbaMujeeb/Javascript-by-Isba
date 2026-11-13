let p1 = document.getElementById("msg1");
let p2 = document.getElementById("msg2");
let p3 = document.getElementById("msg3");

let employee1 = {
    name: "Ali"
};

let employee2 = {
    name: "Sara"
};

let employee3 = {
    name: "Ayesha"
};
function showMessage(message, element) {

    element.innerText = `${this.name}: ${message}`;

}
showMessage.call(
    employee1,
    "Welcome to the team!",
    p1
);
showMessage.apply(
    employee2,
    ["Your meeting is at 10 AM.", p2]
);
let ayeshaMessage = showMessage.bind(
    employee3,
    "Your task is completed!",
    p3
);

ayeshaMessage();

//in bind method this value is fixed and rest of the arguments can be passed when calling the function.