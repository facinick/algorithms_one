class Percolates {

  private grid: Array<number>;
  private open: Array<number>;
  private weights: Array<number>;
  private GRID_SIZE: number;
  private COUNT_OPEN: number = 0;

  constructor(n: number) {
    this.GRID_SIZE = n;
    this.grid = new Array<number>((this.GRID_SIZE*this.GRID_SIZE)+2).fill(0);
    this.open = new Array<number>((this.GRID_SIZE*this.GRID_SIZE)+2).fill(-1);
    this.open[0] = 1;
    this.open[this.GRID_SIZE*this.GRID_SIZE + 1] = 1;
    this.grid.forEach((v, i, a) => {
      a[i] = i
    })
    this.weights = new Array<number>((this.GRID_SIZE*this.GRID_SIZE)+2).fill(1);
  }

  private findRoot(x: number): number {

    let child = x;
    let parent = this.grid[x];

    while(child !== parent) {
      child = this.grid[parent]
      parent = this.grid[child]
    }

    return parent;
  }

  private isConnected(p: number, q: number): boolean {
    return this.findRoot(p) === this.findRoot(q);
  }

  private isNeighbour(p: number, q: number): boolean {
    const row = Math.floor((p - 1) / this.GRID_SIZE);
    const col = (p - 1) % this.GRID_SIZE;

    if(q === p + 1 && col !== this.GRID_SIZE) {
      return true;
    }

    else if (q === p - 1 && col !== 0) {
      return true;
    }

    else if (q === p + this.GRID_SIZE && row !== this.GRID_SIZE) {
      return true;
    }
    else if (q === p - this.GRID_SIZE && row !== 0) {
      return true;
    }

    else {
      return false;
    }

  }

  private isConnectedInGrid(p: number, q: number): boolean {

    return this.isNeighbour(p,q) && this.findRoot(p) === this.findRoot(q);
  }

  private union(p: number, q: number): void {

    const rootP = this.findRoot(p)
    const rootQ = this.findRoot(q)

    if(rootP === rootQ) {
      return;
    }

    if(this.weights[rootP] < this.weights[rootQ]) {
      this.grid[rootP] = rootQ
      this.weights[rootQ] = this.weights[rootQ] + this.weights[rootP]
    } else {
      this.grid[rootQ] = rootP
      this.weights[rootP] = this.weights[rootQ] + this.weights[rootP]
    }
  }


  private unionNeighbours(x: number): void {

    const row = Math.floor((x - 1) / this.GRID_SIZE);
    const col = (x - 1) % this.GRID_SIZE;

    console.log(`${row}, ${col}`)

    // check left neighbour
    // there is a left neighbour
    if(col !== 0 && this.open[x-1]) {
      console.log(`connecting ${x-1}, ${x}`)
      this.union(x-1, x);
    }
    // check top neighbour
    // there is a top neighbour
    if(row !== 0  && this.open[x-this.GRID_SIZE]) {
      console.log(`connecting ${x-this.GRID_SIZE}, ${x}`)
      this.union(x-this.GRID_SIZE, x);
    } 
    // connect to virtual 0
    else {
      console.log(`connecting ${0}, ${x}`)
      this.union(x, 0);
    }
    // check right neighbour
    if(col !== this.GRID_SIZE - 1 && this.open[x+1]) {
      console.log(`connecting ${x}, ${x+1}`)
      this.union(x+1, x);
    }
    // check bottom neighbour
    if(row !== this.GRID_SIZE - 1 && this.open[x+this.GRID_SIZE]) {
      console.log(`connecting ${x+this.GRID_SIZE}, ${x}`)
      this.union(x+this.GRID_SIZE, x);
    } 
    // connect to virtual n+1
    else {
      console.log(`connecting ${x}, ${this.GRID_SIZE*this.GRID_SIZE + 1}`)
      this.union(x, this.GRID_SIZE*this.GRID_SIZE + 1);
    }
  }

  isPercolating(): boolean {
    return this.isConnected(0, this.GRID_SIZE * this.GRID_SIZE + 1)
  }

  doOpen(x: number): void {
    if(!this.isOpen(x)) {
      this.open[x] = 1
      this.unionNeighbours(x);
    }
  }

  isOpen(x: number): boolean {
    return this.open[x] !== -1
  }

  public display(): void {
    const n = this.grid.length;
    let result = "";
    for (let i = 0; i < n; i++) {
        result += `${this.grid[i]} `;
    }
    console.log(`[${result}]`);
  }

}

export { Percolates };
