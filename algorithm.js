const array = [4,-1,2,1]

function kadanesAlgo(array){
    var max = Number.MIN_SAFE_INTEGER;
    var sum = 0;

    for(let i = 0 ; i < array.length; i++){
        sum += array[i];

        if(sum > max){
            max = sum;
        }

        if(sum < 0){
            sum = 0;
        }
    }
    console.log(max);
}

kadanesAlgo(array)