console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



let basket =[];

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
// created a function called empty.

function empty () {
    basket = [] ;

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




