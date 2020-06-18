

// TODO
// (43) Exiba o array ordenado no console.
const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 },
];

const newPeople = people.map(person => {
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    score: person.score
  }
});

newPeople.sort((a, b) => {
  return a.score - b.score;
});
console.log(people, newPeople);




