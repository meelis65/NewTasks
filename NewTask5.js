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
const peopleUpperKeys = persons.map(item => Object.fromEntries(Object.entries(item).map(([key, val]) => [
  key.toUpperCase(),
  val
])));

console.log(peopleUpperKeys)
