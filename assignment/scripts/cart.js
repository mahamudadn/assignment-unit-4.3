console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



let basket =[];

function addItems( item ) {

 basket.push(item);

 return true;

} 


function listItems() {

    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);
         
    }
}

addItems('mango');
addItems('papaya');
addItems('carrot');
addItems('banana');
addItems('beans');
addItems('oats');

listItems();


