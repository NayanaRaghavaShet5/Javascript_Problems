function greet() {
    return "Mahadeva";
}

function callMe(newFunc) {
    console.log(newFunc());
}

callMe(greet);