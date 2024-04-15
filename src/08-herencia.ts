export class Animal {
  constructor (public name: string) {
  }

  move () {
    console.log('Moving Along');
  }

  greeting () {
    return `Hello, I am ${this.name}`
  }
}

export class Dog extends Animal{
woof (times: number): void {
  for (let index = 0; index < times; index++) {
    console.log('Woof');
  }
}
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());


const chess = new Dog('chess');
chess.move();
console.log(chess.greeting());
chess.woof(5);
