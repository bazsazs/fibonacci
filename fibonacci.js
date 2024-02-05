function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fib(n - 1) + fib(n - 2);
}

// Example usage:
console.log(fib(5)); // Output: 5
console.log(fib(8)); // Output: 21
