function are_arrays_equal(arr1, arr2) {
    if (arr1.length == arr2.length) {
        var is_equal = true;
        for (var i = 0; i < arr1.length; i += 1) {
            if (arr1[i] != arr2[i] || typeof (arr1[i]) != typeof (arr2[i])) {
                is_equal = false;
            }
        }
        return is_equal;
    } else {
        return false;
    }
}


var arr1 = new Array(9, 8, 7);
var arr2 = new Array(9, 8, 7);
console.log(are_arrays_equal(arr1, arr2));
arr1.push(1);
console.log(are_arrays_equal(arr1, arr2));
arr1.pop;
console.log(are_arrays_equal(arr1, arr2));
console.log(are_arrays_equal([1, 2, 3], [4, 5, 6]));
console.log(are_arrays_equal(arr2, [4, 5, 6]));
console.log(are_arrays_equal([1, 2, 3], [1, 2, '3']))