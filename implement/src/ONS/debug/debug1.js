function outer() {
    for (var i = 1; i < 55; i++) {
        setTimeout(() => console.log(i), 1000);

    }
}
outer();