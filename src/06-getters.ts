export class MyDate {
  constructor (
   public year: number = 1992,
   public month: number = 9,
   private _day: number = 10
   ) {}

   printFormat(): string {
     const day  =  this.addPading(this._day);
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
        this._day += amount;
      }
      if (type === 'months') {
        this.month += amount;
      }
      if (type === 'years') {
        this.year += amount;
      }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0
  }
 }

 const myDate = new MyDate(1992, 10, 20);
 console.log(myDate.printFormat());
 console.log( myDate.day);
 console.log('1992', myDate.isLeapYear);

 const myDate2 = new MyDate(1992, 10, 20);
 console.log('2000',myDate2.isLeapYear);

 const myDate3 = new MyDate(1992, 10, 20);
 console.log('2001',myDate3.isLeapYear);

 const myDate4 = new MyDate(1992, 10, 20);
 console.log('2004',myDate4.isLeapYear);




