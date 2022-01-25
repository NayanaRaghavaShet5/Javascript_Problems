const user = {
    firstName :"Mahadeva",
    lastName:"Parvathi",
    getName : function () {
        return this.firstName + this.lastName;
    }
}

//this will give the entire values
console.log(user.getName);

//this will give the exact value
console.log(user.getName());