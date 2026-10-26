
const shoppingList = document.getElementById("shoppingList");

shoppingList.addEventListener("click", function(event) {

    if (event.target.tagName === "SPAN") {
        const clickedItem = event.target.closest(".item");

        if (clickedItem) {
            console.log("Removed:", clickedItem.textContent.trim());
            clickedItem.remove();
        }
    }

});
