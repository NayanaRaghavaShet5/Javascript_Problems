let tab = document.getElementById("tablee");
let list1 = [], list2 = [], list3 = [], list4 = [];

let x = 0;
let n = 1;
let sub = document.getElementById("forms");
const submitData = () => {

    let row1 = tab.insertRow(n)
    list1[x] = document.getElementById("name").value
    list2[x] = document.getElementById("age").value
    let male = document.getElementById("male").value
    let female = document.getElementById("female").value
    if(male) {
        list3[x] = male
    } else {
        list3[x] = female
    }
    list4[x] = document.getElementById("place").value

    let cell1 = row1.insertCell(0)
    let cell2 = row1.insertCell(1)
    let cell3 = row1.insertCell(2)
    let cell4 = row1.insertCell(3)

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x]
    cell3.innerHTML = list3[x]
    cell4.innerHTML = list4[x]

    n++;
    x++;
}

sub.addEventListener('onclick', submitData);

