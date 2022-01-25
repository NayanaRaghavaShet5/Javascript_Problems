function hello() {
    hello();
}

let hello2 = hello;
hello = 123;
hello2();