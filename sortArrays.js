// Sort an array of 0's, 1's and 2's;

function sortArray(arr){
    arr.sort((a,b) => a - b);
    console.log(arr)
}

sortArray( [2,0,2,1,1,0]);

// Better approach

function sortBetter(arr){
    var ones = 0, twos = 0, zeros = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            zeros += 1;
        } else if(arr[i] == 1){
            ones += 1;
        } else if(arr[i] == 2) {
            twos += 1;
        }
    }
       for(let i = 0; i < arr.length; i++){
            while( zeros > 0){
                arr[i] = 0;
            }
       } 
}