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

  console.log(addSumBest(nums, target))  