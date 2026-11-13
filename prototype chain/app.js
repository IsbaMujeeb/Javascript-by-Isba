
// 1. Select HTML elements

let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let courseInput = document.getElementById("courseInput");

let createBtn = document.getElementById("createBtn");
let output = document.getElementById("output");


// 2. Constructor Function

function Student(name, age, course) {

    this.name = name;
    this.age = age;
    this.course = course;

}


// 3. First Prototype Method

Student.prototype.introduce = function() {

    return `
        Name: ${this.name}<br>
        Age: ${this.age}<br>
        Course: ${this.course}
    `;

};


// 4. Second Prototype Method

Student.prototype.completeCourse = function() {

    return `${this.name} has completed ${this.course}!`;

};


// 5. Create Student on Button Click

createBtn.addEventListener("click", function() {

    let name = nameInput.value.trim();
    let age = ageInput.value;
    let course = courseInput.value.trim();

    // Check empty inputs

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields!");
        return;
    }

    // Create new Student object

    let student = new Student(name, age, course);


    // Display student information

    output.innerHTML = `
        <div class="student-card">

            <h3>${student.name}'s Profile</h3>

            <p>${student.introduce()}</p>

            <p>${student.completeCourse()}</p>

        </div>
    `;


    // Clear input fields

    nameInput.value = "";
    ageInput.value = "";
    courseInput.value = "";


    // Check Prototype Chain

    console.log(
        Object.getPrototypeOf(student) === Student.prototype
    );

});
