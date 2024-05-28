import { BinarySearch } from "../binary_search";


class ThreeSum {

  private _data: Array<number>
  private _sum: number;

  constructor(data: Array<number>, sum: number = 0) {
    this._data = data;
    this._sum = sum;
  }

  find(): Array<Array<number>> {

    const SORT_SEARCH_COMPARATOR = (p: number, q: number) => p<q ? -1 : p>q ? 1 : 0;

    this._data = this._data.sort(SORT_SEARCH_COMPARATOR)

    const bs = new BinarySearch<number>(this._data, SORT_SEARCH_COMPARATOR)

    const solutions = []

    for(let i=0; i<this._data.length; i++) {
      for(let j=i+1; j<this._data.length; j++) {
        let third = bs.search(this._sum - (this._data[i] + this._data[j]))
        if(third !== -1) {
          solutions.push([this._data[i], this._data[j], this._data[third]])
          continue;
        }
      }
    }

    return solutions
  }
}

export {
  ThreeSum
};
