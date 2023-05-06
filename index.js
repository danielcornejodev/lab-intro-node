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
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items);
    
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
