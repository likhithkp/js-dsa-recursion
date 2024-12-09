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

// Factorial.
// Without Recursion
// function fib(n){
//     let arr = [0, 1];
//     for(let i = 2; i <= n; i++){
//         arr.push(arr[i - 2] + arr[i - 1]);
//     };
//     return arr[n];
// };

function fib(n){
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2)
}

// Reverse a string
function reverse(string){
    if(string === "") return "";
    return reverse(string.substr(1)) + string.charAt(0);
};