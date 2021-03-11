let arrEn = ['а', 'с', 'е', 'к', 'п', 'о', 'р', 'х', 'у'];
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
