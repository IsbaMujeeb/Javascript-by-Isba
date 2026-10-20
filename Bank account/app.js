
let balanceDisplay = document.getElementById("balance");
let depositBtn = document.getElementById("deposit");
let withdrawBtn = document.getElementById("withdraw");
let amountInput = document.getElementById("amount");
let message = document.getElementById("message");

function createBankAccount() {
    let balance = 1000;

    return {
        getBalance: function () {
            return balance;
        },

        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                return true;
            }

            return false;
        },

        withdraw: function (amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return true;
            }

            return false;
        }
    };
}

const myAccount = createBankAccount();

// Show initial balance
balanceDisplay.textContent = "Rs. " + myAccount.getBalance();

// Deposit button
depositBtn.addEventListener("click", function () {
    let value = Number(amountInput.value);

    let success = myAccount.deposit(value);

    balanceDisplay.textContent = "Rs. " + myAccount.getBalance();

    if (success) {
        message.textContent = "Amount deposited successfully!";
    } else {
        message.textContent = "Please enter a valid amount!";
    }

    amountInput.value = "";
});

// Withdraw button
withdrawBtn.addEventListener("click", function () {
    let value = Number(amountInput.value);

    let success = myAccount.withdraw(value);

    balanceDisplay.textContent = "Rs. " + myAccount.getBalance();

    if (success) {
        message.textContent = "Amount withdrawn successfully!";
    } else {
        message.textContent = "Invalid amount or insufficient balance!";
    }

    amountInput.value = "";
});

//Method 2
// let balance = 1000;
// function deposit(){
//     let value = Number(amountInput.value);
//     if(value>0){
//         balance += value;
//         balanceDisplay.textContent = "Rs. " + balance;
//         message.textContent = "Amount deposited successfully!";
//     }
//     else{
//         message.textContent = "Please enter a valid amount!";
//     }
    
// }
// function withdraw(){
//     let value = Number(amountInput.value);
//     if(value>0 && value<=balance){
//         balance -= value;
//         balanceDisplay.textContent = "Rs. " + balance;
//         message.textContent = "Amount withdrawn successfully!";
//     }
//     else{
//         message.textContent = "Invalid amount or insufficient balance!";
//     }
// }
// depositBtn.addEventListener("click", deposit);
// withdrawBtn.addEventListener("click", withdraw);