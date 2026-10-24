
let students = [
    {
        id: 1,
        name: "Sara Khan",
        course: "Computer Science",
        marks: 85
    },
    {
        id: 2,
        name: "Ali Ahmed",
        course: "Web Development",
        marks: 78
    },
    {
        id: 3,
        name: "Ayesha Noor",
        course: "Artificial Intelligence",
        marks: 92
    }
];

let studentContainer = document.getElementById("studentContainer");
let addStudentBtn = document.getElementById("addStudentBtn");
function renderStudents() {
    for (let student of students) {
        let studentDiv = document.createElement("div");
        studentDiv.classList.add("student-card");
        studentDiv.innerHTML = `
      
            <h3>${student.name}</h3>
              <p>ID: ${student.id}</p>
            <p>Course: ${student.course}</p>
            <p>Marks: ${student.marks}</p>
        `;
        studentContainer.appendChild(studentDiv);

    }
}
renderStudents();


let studentName = document.getElementById("studentName");
let studentCourse = document.getElementById("studentCourse");
let studentMarks = document.getElementById("studentMarks");
let nextId = 4;
addStudentBtn.addEventListener("click", function () {
    let name = studentName.value;
    let course = studentCourse.value;
    let marks = Number(studentMarks.value);
      if (name === "" || course === "" || studentMarks.value === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100!");
        return;
    }
    let newStudent={
        id: nextId++,
        name: name,
        course: course,
        marks: marks
    }
    students.push(newStudent)
      renderStudents();
      studentName.value = "";
studentCourse.value = "";
studentMarks.value = "";
})