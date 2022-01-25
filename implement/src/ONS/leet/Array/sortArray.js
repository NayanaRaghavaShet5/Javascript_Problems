let arr = [4,1,7,3,2,5,6,78,98,454];

function sortArr(arr) {

    for(let i = 0; i< arr.length; i++){
        if(arr[i]> arr[i+1]){
            return arr[i] - arr[i+1];
        } else {
            return arr[i+1] - arr[i];
        }
    }
}

console.log(sortArr(arr));