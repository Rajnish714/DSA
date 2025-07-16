"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [8, 5, 15, 35, 10, 76, 4, 98];
function partition(arr, low, high) {
    var p = arr[high];
    var i = low;
    for (var j = low; j < high; j++) {
        if (arr[j] < p) {
            var temp_1 = arr[i];
            arr[i] = arr[j];
            arr[j] = temp_1;
            i++;
        }
    }
    var temp = arr[high];
    arr[high] = arr[i];
    arr[i] = temp;
    var newPiIndex = i;
    return { arr: arr, newPiIndex: newPiIndex };
}
// [5,8,10,15, 35]
function quickSort(arr, low, high) {
    if (low < high) {
        var pi = 0;
        var _a = partition(arr, low, high), prReturnedArray = _a.arr, newPiIndex = _a.newPiIndex;
        pi = newPiIndex;
        arr = quickSort(prReturnedArray, low, pi - 1);
        arr = quickSort(arr, pi + 1, high);
    }
    return arr;
}
var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log("ye quicksort hai", sortedArray);
function binarySearch(sortedArray, low, high, targetValue) {
    var mid = 0;
    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (sortedArray[mid] === targetValue)
            return mid;
        if (sortedArray[mid] < targetValue) {
            low = mid;
        }
        if (sortedArray[mid] > targetValue) {
            high = mid;
        }
    }
    return mid;
}
var result = binarySearch(sortedArray, 0, sortedArray.length, 15);
console.log("ye binary seach hai", result);
