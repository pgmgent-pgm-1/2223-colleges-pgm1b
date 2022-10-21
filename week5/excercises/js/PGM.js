// een voornaam
// een familienaam
// een thumbnail (relatieve URL)
// een e-mailadres


const students = [
    {
        name: "Student 1",
        surName: "Surname 1",
        thumbnail: "./img/student1.jpg",
        email: "student1@arteveldehs.be"
    },
    {
        name: "Student 2",
        surName: "Surname 2",
        thumbnail: "./img/student2.jpg",
        email: "student2@arteveldehs.be"
    },
    {
        name: "Student 3",
        surName: "Surname 3",
        thumbnail: "./img/student3.jpg",
        email: "student3@arteveldehs.be"
    }
]



convertStudentToHTMLString = (student) =>
{
    return `<h1>${student.name} ${student.surname}</h1>
    <img src="${student.thumbnail}">
    <p>${student.email}</p>
    `
}

const studentsElement = document.getElementById('students');
students.forEach(student => {
    studentsElement.innerHTML += convertStudentToHTMLString(student);
});