/**
 * Student information
 * Schrijf een JavaScript programma waarin student informatie wordt beschreven d.m.v. een object initalizer

(opens new window). Een student bevat:

    familienaam (string)
    voornaam (string)
    geslachtscode (number)
    geboortedatum (number t.o.v. 1970)
    cursussen (array van objecten)
        cursus (object)
            naam (string)
            docenten (array van string objecten)
 * 
 */

const student = {
    lastName: "Zayed",
    firstName: "Rim",
    genderId: 1,
    birthday: new Date("01/01/2003"),
    courses: [
        {
            name: "PGM-1",
            arrLecturers: ["Jannes", "Philippe"]
        },
        {
            name: "Webdev",
            arrLecturers: ["Mathieu", "Michael", "Markha"]
        }
    ]

}

generateStringForStudent = (studentObject) => {

    let output = `Name: ${studentObject.firstName} ${studentObject.lastName}
Gender: ${generateStringForGender(studentObject.genderId)}
Day Of Birth: ${studentObject.birthday.toDateString()}`
    return output;
}
generateStringForGender = (genderId) => {
    switch (genderId) {
        case 0:
        return "Male";
        break;
        case 1:
        return "Female";
        break;
        case 2:
        return "Not defined";
        break;     
        default:
        return "The number is not in the range [0 - 2]";
        break;
    }

}

generateStringForLecturers = (arrLecturers) => {
    return arrLecturers.join(", ");
}

generateStringForCourses = (arrCourses) => {
    let output = "";
    // voor elke course doe iets
    for (const key in arrCourses) {
        output += `Course: ${arrCourses[key].name}
Lecturers: ${generateStringForLecturers(arrCourses[key].arrLecturers)}`;
if(key != arrCourses.length - 1){
    output += `\n------------------------------------------------\n`
}
}
    
    return output;
}
generateTotalInformation = (student) => {
return(`======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
${generateStringForStudent(student)}
======================================================
COURSES
======================================================
${generateStringForCourses(student.courses)}
======================================================`);
}

console.log(generateTotalInformation(student));











generateTotalInformation(student);
/**
 * ======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: Olivier Pieters
Gender: Male
Day of birth: Fri Dec 12 1975
======================================================
COURSES
======================================================
Course: Computer Systems
Lecturers: Thibault Fouquaert, Lennart Dubois
------------------------------------------------
Course: Web Design
Lecturers: Mathieu Spillebeen
------------------------------------------------
Course: Programming
Lecturers: Thibault Fouquaert, Philippe De Pauw - Waterschoot
======================================================

 */