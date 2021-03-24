function Queue () {
  collection = [];
  this.print = function() {
    console.log(collection);
  };
  //This method pushes the first item onto the queue
  this.enqueue = function(element) {
    collection.push(element);
  };
  //Take out the item of the queue
  this.dequeue = function() {
    return collection.shift();
  };
  //Just retrieves the first element of the array, without removing it from the array.
  this.front = function() {
    return collection[0];
  };
  //Returns the size of the array.
  this.size = function() {
    return collection.length;
  };
  //Checks if the array is empty.
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
