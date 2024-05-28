class BinarySearch<T> {
  private array: T[];
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  constructor(array: T[], comparator: (a: T, b: T) => -1 | 0 | 1) {
      this.array = array;
      this.comparator = comparator;
  }

  search(target: T): number {
      let left = 0;
      let right = this.array.length - 1;

      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          const comparison = this.comparator(this.array[mid], target);

          if (comparison === 0) {
              return mid; 
          } else if (comparison < 0) {
              left = mid + 1; 
          } else {
              right = mid - 1; 
          }
      }

      return -1; 
  }
}

export {
  BinarySearch
};

