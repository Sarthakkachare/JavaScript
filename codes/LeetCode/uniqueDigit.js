/*
Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.
 

Example 1:

Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.
Example 2:

Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3
Explanation: The number 3 contains the digit 3 which exists in both arrays.          problem statement
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {

    nums1.map((element1)=>{
        nums2.map((element2)=>{
            if(element1 === element2){
                return element1;
            }
        });
});
    let min1=nums1[0];
    for(let i=0;i<nums1.length;i++){
        if(nums1[i] < min1){
            min1=nums1[i];
        }
    }
    let min2=nums2[0];
    nums2.map((item)=>{
        if(min2 > item){
            min2=item;
        }
})
    return min1+min2;
};