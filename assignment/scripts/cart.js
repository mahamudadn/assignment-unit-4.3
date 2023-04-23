console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


const maxItems = 5; // global varaible

let basket =[];

// added additem function. 
// told to push item to the basket
// if succesfully added items to basket will return true
// otherwise, false.

function addItems( item ) {

 basket.push(item);

 return true;

} 

// created a function called lisItems that will loop over the basket.

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
//that resets basket to empty.


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

console.log( 'added book and expect (true) because the basket have space' , addItems('book'));

console.log( 'added pen and expect (true)', addItems('pen'));

console.log( 'added marker and expect (true)', addItems('marker'));

console.log( 'added table and expect (true)', addItems('table'));

console.log( 'added bilboard and expect (true)' , addItems('bilboard'));

console.log( 'added pencil and expect (false) because the basket is full', addItems('pencil'));



function removeItem(item) {
    const index = basket.indexOf(item);
    if (index !== -1) {
      const removedItem = basket.splice(index, 1);
      return removedItem[0];
    } else {
      return null;
    }
  }
  
  // calling the indexOf eag of my basket.

  console.log('the index of the first item book is : ', basket.indexOf('book'));

  console.log('the index of the second item pen is : ', basket.indexOf('pen'));

  console.log('the index of the third item marker is : ', basket.indexOf('marker'));

  console.log('the index of the fourth item table is : ', basket.indexOf('table'));

  console.log('the index of the fith item bilboard is : ', basket.indexOf('bilboard'));

  // removing items from my basket using removeItem function.
  // then, logging out to see the changes.

  console.log('i have ', basket);

  console.log('i have removed ' ,removeItem('book'));

  console.log('now i have ' , basket);

  console.log('i have removed ' ,removeItem('pen'));

  console.log('now i have ' , basket);



 
