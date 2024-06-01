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

// Using Two Pointer approach

// First sort the array in ascending order 
// Point low at beginning and high at end
// add low and high , if target is less than sum shift high pointer to left
//  if target is greater than sum , shift low pointer to right
// if equal log the values.
// Do this untill left pointer if les than right pointer.

// TC O(nlogn)
// SC O(1)

function findPairUsingPointers(nums, target){
    nums.sort((a,b) => a - b)
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        if(nums[left] + nums[right] == target){
            console.log(nums[left], nums[right]);
            right --;
            left ++;
        } else if(nums[left] + nums[right] > target){
            right--;
        } else {
            left ++
        }
    }
}

findPairUsingPointers(nums, target)


// Using hashmap
// tc O(n)
// sc O(n)

function addSumBest(arr, target) {
    const map = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      const compliment = target - arr[i];
  
      if (map.has(compliment)) {
        return [map.get(compliment), i];
      }
      map.set(arr[i], i);
    }
  }

//   console.log(addSumBest(nums, target))  

//   Sub array with given sum

function subarrayWithSum(arr, target){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        let start = arr[i]
        for (let j = i + 1; j < len; j++){
              start += arr[j]
             if(start == target) {
                return [i+1, j+1]};
        }
    }
    return -1
}

console.log(subarrayWithSum([1,2,3,4,5,6,7,8,9,10], 15))


function subarrayOptimal(arr, target){
    var currentSum = 0;
    let start = 0;
    for(let end  = 0 ; end  < arr.length; end++){
        currentSum += arr[end];

        while(currentSum > target && start < end) {
            currentSum -= arr[start];
            start++;
        }

        if(currentSum == target){
            return [start+1, end+1];
        }
    }
    return -1
}

console.log(subarrayOptimal([1,2,3,4,5,6,7,8,9,10], 15))