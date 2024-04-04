//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function increasing (array) {
    array.sort(function(a, b){return a-b});
    return array
}
function decreasing (array) {
    array.sort(function(a, b){return b-a});
    return array
}
console.log(increasing(nums1))
console.log(decreasing(nums2))
//Sort each array in decending order.

function combineEntries(arrayName){
    if (arrayName.length <= 1){
        return arrayName[0];
    } else {
        return arrayName[0]+combineEntries(arrayName.slice(1));
    }
}
console.log(combineEntries(nums1));