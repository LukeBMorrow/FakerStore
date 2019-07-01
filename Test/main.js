const NUM_OF_ITEMS = 10;
var faker = require('faker');
var items = [];

console.log("==============================\n MY STORE\n==============================\n");

for(var i=0; i<NUM_OF_ITEMS; i++){
	items.push({name:faker.commerce.productAdjective()+" "+faker.commerce.productMaterial()+" "+faker.commerce.product() + " from the "+faker.commerce.department()+" department" , price:faker.commerce.price()});
}
for(var i=0;i<NUM_OF_ITEMS; i++){
	console.log(items[i].name+" - "+items[i].price + "\n");
}