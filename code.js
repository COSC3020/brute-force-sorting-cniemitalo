function permutationSort(a) {
    var count = [0]; 
    getPermutations(a, count, 0); 

    return count[0]; 
}

function getPermutations(a, count, index) { 
    var sorted = false; 
    
    //permutation is formed, check if its sorted 
    if (index === a.length) {
        count[0]++; 
        return checkSorted(a); 
    }

    //recursively swaps elements and stops searching 
    //if permutation is sorted 
    for (var i = index; i < a.length; i++) {
        swap(a, index, i); 
        sorted = getPermutations(a, count, index + 1); 
        if (sorted) {
            return true; 
        }
        swap(a, index, i); 
    }
}

//checks if an array is sorted
function checkSorted(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            return false; 
        }
    }
    return true; 
}

//swaps two elements 
function swap(a, first, second) {
    var temp = a[first];
    a[first] = a[second]; 
    a[second] = temp; 
}
