//Recursion

//Factorial of n
function factorial(num){
    if(num === 0){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Create an array with range of numbers
function createArray(startNum, endNum){
    if(endNum < startNum){
        return [];
    } else {
        let array = createArray(startNum, endNum - 1);
        array.push(endNum);
        return array;
    }
}

// Given and integer x, return true if x is palindrome, and false otherwise.