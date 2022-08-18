/* - JS kw = class
   - Classes provide a convenient way to dynamically create objects as needed.
   - Encapsulation - process of bundling data together to make access easier
   - Instance: An object created by a class
   - Instantiate: We instantiate a class to create an object
   - Instantiation: The process of creating an object
   - Constructor method is "special" and is automatically called when a class is being instantiated.
   - The purpose of the constructor method is to initialize the data properties of the new object being created (represented by this.)
   - If there are no properties to initialize, the constructor method is optional (A hidden default constructor is called.)
*/

// class Vehicle {

//     // vin: 'X123Y',
//     // make: 'Boeing'

//     constructor(yearParam, vinParam, makeParam, modelParam) {
//         this.year = yearParam
//         this.vin = vinParam;
//         this.make = makeParam;
//         this.model = modelParam;
//         this.running = false;
//     }
//     goVroom() {
//         console.log('vrooooom!');
//     }
//     start() {
//         this.running = true;
//         console.log('running...');
//     }
//     stop() {
//         this.stopping = false;
//         console.log('stopped...');
//     }
//     toString() {
//         return 'Vehicle (' + this.vin + ') is a ' + this.year + ' ' + this.make + ' model: ' + this.model;
//     }
// }

// const v1 = new Vehicle(2011, 'X123Y', 'Chevrolet', 'Malibu');
// const v2 = new Vehicle(2023, '456UJS', 'Ford', 'Mustang v8');
// const v3 = new Vehicle(2022, '123XYZ', 'Tesla', 'Model 3');

// v1.start();
// v2.goVroom();
// v3.stop();

// console.log(v1, v2, v3);

/*    Methods in a Class
   - Prototype (instance) methods: Most common and are available to be called by any instance of the class.
   - Static (class) methods: Called on the class itself and cannot be called by instances

*/

// Prototype example

// const nums = [1, 2, 3]
// nums.forEach((num) => {
//     console.log(num);
// });

// Static example
// console.log(Math.random());

// Overriding Methods
// - Because of the OOP principle called inheritance, subclasses inherit methods from their parent classes.

// console.log(v3.toString());

// Classes Exercises

// 1. 

// class Cat {
//     constructor(furColor, temperament, age) {
//         this.furColor = furColor;
//         this.temperament = temperament;
//         this.age = age;
//         this.scratching = false;
//         this.playing = false;
//     }
//     meow() {
//         console.log('Meoooooow!');
//     }
//     scratch() {
//         this.scratching = true;
//         console.log('scratching up the couch...');
//     }
//     play(answer) {
//         if (answer == true){
//         this.playing = true;
//         console.log('playing with a ball of yarn...');
//         } else if(answer == false) {
//             this.playing = false;
//             console.log('not playing with a ball of yarn...')
//         }
//     }
// }

// const cat1 = new Cat('Orange', 'Evil', 2);
// const cat2 = new Cat('Grey', 'Happy', 5);

// console.log(cat1, cat2);

// cat1.meow();
// cat1.scratch();
// cat1.play(true);

// cat2.meow();
// cat2.scratch();
// cat2.play(false);

// 2.

// class Pirate {
//     constructor(parrot, sword, pegLeg) {
//         this.parrot = parrot;
//         this.sword = sword;
//         this.pegLeg = pegLeg;
//         this.eyePatchOn = true; 
//     }
//     hasEyePatch() {
//         this.eyePatchOn = false;
//         console.log('does not have an eyepatch...');
//     }
//     sayArg() {
//         console.log('Aaaaaaarg matey!!');
//     }
//     dance() {
//         this.dancing = true;
//         console.log('Doing a little pirate dancing...');
//     }
// }

// const jollyRoger = [new Pirate('Pirate 1', 'Pirate 2', 'Pirate 3')];
// const blackPearl = [new Pirate('Pirate 2-1', 'Pirate 2-2', 'Pirate 2-3')];

// // console.log(jollyRoger, blackPearl);

// for (let index = 0; index < jollyRoger.length; index++) {
//     jollyRoger[index].hasEyePatch();
//     jollyRoger[index].sayArg();
//     jollyRoger[index].dance();
// }

// for (let index = 0; index < blackPearl.length; index++) {
//     blackPearl[index].hasEyePatch();
//     blackPearl[index].sayArg();
//     blackPearl[index].dance();
// }

// 3.

// class Car {
//     constructor(number) {
//         this.number = number;
//     }
// }

// const freighter = [];
// for (let index1 = 0, index1 < 100; index1++) {
//     freighter.push(new Car(index1));
// }

// console.log(freighter);

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;  // short-circuit evaluation
//       console.log('inside of Character constructor...')
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
// // child class and/or sub class
// // use extend to inherit properties and methods 
// // from parent and/or super class
// class Hobbit extends Character {
//     constructor(name, age, eyes, hair, height, weight) { // setup parameters...
//         super(name, age, eyes, hair) // pass them as arguments...
//         this.height = height
//         this.weight = weight
//         console.log('inside of Hobbit constructor...')
//     }
//     static steal() {
//         console.log('woohoo!')
//     }
//     greet(name) {
//         console.log('teeheee hi ' + name)
//         super.smite()
        
