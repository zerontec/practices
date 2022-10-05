const factorial = (n)=>{
if(n === 1) return 1;

return n * factorial(n-1);



}

factorial(5)

// time: O(n)
//space O(n)