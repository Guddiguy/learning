// ES6 syntax
// new way of defining function, called arrow functions
export const add = (first, second) => first + second;

console.log(add(5, 6))

// destructing

const person = { name: 'James', age: '23'}

const {name, age} = person

console.log(name)
console.log(age)

// spread

const list1 = [1, 2]
const list2 = [3, 4]

const combined_list = [...list1, ...list2]

console.log(combined_list)

const fruits = (...fruit) => console.log(fruit);

fruits('apple', 'banana', 'carrot', 'pineapple', 'water melon', 'quava')


// template literals

const call = 'Jane'

const msg = `My name is ${call}`

console.log(msg)


// module import
import { add } from './hello.js';

console.log(add(2, 3))

// class & object oriented programming

class Person {
    constructor(name) {
        this.name = name;
    }

    // method declaration
    greet() {
        console.log(`Hello, My name is ${this.name}`)

    }
}

const Person1 = new Person('Alice')

Person1.greet()

class Animal {
    constructor(color, name, height) {
        this.color = color;
        this.name = name;
        this.height = height;
    }
    sound(noise) {
        console.log(`${this.name} ${noise}`)
    }
    
}

const animal = new Animal('white', 'cat', '8cm')
animal.sound('meows')

//Higher-order function

// map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const doubled = numbers.map(num => num * 3)
console.log(doubled)

// filter
const even = numbers.filter(num => num <2)

console.log(even)
