export class MyDate {
  constructor (
   public year: number = 1992,
   private _month: number = 9,
   private _day: number = 10
   ) {}

   printFormat(): string {
     const day  =  this.addPading(this._day);
     const month  =  this.addPading(this._month);
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
        this._month += amount;
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

  get month () {
    return this._month;
  }

  set month(newValue: number) {
     if (newValue >= 1 && newValue <= 12) {
      this._month = newValue
     } else {
      throw new Error('month out of range')
     }
  }
 }

 const myDate = new MyDate(1992, 10, 20);
 console.log(myDate.printFormat())
 myDate.month = 4;
 console.log('run', myDate.month);
 myDate.month = 78;
 console.log('Esto no debe aparecer', myDate.month);




