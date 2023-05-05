class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (!item) {
      throw new Error('OutOfBounds');
    }

    let index = this.items.findIndex((element) => element >= item);

    //In most languages, -1 is a number that cannot represent an array index. Therefore, if .findIndex() method returns -1 it means that there is no such element for sure
    if (index === -1) {
      index = this.items.length;
    }

    //injecting the item being a number in this case at the end if does not exist, otherwise, gets injected at position of first occurance.  
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
