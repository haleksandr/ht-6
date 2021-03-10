let arrEn = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let lettersEn = [{ е: 'e' }, { р: 'p' }, { о: 'o' }];
let str = 'дерево';
let arr = str.split('');
let result = [];

for (let i = 0; i < arrEn.length; i++) {
  for (let y = 0; y < arr.length; y++) {
    if (arr[y] == arrEn[i]) {
      result.push(arr[y]);
    }
  }
}
console.log(result);
