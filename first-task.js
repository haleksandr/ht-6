// Make unique array of objects [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }] -> [{ a:1, b:2 }, { a:2, c:3 }]
const arr = [
  { a: 1, b: 2 },
  { a: 2, c: 3 },
  { a: 1, b: 2 },
];
// > [{ a:1, b:2 }, { a:2, c:3 }]

let result = arr.filter((obj, index) => {
  return arr.map((obj) => obj[('a', 'b')]).indexOf(obj[('a', 'b')]) === index;
});
console.log(result);
