localStorage.setItem("name", "Mahadeva");

if (localStorage.getItem("num")) {
    const va = localStorage.getItem("num");
    va++;
    localStorage.setItem("num", va);
} else {
    localStorage.setItem("num", va);
}

if (typeof window !== 'undefined') {
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}
