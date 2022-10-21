// selecteren van element
const geselecteerdElement = document.getElementById("students")



// lijst aanmaken met studenten
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
function convertStudentToHTMLString(student) {
    return `<div class="student">
         <h1>${student.name} ${student.surName}</h1>
         <p>${student.email}</p>
         <img src="${student.thumbnail}" alt="Student 1">
     </div>`
    
}

// door lijst lopen van studenten
students.forEach((student) => {
    geselecteerdElement.innerHTML += convertStudentToHTMLString(student);
})

    // voor elk onderdeel van de lijst dit toevoegen aan geselecteerdElement

    // voorbeeld zonder lijst
    // geselecteerdElement.innerHTML += `
    // <div class="student">
    //     <h1>Voornaam1 Achternaam1</h1>
    //     <p>Email1@email.be</p>
    //     <img src="./img/student1.jpg" alt="Student 1">
    // </div>`