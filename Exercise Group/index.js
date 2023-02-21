/* Kelompok Berlin - Group Exercise #01 */
/* Array Exercises */
let people = ["Greg", "Mary", "Devon", "James"];

//NO. 1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//NO. 2
people.forEach(function (data) {
  console.log(data);
});

//NO. 3
people.shift();
console.log(people);

//NO. 4
people.pop();
console.log(people);

//NO. 5
people.unshift("Matt");
console.log(people);

//NO. 6
people.push("Renaldy");
console.log(people);

//NO. 7
for (let i = 0; i < 2; i++) {
  console.log(`welcome to array loop class ${people[i]}`);
}

//NO. 8
let filterPeople = people.slice(2);
console.log(filterPeople);

//NO. 9
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//NO. 10
let withBob = people.concat("Bob");
console.log(withBob);

/* Object Exercises */
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//NO. 1
programming.languages.push("Go");
console.log(programming.languages);

//NO. 2
programming.difficulty = 7;
console.log(programming.difficulty);

//NO. 3
delete programming.jokes;
console.log(programming);

//NO. 4
programming.isFun = true;
console.log(programming);

//NO. 5
let programminglanguages = programming.languages.map(function (items, index) {
  console.log(index + " - " + items);
});
