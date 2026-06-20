let students = [
    { id: 1, name: "raj", course: "mern" },
    { id: 2, name: "rahul", course: "mean" },
];

//data

const addstudent = (id, name, course) => {
    const newstudent = { id, name, course };
    students.push(newstudent);
    return "student added successfully";
    
}

//view all data
const viewstudents = () => {
    return students;
}

module.exports = {addstudent, viewstudents}