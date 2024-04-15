import { Animal, Dog } from "./09-protected";

const animal = new Animal('elite');
animal.greeting();

const chess = new Dog('chess', 'toño');
chess.greeting();
chess.woof(2);

