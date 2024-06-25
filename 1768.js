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


/* 
Next Problem
1071 : Greatest Common Divisor of Strings
*/

const string_1 = "ABCDABCDABCDABCDABCD";
const string_2 = "ABCD";

function greatestCommonDivisor(s, t){

    if(s.length % t.length !== 0) return "";
    let startPointer = 0;
    let stringToReturn = ""
    while(startPointer < s.length){
        let temporaryString = '';
        for(let i = startPointer ; i < t.length + startPointer; i++){
            temporaryString += s[i]
        }
        if(temporaryString !== t) return ""
        startPointer = startPointer + t.length;
        stringToReturn = temporaryString;
    }
    return stringToReturn; 

}

console.log(greatestCommonDivisor(string_1, string_2))


var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    let a = str1.length
    let b = str2.length

//  This will work untill the value of b is not changed to zero
//  The below approach is the euclidean's way of finding greated common divisor {gcd}
    while (b) {
        let temp = b
        b = a % b
        a = temp
        console.log(temp, b, a)
    }
    return str1.substring(0, a)
};

console.log(gcdOfStrings(string_1, string_2));

