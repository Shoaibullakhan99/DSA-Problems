const word_1 = 'abc';
const word_2 = 'pqrstuv';

// expected output  = 'apbqcr'

function mergeStringsAlternately(str_1, str_2){
    let resultantMergedString = '';
    let lenghtOfFirstString = str_1.length;

    for(let i = 0 ; i < lenghtOfFirstString; i++){
        resultantMergedString += str_1[i] + str_2[i]
    }
    for(let i = lenghtOfFirstString ; i < str_2.length ; i++){
        resultantMergedString += str_2[i];
    }
    return resultantMergedString;
}

console.log(mergeStringsAlternately(word_1, word_2))

// Another , better approach and optimal approach

function mergeStringsAlternate(str_a, str_b){
    var result = '';
    for(let i = 0 ; i < Math.max(str_a.length, str_b.length); i++){
        if( i < str_a.length) result += str_a[i];
        if(i < str_b.length) result += str_b[i];
    }
    return result;
}

console.log(mergeStringsAlternate(word_1, word_2));