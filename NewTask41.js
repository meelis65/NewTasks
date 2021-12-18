const persons = [
    {
    name: 'Julia',
    age: 27
    },
    {
    name: 'Martin',
    age: 45
    },
    {
    name: 'Taavi',
    age: 17
    },
    {
    name: 'Emma',
    age: 2
    },
    {
    name: 'Ricky',
    age: 62
    }
    ]
const boyNames = ['Martin', 'Taavi', 'Ricky']
const girlNames = ['Julia', 'Emma']

const people = { 
boys: persons.filter(function(item) {
    return boyNames.indexOf(item.name) !== -1;
}),
girls: persons.filter(function(item) {
    return girlNames.indexOf(item.name) !== -1;
})
}

console.log("People: ",people);

const boysYoungerThan = persons.filter(function(item) {
    return boyNames.indexOf(item.name) !== -1;
}).filter((p) => {
    if (p.age < 30) {
        return p
    }
  })

const girlsYoungerThan = persons.filter(function(item) {
    return girlNames.indexOf(item.name) !== -1;
}).filter((p) => {
    if (p.age < 30) {
        return p
    }
  })

console.log('Boys younger than 30: ', boysYoungerThan)
console.log('Girls younger than 30: ', girlsYoungerThan)