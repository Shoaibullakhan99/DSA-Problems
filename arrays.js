// Pair with a given sum

// Input,  
nums = [8, 7, 2, 5, 3, 1];
target = 10;

//output
// (8, 2) || (7, 3)

// Brute - force approach
// time-complexity O(NxM)
// space-complexity O(1)

function findPair(nums, target){
    let len = nums.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            if( nums[i] + nums[j] === target){
                console.log(nums[i], nums[j])
            }
        }
    }   
}

findPair(nums, target)

