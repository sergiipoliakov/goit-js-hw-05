// const objC = {
//   z: 5,
// };
// console.log(objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log(objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA);

// console.log(objB.z);
// console.log(objB.y);
// console.log(objA.x);

// objA.z = 1000;

// console.log(objA.z);

// const dumyObj = Object.create({
//   message: 'это  свойство обьекта прототипа',
// });
// dumyObj.message = 'Это собственное свойство обьекта';

// console.log(dumyObj.message);
// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log(objA);

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('hallo ))');
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// const myCar = new Car({ brand: 'audi', model: 'Q3', price: 35000 });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'bmw', model: 'x5', price: 50000 });
// console.log(myCar2);

// const myCar3 = new Car({});
// console.log(myCar3);

// Write code under this line
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// console.log(Account.prototype);
// Account.prototype.getInfo = function () {
//   return `login: ${this.login}, email: ${this.email}`;
// };
// console.log(typeof Account.prototype.getInfo);

// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango);
// console.log(mango.getInfo());
// // ('login : Mangozedog, email: mango@dog.woof');

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// ('login : Poly, email: poly@mail.com');

//
//
//

// Write code under this line
// const User = function (name, age, followers) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;
// };
// User.prototype.getInfo = function () {
//   return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
// };

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// console.log(mango);

// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// ('function');

// const poly = new User('Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

// class Car1 {
//   static AAA = 'AAA';

//   static logInfo(carObj) {
//     console.log('asdasdd', carObj);
//   }
//   #test = 'test';

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//     console.log(this.#test);
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }
// }

// console.dir(Car1);

// const carInstans = new Car1({ brand: 'audi', model: 'Q3', price: 35000 });

// Car1.logInfo(carInstans);

// carInstans.changePrice(2000);
// console.log(carInstans);

// Write code under this line
// class Storage {
//   constructor(array) {
//     this.items = array;
//   }
//   getItems() {
//     console.log(this.items);
//   }

//   addItem(item) {
//     this.items.push(item);
//   }
// }

// console.log(typeof Storage);
// // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);
// console.log(storage);

// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// // Write code under this line
// class Storage {
//   constructor(array) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     // if (this.items.includes(item)) {
//     //   this.items.pop(item);
//     // }

//     for (let i = 0; i < this.items.length; i += 1) {
//       if (item === this.items[i]) {
//         this.items.splice(i, 1);
//       }
//     }
//   }
// }

// console.log(typeof Storage);
// // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
// 'Дроид'
// ] */

// class C_Hero {
//   static description = 'обект для героя';

//   static printInfo(obj) {
//     console.log(obj.name);
//   }

//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//     this.born = new Date().toString();
//     this._now = new Date().toString();
//   }
//   getNow() {
//     return new Date().toString();
//   }

//   gainXp(amount) {
//     console.log(`${this.name} gained ${amount} expirient points`);
//   }

//   get fullInfo() {
//     return `${this.name} - ${this.xp}`;
//   }

//   set _xp(amount) {
//     this.xp = amount;
//   }
// }

// const hero = new C_Hero('Motaru', 200);
// console.log(hero);
// console.log(hero.fullInfo);

// setTimeout(() => {
//   console.log(hero.born);
// });

//
//
// //

// // Write code under this line
// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   append(string) {
//     this._value += string;
//   }

//   prepend(strin) {
//     this._value = strin + this._value;
//   }
//   pad(stri) {
//     return this.append(stri) + this.prepend(stri);
//   }
//   get value() {
//     return this._value;
//   }
// }

// console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('==');
// console.log(builder.value); // '=^.^='
// console.log(builder.value);
// console.log(builder);
// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `'maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}'
// `;
//   }

//   constructor({ maxSpeed, price } = {}) {
//     this.maxSpeed = maxSpeed;
//     this._price = price;
//     this.isOn = false;
//     this.speed = 0;
//     this.distance = 0;
//   }

//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   accelerate(value) {
//     if (this.maxSpeed > value || this.isOn === true) {
//       this.speed = value;
//     }
//   }
//   decelerate(value) {
//     if (value >= 0) {
//       this.speed -= value;
//     }
//   }
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// // console.log(mustang._isOn);

// mustang.turnOff();
// // console.log(mustang._isOn);
// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// console.log(Car.getSpecs(mustang));

class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }
  //   static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
  //     return `'maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}'
  // `;
  //   }
  constructor({ maxSpeed, price } = {}) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.isOn = false;
    this.speed = 0;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.maxSpeed > value + this.speed) {
      this.speed = value;
    } else {
      this.speed = 0;
    }
  }
  decelerate(value) {
    if (value >= 0) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
