//Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Shubham', 'Saini');
//console.log(person1);

//Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

//Create Customer
const customer1 = new Customer('Sonu', 'Saini', '7206348417', 'Platinum');

console.log(customer1);

//Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} Welcome to our company`;
}
console.log(customer1.greeting());