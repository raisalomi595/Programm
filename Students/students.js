const students = [
{ name : "Soifon", marks: 70},
{ name : "Yoruichi", marks: 80},
{ name : "Rukia", marks: 90},
{ name : "Renji", marks: 60},
{ name : "Ichigo", marks: 50},
];

const getStudents = students.filter(function (students) {
    return students.marks >= 60
})

console.log(getStudents);

