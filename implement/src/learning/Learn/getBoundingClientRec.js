const el = document.querySelector("div");

el.style.width = '100px';
el.style.height = '100px';
el.style.position = "absolute";
el.style.top = "10px"
el.style.left = "10px"
el.style.backgroundColor = "red"
console.log(el.getBoundingClientRect());
