const arr: Array<number> = [8, 5, 15, 35, 10, 76, 4, 98]

function partition(arr: number[], low: number, high: number): { arr: number[], newPiIndex: number } {
    let p = arr[high]
    let i = low
    for (let j = low; j < high; j++) {
        if (arr[j] < p) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
        }

    }
    let temp = arr[high]
    arr[high] = arr[i]
    arr[i] = temp
    let newPiIndex = i
    return { arr, newPiIndex };
}
// [5,8,10,15, 35]
function quickSort(arr: number[], low: number, high: number): number[] {
    if (low < high) {
        let pi: number = 0
        const { arr: prReturnedArray, newPiIndex } = partition(arr, low, high)
        pi = newPiIndex;
        arr = quickSort(prReturnedArray, low, pi - 1)
        arr = quickSort(arr, pi + 1, high)
    }
    return arr
}
const sortedArray = quickSort(arr, 0, arr.length - 1)
console.log("ye quicksort hai", sortedArray);


function binarySearch(sortedArray: number[], low: number, high: number, targetValue: number): number {
    let mid: number = 0;
    while (low < high) {
        mid = Math.floor((low + high) / 2)

        if (sortedArray[mid] === targetValue) return mid

        if (sortedArray[mid] < targetValue) {
            low = mid
        }

        if (sortedArray[mid] > targetValue) {
            high = mid
        }
    }
    return mid
}

const result: number = binarySearch(sortedArray, 0, sortedArray.length, 15)
console.log("ye binary seach hai", result);

export { }