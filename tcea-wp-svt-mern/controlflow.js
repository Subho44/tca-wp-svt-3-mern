function login(email, password) {
    if (email === "virat@gmail.com" && password === "1234") {
        return "login  success";
    } else {
        return "invalid login";
    }
}

//how to calculate total price
function tp(price, qty) {
    return price * qty;
}

//user role check
function rc(role) {
    if (role === "admin") return "admin dashboard";
    else if (role === "user") return "user dashboard";
    else return "access denied";
}

//add course
let courses = ["react", "next", "node"];

function addcourse(course) {
    courses.push(course);
    return courses;
}
//search course

function sc(course) {
    return courses.includes(course);
}
module.exports = { login, tp , rc,addcourse,sc};