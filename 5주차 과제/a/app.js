const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function print(element) {
  console.log(element);
}

print(numbers[0]);
print(numbers[1]);

numbers.forEach(function (e1) {
  if (e1 % 2 == 0) {
    console.log(e1);
  }
});

//for (let e1 of numbers) {
//  console.log(e1);
//}

const movies = [
  { title: "amadeus", score: 99 },
  { title: "stand by me", score: 85 },
  { title: "parasite", score: 95 },
  { title: "alien", score: 90 },
];

movies.forEach(function (movie) {
  console.log(`${movie.title}-${movie.score}/100`);
});
