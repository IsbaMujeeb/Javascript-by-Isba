const shows = [
    "Breaking Bad",
    "Game of Thrones",
    "Stranger Things",
    "The Witcher",
    "The Mandalorian"
]
const list = document.getElementById("for-loop");
for (let i=0; i<shows.length; i++){
    const li= document.createElement("li");
    li.textContent= shows[i];
    list.appendChild(li);

}
const whileList = document.getElementById("while-loop");
let i=0;
while (i< shows.length){
const li= document.createElement("li")
 li.textContent= shows[i];
 whileList.appendChild(li);
 i++;
}

const dowhileList = document.getElementById("do-while-loop");
let j=0 ;
do {
    const li= document.createElement("li");
    li.textContent= shows[j];
    dowhileList.appendChild(li);
    j++;
} while(j<shows.length)

const forOfList = document.getElementById("for-of-loop");

for (let show of shows) {
    const li = document.createElement("li");
    li.textContent = show;
    forOfList.appendChild(li);
}
const favouriteShow = {
    name: "Wednesday",
    genre: "Mystery",
    rating: 8
};
const forInList = document.getElementById("for-in-loop");

for (let key in favouriteShow) {
    const li = document.createElement("li");
    li.textContent = key + ": " + favouriteShow[key];
    forInList.appendChild(li);
}