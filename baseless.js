const input = [2, 4, 'hi', 'bye', 8];
// output = [32, 16, 64, 64, 8];

function solve (input) {
    const res = []

    for( let i = 0; i < input.length; i++){
        let val = 1;
        for(let j = 0; j < input.length; j++){
            if( i !== j ){
                if(typeof(input[j]) == 'string' || typeof(input[i]) == 'string') {input[j] = 1}
                val = val * input[j];
            }
        }
        res.push(val);
    }
    return res
}

console.log(solve(input))
