
// INSTRUCTIONS

// 	We want to manage customer food orders in a restaurant:

// - An Order has:
// - the customer name(string)
// - the date of the order(string)
// - the list of food orders(array of FoodOrder)

// - An FoodOrder has:
// - the food name(string)
// - the price(number)

// Q1: Create the 2 types.
type Order = { customer: string, date: string, order: Array<FoodOrder> };
type FoodOrder = { food: string, price: number };

// Q2 : Create the following orders:
// - customer = "HIM THE CRAZY"
// - date = "SEP 9"
// - food orders:
// - food : "french fries", price : 12
// - food  : "cambodian fries", price : 1
// - food : "ice scream", price : 4


// - customer = "RONAN THE CRAZY"
// - date = "SEP 10"
// - food orders:
// - food : "coca", price : 12
// - food  : "caco", price : 1
// - food  : "snake", price : 14
// - food  : "chiken", price : 11

let orders = [
	{
		customer: "HIM THE CRAZY",
		date: "SEP 9",
		order: [
			{ food: "french fries", price: 12 },
			{ food: "cambodian fries", price: 1 },
			{ food: "ice scream", price: 4 },
		]
	},
	{
		customer: "RONAN THE CRAZY",
		date: "SEP 10",
		order: [
			{ food: "coca", price: 12 },
			{ food: "caco", price: 1 },
			{ food: "snake", price: 14 },
			{ food: "chiken", price: 11 },
		]
	}
];

// Q3: Create a function that take as parameter a Order, and return the total price of the order
// getTotalPrice(order : Order) : number
function getTotalPrice(order: Order) {
	let total = 0;
	let customerName = order.customer;
	for (let index of order.order){
		total += index.price 
	}
	return "Customer name " + customerName + "had spent " + total + "$";
	
}


// Q4: Create a function that take as parameter a list of Order, and return which order is the most expensive
// getMostExpensive(orders : Order[]) : Order
function getMostExpensive(orders : Order[]){
	let orderTotal = 0;
	for (let value of orders){
		let total = 0;
		for (let index of value.order){
			total += index.price;
		}
		if (orderTotal < total){
			orderTotal = total;
		}
	}
	return orderTotal;
}
// 	* /
for (let value of orders){
	console.log(getTotalPrice(value));
}

console.log("The most expensive is " + getMostExpensive(orders));