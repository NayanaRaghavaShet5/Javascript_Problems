const values = ["India", "Dubai", "America", "England", "Paris"];

const list = document.getElementById("user_data");

const filterList = (data) => {
    let li = "";
    for (let i = 0; i < data.length; i++) {
        li += "<li>" + data[i] + "</li>"
    }
    list.innerHTML = li
}

filterList(values)

let input = document.getElementById("search");

const filterVal = (event) => {
    let searchText = input.value.toLowerCase();
    let filterVal = values.filter((ele) => {
        let data1 = ele.toLowerCase();
        return data1.indexOf(searchText) > -1;
    })
    filterList(filterVal);
}

input.addEventListener('keyup', filterVal)