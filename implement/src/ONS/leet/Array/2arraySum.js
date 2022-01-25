let num = [1,2,3,4,5];
let tar = 4;

function getSum(num, tar) {
let sum;
    for(let i = 0; i< num.length; i++){
        for(let j = i+1; j< num.length; j++){
            if(num [j] === tar - num[i]){
                console.log('data', i, j);
            }
        }
    }
}

getSum(num, tar);