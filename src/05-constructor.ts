export class MyDate {
 constructor (
  public year: number = 1992,
  public month: number = 9,
  private day: number = 10
  ) {}

  printFormat(): string {
    const day  =  this.addPading(this.day);
    const month  =  this.addPading(this.month);
   return `${day}/${month}/${this.year}`;
 }

 private addPading (value: number) {
   if (value < 10) {
    return `0${value}`
   }
   return `${value}`;
 }

  add(amount: number, type: 'days' | 'months' | 'years') {
     if (type === 'days') {
       this.day += amount;
     }
     if (type === 'months') {
       this.month += amount;
     }
     if (type === 'years') {
       this.year += amount;
     }
 }
}

const myDate = new MyDate(1992, 10, 20);
console.log(myDate.printFormat());

const myDate2 = new MyDate(1992, 10, 20);
console.log('()', myDate2.printFormat());


const myDate3 = new MyDate(1992, 10, 20);
console.log('(2022)', myDate3.printFormat());


const myDate4= new MyDate(1992, 10, 20);
console.log('(2022, 3)', myDate4.printFormat());



