// 1. Створити клас Людина.
//     Властивості:
// імʼя;
// вік.
//     Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити клас Автомобіль.
//     Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
//     Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
//
// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.


// !!! (для ментора) Пока что Сущности мы создаем как конструктор, а не отдельный класс в отдельном файле. Но я сделала и так и так.

// Вариант создания классов

console.log('______HW 20_______');


class People {
    #name;
    age;
    cars = [];

    /**
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    personInfo = function () {
        console.log(this);
    }
}


class Car {
    #make;
    #model;
    #yearManufacture;
    #numPlate;
    ownerCar = null;

    /**
     * @param {string} make
     * @param {string} model
     * @param {number} yearManufacture
     * @param {string} numPlate
     * @property {string} make
     * @property {string} model
     * @property {number} yearManufacture
     * @property {string} numPlate
     */
    constructor(make, model, yearManufacture, numPlate) {
        this.#make = make;
        this.#model = model;
        this.#yearManufacture = yearManufacture;
        this.#numPlate = numPlate;
    }

    /**
     * @param {People} people
     */
    setOwner = (people) => {
        if (people.age >= 18) {
            this.ownerCar = people;
            people.cars.push(this);
        } else {
            console.log('You are under the age of 18, you are not allowed to drive');
        }
    }

    carInfo = () => {
        console.log(this);
        if (this.ownerCar !== null) {
            this.ownerCar.personInfo();
        } else {
            console.log('This car has no owner');
        }
    }
}

console.log('Сутності з використанням класів'.toUpperCase());


const people1 = new People('people1', 20);
// people1.personInfo();
const people2 = new People('people2', 16);
// people2.personInfo();

const car1 = new Car('Toyota', 'Camry', 2019, 'AE100');
const car2 = new Car('Honda', 'Accord', 2018, 'AE250');

car1.setOwner(people1);
car2.setOwner(people2);

car1.carInfo();
car2.carInfo();



//Вариант создания сущностей через конструктор
console.log('Сутності з використанням функції Конструктор'.toUpperCase());

/**
 * @param {string} name
 * @param {number} age
 * @constructor
 * @property {string} name
 * @property {number} age
 * @property {Car2[]} cars
 */
function People2(name, age) {   // !!!!! Через что правильнее в этом случае принимать параметры?
    // Тут function People2(name, age) или через ниже метод КонструкторПипл? И как инициализировать тогда свойства, у меня можно изменять в 2х местах?
    // Если не запрашивать параметры сразу в function People2(name, age), то ниже свойства не получается инициализировать.

    this.name = name;
    this.age = age;
    this.cars = [];

    /**
     * @param {string} name
     * @param {number} age
     */
    this.constructorPeople = (name, age) => {
        this.name = name;
        this.age = age;
    }

    this.personInfo = function () {
        console.log(this);
    }
}

/**
 * @param {string} make
 * @param {string} model
 * @param {number} yearManufacture
 * @param {string} numPlate
 * @constructor
 * @property {string} make
 * @property {string} model
 * @property {number} yearManufacture
 * @property {string} numPlate
 * @property {People2} ownerCar
 */
function Car2(make, model, yearManufacture, numPlate) {
    this.make = make;
    this.model = model;
    this.yearManufacture = yearManufacture;
    this.numPlate = numPlate;
    this.ownerCar = null;

    /**
     * @param {string} make
     * @param {string} model
     * @param {number} yearManufacture
     * @param {string} numPlate
     */
    this.constructorCar = (make, model, yearManufacture, numPlate) => {
        this.make = make;
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.numPlate = numPlate;
    }

    /**
     * @param {People2} people
     */
    this.setOwner = function (people) {
        if (people.age >= 18) {
            this.ownerCar = people;
            people.cars.push(this);
        } else {
            console.log('You are under the age of 18, you are not allowed to drive');
        }
    }

    this.carInfo = function () {
        console.log(this);
        if (this.ownerCar !== null) {
            this.ownerCar.personInfo();
        } else {
            console.log('This car has no owner');
        }
    }
}

const people3 = new People2('people3', 30);
// people3.personInfo();
people3.constructorPeople('3', 33);
// people3.personInfo();

const people4 = new People2('people4', 17);
// people4.personInfo();

const car3 = new Car2('Nissan', 'Passat', 2005, 'AE325');
const car4 = new Car2('Lexus', '350XL', 2015, 'AE200');

car3.setOwner(people3);
car4.setOwner(people4);

car3.carInfo();
car4.carInfo();