class QuickFind {

  // interperation of the id array
  // p and q are connected if they have the same id
  private id: Array<number>;
  private N: number;
  private nComponents: number;

  constructor(n: number) {
    this.N = n;
    this.nComponents = n;
    this.id = new Array<number>(n).fill(0);

    // each id or node is connected to only itself. so let them have same value as their id
    this.id.forEach((_, index, array) => {
      array[index] = index;
    })
  }

  // every element that's in same component as p, will have same value in id array.
  // find all such and change them to id of q node
  // N operations everytime a union is performed.
  public union(p: number, q: number): void {

    if(this.connected(p,q)) {
      return;
    }

    const idOfComponentContainingP = this.id[p];
    const idOfComponentContainingQ = this.id[q];

    this.id.forEach((_,index,array) => {
      // if it belongs to component same as p
      if(array[index] === idOfComponentContainingP) {
        // change it to make it a part of component same as q
        array[index] = idOfComponentContainingQ
      }
    })

    this.nComponents -= 1;
  }

  // constant time operation every time connected is performed
  public connected(p: number, q: number): boolean {
    return this.id[p] === this.id[q];
  }

  // same as root(p: number): number
  // every component has one id, lets call it it's root. 
  public find(p: number): number {
    return this.id[p]
  }

  public count(): number {
    return this.nComponents;
  }

  public display(): void {
    const n = this.id.length;
    let result = "";
    for (let i = 0; i < n; i++) {
        result += `${this.id[i]} `;
    }
    console.log(`[${result}]`);
  }
}