// Variables & Datatypes

// A. Q + A
//1. You can assign a value to a variable using the = operator after you have declared it.
//2. We can change the value of a variable by referencing it, followed by using the assignment operator and entering a new value.
//3. We declare the new variable, followed by the assignment operator, follewed by referencing the existing variable
//4. Declare: Variable is registered a given name within the cooresponding; Assign: Assigns a value to a variable; Define: Using a keyword to 'declare" i.e. "function doTest"
//5. Pseudocode is a way of writing programs structured like a set of instructions written out in sentences that just about any human can read and comprehend. 
//6. 95% thinking about how to solve vs 5% actually typing the code

// B. Strings
//1. 
    let firstVariable;
//2. 
    firstVariable = 'Hello World';
//3.
    firstVariable = 9;
//4. 
    let secondVariable = firstVariable;
//5.
    secondVariable = 'Goodnight World';
//6.
     console.log(firstVariable);
//7. 
   let yourName = 'Nate';
   console.log('Hello, my name is ' + yourName) // Hello, my name is Nate

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16; 
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' == 'Name');
// Only use && or || for the next two
console.log(true || false);
console.log(false || false && false || false && false || true );
console.log(false == false);
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 =='48');