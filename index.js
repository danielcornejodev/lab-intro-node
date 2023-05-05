class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (!item) {
      throw new Error('Item cannot be null or undefined');
    }

    let index = this.items.findIndex((element) => element >= item);

    if (index === -1) {
      index = this.items.length;
    }

    this.items.splice(index, 0, item);
    this.length = this.items.length;
  }

  get(pos) {

  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
