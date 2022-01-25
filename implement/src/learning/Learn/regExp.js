let data= "Mahadeva has an email and millions of children he has this Mahadeva@gmail.com, amma@gmail.com";
let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/g;
let sample = data.match(exp);
for(var i = 0; i< sample.length; i++){
    console.log(sample[i]);
}