var check = [1, 2, 3, 4, 5];

const is_array = (input) => {
    
    if (toString.call(input) === '[object Array]') {
        return true;
    }
    return false;
}
console.log(is_array(check));
