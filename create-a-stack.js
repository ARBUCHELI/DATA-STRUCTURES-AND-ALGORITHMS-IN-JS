// Creates a stack
//this.count and this.storage are just variables
var stack = function() { //The this keyword refers to the element it belongs to.  In this case the stack variable.
    this.count = 0; // This is going to keep track of how many objects there are in the stack.
    this.storage = {}; //This is an empty object.  

    // METHODS:
  
    // Adds a value onto the end of the stack
    this.push = function(value) {
         this.storage[this.count] = value; //This puts the value on the top of the stack.
         this.count++
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
    
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
     }
  
     this.size = function() {
         return this.count;
     }
  
     //Returns the value at the end of the stack
     this.peek = function(value) {
          return this.storage[this.count-1];
     }
}

var myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
//Example, add other things to the stack:
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
