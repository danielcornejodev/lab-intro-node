class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (!item) {
      throw new Error('OutOfBounds');
    }

    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {

    if (!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList');

    return this.items[this.items.length - 1];
    
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');

    return Math.min(...this.items);
    //return this.items[0];

  }

  sum() {
    //use reduce method
    if(!this.items.length) return 0;

    return this.items.reduce((accum, init) => {
      return accum + init;
    })
  }

  avg() {
    //use reduce method
    if(!this.items.length) return 0;

    return this.sum()/this.length;
  }
}

module.exports = SortedList;
