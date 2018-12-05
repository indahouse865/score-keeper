import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
    class Person {
        constructor (name = 'Anon', age = 99) {
            this.name = name;
            this.age = age
        }
        getGreeting() {
            return `Hi I am ${this.name}`
        }
        getPersonDescription() {
            return `${this.name} is ${this.age} year(s) old.`

        }
    }

    class Employee extends Person {
        constructor (name, age, title) {
            super(name, age);
            this.title = title;
        }
        getGreeting() {
            if (this.title) {
                return `Hi I am ${this.name}. I work as a ${this.title}.`
            } else {
                return super.getGreeting();
            }
        }
        hasJob() {
            return !!this.title
        }
    }

    class Programmer extends Person {
        constructor (name, age, language = 'assembly') {
            super(name, age);
            this.language = language;
        }
        getGreeting() {
            if (this.language) {
                return `Hi I am ${this.name}. My favorite language is ${this.language}.`
            } else {
                return super.getGreeting();
            }
        }
    }

    let me = new Employee("Dave", 24, "Solutions Engineer");
    console.log(me.getGreeting());

    let employee = new Employee("Liz", 23, "UX Researcher");
    console.log(employee.getPersonDescription());

    let programmer = new Programmer("Connor", 26, "Javascript");
    console.log(programmer.getGreeting());

    let dan = new Programmer();
    console.log(dan.getGreeting());


});