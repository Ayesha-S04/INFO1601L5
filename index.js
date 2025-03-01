function newPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  newPerson("Sally", 60, 2.5),
  newPerson("Ben", 81, 3),
  newPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
Back
