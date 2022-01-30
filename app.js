//Name variable
let myName = 'Abdul'

console.log(myName)

//Number variable
const numOfStates = 50

console.log(numOfStates)

//Multiplication function
let adding = (a, b) => {
    return a * b
}

console.log(adding(5, 4))

//A function that creates a pop up alert
const sayHello = () => {
    alert('Hello World!')
}

sayHello()

//This function checks the age of a user and pops up an alert if the user is too young 
const checkAge = (name, age) => {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page")
    }
}

checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

//An array of my favorite vegetables
let favVeggies = ['Carrot', 'Broccoli', 'Corn', 'Okra', 'Olives']

//A for loop that console logs the items in the above array
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
    
}

//An object of info about a pet
let pet = {
    name: 'Dusk',
    breed: 'Siberian'
}

console.log(pet)

//An array of objects containing info
let arrayOfObjs = [
    {
        name: 'Josh',
        age: 25
    },
    {
        name: 'Garrett',
        age: 24
    },
    {
        name: 'Jabril',
        age: 18
    },
    {
        name: 'Sajid',
        age: 16
    },
    {
        name: 'Wali',
        age: 16
    }
]

    for (let i = 0; i < arrayOfObjs.length; i++) {
        checkAge(arrayOfObjs[i].name, arrayOfObjs[i].age);
    }

    const getLength = (word) => {
        return word.length
    }

    let stringLength = getLength('Hello World!');
     if (stringLength % 2 == 0) {
         console.log('The world is nice and even!')
     } else {
         console.log('The world is an odd place!')
     }


