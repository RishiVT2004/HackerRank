/*
Q1 - Implement a function named factorial that has one parameter: an integer, .
It must return the value of  (i.e.,  factorial).
*/

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }else{
        let fact = 1;
        for(let i = 1;i<=n;i++){
            fact *= i;
        }
        return fact;
    }
}

/*
Q2 - Declare a constant variable, , and assign it the value Math.PI. You will not 
pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
*/

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    
    // Print the perimeter of the circle:
    
    const radii = parseFloat(readLine());
 
    console.log(Math.PI*radii*radii);
    console.log(2*Math.PI*radii)

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}