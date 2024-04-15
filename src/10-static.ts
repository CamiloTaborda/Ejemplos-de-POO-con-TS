console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6,7,8));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item?  max : item, 0);

    return numbers[0];
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(6,3,3,6,7));
const numbres = [2,3,4,6,555555555]
console.log(MyMath.max(...numbres));



