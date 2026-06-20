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

//discount
function dc(price, dis) {
    return price - (price * dis) / 100;
}

//arrow function
const x = (price, qty) => price * qty; // multi para
const m = (msg) => "hi all okk";  //singel para

//spread operator
const a1 = ["a", "b", "c"];
const b1 = ["d", "e"];  // oldvalue= blank  + currentvalue=input  = updated value

const z = [...a1, ...b1];

const render = (x) => {
    return z.map(a => (
        console.log(a)
        
    ));
    
}


module.exports = { login, tp, rc, addcourse, sc, dc, x, m , z,render};
