const mySort = (arr) => {
    // Check if the array is empty
    if (arr.length === 0) {
        return [];
    }
    // Check if the array has only one element
    if (arr.length === 1) {
        return arr;
    }
    // Check if the array has two elements
    if (arr.length === 2) {
        return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
    }

    function quickSort(l, h) {
        if (l >= h) return; // base case
        
        const index = partition(l, h); // partitioning the array
        quickSort(l, index - 1); // recursive call on left side
        quickSort(index, h); // recursive call on right side
    }

    function partition(l, h) {
        const pivot = arr[Math.floor((l + h) / 2)]; // choosing the pivot
        while (l <= h) {
            while (arr[l] < pivot) l++; // move left pointer to the right
            while (arr[h] > pivot) h--; // move right pointer to the left
            if (l <= h) {
                [arr[l], arr[h]] = [arr[h], arr[l]]; // swap elements
                l++;
                h--;
            }
        }
        return l; // return the partition index
    }
    quickSort(0, arr.length - 1); // call quickSort on the entire array
    return arr; // return the sorted array
}




const arr = [5, 4, 3, 3, 1];

console.log(mySort(arr));