
let student = {
    name: "Sara",
    course: "Computer Science",
    age: 20,

    showDetails: function() {

        let details = document.getElementById("details");

        details.innerHTML = `
            <h3>Student Details</h3>
            <p>Name: ${this.name}</p>
            <p>Course: ${this.course}</p>
            <p>Age: ${this.age}</p>
        `;
    }
};

let showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", function() {
    student.showDetails();
});
