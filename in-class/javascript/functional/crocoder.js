// https://www.crocoder.dev/blog/map-filter-reduce-exercises/

// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const people = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

let ages = people.map(p => p.age);
let min = Math.min(...ages);
let max = Math.max(...ages);
let ageDifference = max - min;

ages;
min;
max;
ageDifference