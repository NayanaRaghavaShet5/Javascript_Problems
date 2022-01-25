function alphanumeric(inputtxt) {
    //var letters = /^[0-9a-zA-Z/s]+$/;
   let specialRegex = /[^A-Za-z0-9-()$% ]*$/gi;
    if (inputtxt.match(specialRegex)) {
       console.log('Success')
        return true;
    }
    else {
        console.log('Failed');
        return false;
    }
}

alphanumeric(' a% ()');

// /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/ 

// [^0-9a-zA-Z]+

// /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$/

// [0-9a-zA-Z' ']

// /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$/

// /^[0-9a-zA-Z' ']*$/