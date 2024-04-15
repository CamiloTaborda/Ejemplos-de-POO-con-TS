export class Animal {
  constructor (protected name: string) {
  }

  move () {
    console.log('Moving Along');
  }

  greeting () {
    return `Hello, I am ${this.name}`
  }

   protected doSomenthing() {
    console.log('doo');

  }
}

export class Dog extends Animal{
  constructor (
    name: string,
    public owner: string,
  ) {
    super(name);
  }

woof (times: number): void {
  for (let index = 0; index < times; index++) {
    console.log(`Woof ${this.name}`);
  }
  this.doSomenthing();
}

move() {
  console.log('moviendome como chango');
  super.move();
}
}

const chess = new Dog('chess', 'toño');
// chess.name = 'perrito';
chess.woof(1)
chess.move()


