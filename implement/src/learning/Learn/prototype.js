function Person(first, last){
this.firstName = first;
this.lastName = last;
}

Person.prototype.fullName = function(){
    return this.firstName+""+this.lastName;
}

const ans = new Person("Mahadeva", "AppaAmma");
console.log(ans);
console.log(ans.fullName());