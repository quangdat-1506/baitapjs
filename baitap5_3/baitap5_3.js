// Bài 1 (Pet)
class Pet {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`Tôi tên là ${this.name}.`);
    }
    talk(sound) {
        console.log(`${sound}`);
    }
}

class Dog extends Pet {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    introduce() {
        super.introduce();
        console.log(`Tôi tên là ${this.breed}.`);
    }
    talk() {
        super.talk('Woof!');
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.introduce();
myDog.talk();

// Chuyển function thành class trong slide 37
class Constructor {
    constructor(val) {
        this.properties_2 = 'bubble';
        this.properties_3 = val;
    }
}
const obj = new Constructor('bub');
alert(obj.properties_3);

// Chuyển function thành class trong slide 51
class myDisplayer {
    display(something) {
        document.getElementById("demo").innerHTML = something;
    }
}
class MyCalculator {
    constructor(callback) {
        this.callback = callback;
    }
    calculate(num1, num2) {
        let sum = num1 + num2;
        this.callback(sum);
    }
}
const calculator = new MyCalculator(new myDisplayer().display);
calculator.calculate(5, 5);