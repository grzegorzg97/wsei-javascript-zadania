// zad 1 i zad 2
function Person(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.favDishes = [];

    this.showDetails = function () {
       console.log(`name: ${this.firstName} ${this.lastName} age: ${this.age} country: ${this.country}, ${this.city}, ${this.favDishes}`);
   }
   this.addOneYear = function () {
       ++this.age;
   }
}



const person1 = new Person("Jan", "Kowalski", 63, "Poland", "Krakow", ["gołąbki", "rosół"]);
const person2 = new Person("Monika", "Lewiński", 34, "USA", "Washington",["pizza", "kurczak"]);

person1.addOneYear();
person2.addOneYear();
person2.addOneYear();
person1.showDetails();
person2.showDetails();

Person.prototype.addNewFavDishes = function (name) {
this.favDishes.push(name);
}

Person.prototype.showFavDishes = function () {
console.log("("+this.firstName +" "+ this.lastName + ")"+ " Favourite dishes: " + this.favDishes.join(', '))
}

person1.addNewFavDishes('Lody');
person1.addNewFavDishes('makaron');
person1.showFavDishes();

person1.addNewFavDishes('Kanapka');
person1.showFavDishes();

//zad 3
 function Calculator(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;

    this.add = function () {
        return (this.number1 + this.number2);
    }
    this.substract = function () {
        return (this.number1 - this.number2);
    }
    this.multiply = function () {
        return (this.number1 * this.number2);
    }
    this.division = function () {
        if (!number2 === 0)
            return (this.number1 / this.number2);
        else
            return "Cannot divide by 0!";
    }
}

const calc1 = new Calculator(1, 4);
const calc2 = new Calculator(2, 0)
console.log(calc1.add());
console.log(calc1.multiply());

console.log(calc2.substract());
console.log(calc2.division());

//zad 4

function Constructor(){
    this.number = 0;
    
    this.up = function() {
        this.number++;
    }
    
    this.down = function() {
        if(this.number > 0){
            this.number--;
        }
        else{
            console.log("Jesteś na ziemi.");
        }        
    }
    
    this.showLevel = function() {
        console.log(this.number);
    }
}

var constructor = new Constructor();

constructor.showLevel();
constructor.up();
constructor.up();
constructor.showLevel();
constructor.down();
constructor.showLevel();
