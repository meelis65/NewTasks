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

const totalSumOfAges = persons.reduce((accumulator, item) => accumulator + item.age, 0
);
console.log(totalSumOfAges)