//     }
// }
// const frodo = new Hobbit('Frodo', 30, 'brown', 'black', 10, 100)
// // console.log(frodo)
// // frodo.greet('Sam')

// Static Methods and Properties Exercise

// class Governor {
//     static politicalParty = 'Democrat';
//     static age = 35;
//     static vetoLaw() {
//         console.log('vetoes the law...');
//     }
// }

// console.log(Governor.politicalParty);
// console.log(Governor.age);
// Governor.vetoLaw();

// Inheritance Exercise

// class Person {
//     constructor(age, hairColor, shirtSize){
//         this.age = age;
//         this.hairColor = hairColor;
//         this.shirtSize = shirtSize;
//     }
//     eats() {
//         console.log('eats food...');
//     }
//     drinks() {
//         console.log('takes a drink...');
//     }
//     sleeps() {
//         console.log('is fast asleep...');
//     }
// }
// class PostalWorker extends Person {
//     static deliversMail() {
//         console.log('delivering the mail...');
//     }
//     static providesPstamp() {
//         console.log('provides a postage stamp...');
//     }
//     static runs() {
//         console.log('runs from angry dogs!')
//     }
// }
// class Chef extends Person {
//     static cooks() {
//         console.log('cooks a delicious meal...');
//     }
//     static yells() {
//         console.log('yells at staff...');
//     }
//     static throwsAway() {
//         console.log('throws away terrible food!')
//     }
// }

// const mailman1 = new Chef(48, 'Black', 'Small');
// const mailman2 = new Chef(31, 'Blonde', 'XXL');
// const chef1 = new Chef(22, 'Brown', 'XL');
// const chef2 = new Chef(57, 'Gray', 'Medium');

// console.log(mailman1);
// console.log(mailman2);
// console.log(chef1);
// console.log(chef2);

// PostalWorker.deliversMail();
// PostalWorker.providesPstamp();
// PostalWorker.runs();
// Chef.cooks();
// Chef.yells();
// Chef.throwsAway();

// Hungry for More Exercise

// class BankAccount {
//     constructor() {
//         this.ownerName = ownerName;
//         this.balance = balance;
//         this.acctNum = Math.floor(Math.random() * 1000);
//     }
//     deposit(depositedAmount) {
//         this.balance += depositedAmount;
//         console.log('You deposited: ' + depositedAmount + '. ' + 'Your new balance is: ' + this.balance + '!');
//     }
//     withdraw(withdrawnAmount) {
//         this.balance -= withdrawnAmount;
//         console.log('You withdrew: ' + withdrawnAmount + '. ' + 'Your current balance after withdraw: ' + this.balance + '!');
//     }
// }
// class CheckingAccount extends BankAccount {
//     constructor(ownerName, balance, overdraftEnabled = true) {
//       super(ownerName, balance) // calls the constructor from parent class (Bank Account)
//       this.overdraftEnabled = overdraftEnabled;
//     }
//   ​
//     withdraw(withdrawnAmount) { 
//       if (withdrawnAmount > this.balance) {
//   ​
//         if (this.overdraftEnabled) {
//   ​
//           let overdraftFee = 20
//           this.balance -= (withdrawnAmount + overdraftFee)
//           console.log('this transaction overdrafts your balance :(')
//   ​
//         } else {
//           console.log('you cannot withdraw more than you have')
//         }
//   ​
//       } else {
//         this.balance -= withdrawnAmount
//         console.log('current balance after withdrawing ' + withdrawnAmount + " is: " + this.balance)
//       }
//     }
//   }
//   ​
//   class SavingsAccount extends BankAccount {
//     withdraw() {
//       console.log('you cannot withdraw from this savings account :(')
//     }
//   }
//   ​
//   ​
//   const lucas = new BankAccount('Lucas', 1000000)
//   const usman = new CheckingAccount('Usman', 1000000)
//   const stephin = new SavingsAccount('Stephin', 5)
//   ​
//   // console.log(lucas)
//   // console.log(usman)
//   // console.log(stephin)
//   ​
//   lucas.withdraw(1000)
//   usman.withdraw(2000000)
//   stephin.withdraw(4) 

// ----------------------------------------------------------------------------------------------------------------------------- //

// Singleton Pattern & Method chaining (Do research!)
class Car {
    constructor (maker, serialNumber) {
      this.maker = maker;
      this.serialNumber = serialNumber;
    }
    drive () {
      console.log('Vroom Vroom');
    }
  }
  class Factory {
    constructor(company) {
      this.company = company;
      this.cars = [];
    }
    generateCar () {
      const newCar = new Car(this.company, this.cars.length);
      this.cars.push(newCar);
      return this
    }
    findCar(index) {
      return this.cars[index];
    }
  }
  // only need one instance (Singleton)
  const tesla = new Factory('Tesla')

