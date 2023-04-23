console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


const maxItems = 5; // global varaible
let basket =[];

// added additem funtion. 
// told to push item to the basket
// if succesfully added items to basket will return true
// otherwise, false.

function addItems( item ) {

 basket.push(item);

 return true;

} 

// created a function called lisItems that will loop over the basket.
// 

function listItems() {

    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);
         
    }
}


// console log for each of the items i added in my basket array.

console.log(`Basket is ${basket}`);
console.log('Adding mango and (expect to return)' , addItems('mango'));
console.log(`Basket is now ${basket}`);
console.log('Adding papaya  and (expect to return)' , addItems('papaya'));
console.log(`Basket is ${basket}`);
console.log('Adding  carrot and  (expect to return)' , addItems('carrot'));
console.log(`Basket is now ${basket}`);
console.log('Adding  banana  and (expect to return)' , addItems('banana'));
console.log(`Basket is ${basket}`);
console.log('Adding beans and  (expect to return)' , addItems('beans'));
console.log(`Basket is now ${basket}`);
console.log('Adding oats and (expect to return)' , addItems('oats'));
console.log(`Basket is now ${basket}`);


// created a function called empty.


function empty () {
    basket = [] ;
   
   }
   
   // Called empty function, to reset basket empty.
   
   console.log( 'The basket is now empty and (expect undefined) to console logg' ,  empty());
   
   
   // created function called isFull and defines:
   // true if the basket is not full 
   // and false, if the basket is full.
   
    function isFull() {
       return basket.length >= maxItems;
     }
   
   
   // updated the addItems funtion to isfull function.
   // used ! which means if basket is not full, then add item to the basket.
   
   
   function addItems(item) {
    if (!isFull()) {
      basket.push(item);
      return true;
    } else {
      return false;
    }
  }
  
  // added items to my basket array.

console.log( 'added book and expect (true)', addItems('book'));
console.log( 'added book and expect (true)', addItems('pen'));
console.log( 'added book and expect (true)', addItems('marker'));
console.log( 'added book and expect (true)', addItems('table'));
console.log( 'added book and expect (true)' , addItems('bilboard'));
console.log( 'added book and expect (true)', addItems('pencil'));


 
