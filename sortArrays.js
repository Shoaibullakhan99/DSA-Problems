// Sort an array of 0's, 1's and 2's;

function sortArray(arr){
    arr.sort((a,b) => a - b);
    console.log(arr)
}

sortArray( [2,0,2,1,1,0]);

