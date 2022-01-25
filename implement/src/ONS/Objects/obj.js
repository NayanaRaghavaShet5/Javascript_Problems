const user = {
    first: "Mahadeva",
    last: "Parvathi",
    role: 'Lord',
    color: 'blue',
    isCute: true,
    devoteesList: ['Nayana', 'Raghava', 'Shet'],
    dD: {
        dev1: 'Sullia',
        place: 'Blore',
        devLen:['mlore', 'blore']
    }
}

//console.table(user) //another way of showing the data

//console.log('keys', Object.keys(user));
//console.log('values', Object.values(user));
console.log('values', Object.keys(user['dD']['devLen'].length));