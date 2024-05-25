// import { QuickUnion } from './QuickUnion';
// const qu = new QuickUnion(10);

import { randomNumberBetween } from "./helper";
import { Percolates } from "./percolates";

// qu.display()
// qu.union(4,3);
// qu.display()
// qu.union(3,8);
// qu.display()
// qu.union(6,5);
// qu.display()
// qu.union(9,4);
// qu.display()
// qu.union(2,1);
// qu.display()
// qu.union(5,0);
// qu.display()
// qu.union(7,2);
// qu.display()
// qu.union(6,1);
// qu.display()
// qu.union(7,3);
// qu.display()

/*
[0 1 2 3 4 5 6 7 8 9 ]
[0 1 2 3 3 5 6 7 8 9 ]
[0 1 2 8 3 5 6 7 8 9 ]
[0 1 2 8 3 5 5 7 8 9 ]
[0 1 2 8 3 5 5 7 8 8 ]
[0 1 1 8 3 5 5 7 8 8 ]
[0 1 1 8 3 0 5 7 8 8 ]
[0 1 1 8 3 0 5 1 8 8 ]
[1 1 1 8 3 0 5 1 8 8 ]
[1 8 1 8 3 0 5 1 8 8 ]
*/

// const wqu = new WeightedQuickUnion(10);

// wqu.display()
// wqu.union(4,3);
// wqu.display()
// wqu.union(3,8);
// wqu.display()
// wqu.union(6,5);
// wqu.display()
// wqu.union(9,4);
// wqu.display()
// wqu.union(2,1);
// wqu.display()
// wqu.union(5,0);
// wqu.display()
// wqu.union(7,2);
// wqu.display()
// wqu.union(6,1);
// wqu.display()
// wqu.union(7,3);
// wqu.display()

/*
[0 1 2 3 4 5 6 7 8 9 ]
[0 1 2 4 4 5 6 7 8 9 ]
[0 1 2 4 4 5 6 7 4 9 ]
[0 1 2 4 4 6 6 7 4 9 ]
[0 1 2 4 4 6 6 7 4 4 ]
[0 2 2 4 4 6 6 7 4 4 ]
[6 2 2 4 4 6 6 7 4 4 ]
[6 2 2 4 4 6 6 2 4 4 ]
[6 2 6 4 4 6 6 2 4 4 ]
[6 2 6 4 6 6 6 2 4 4 ]
*/

const p = new Percolates(4,4);
p.display();

for( let i=0; i<16; i++) {
  const siteToOpen = randomNumberBetween(1,16)
  console.log(`Opening ${siteToOpen}`);
  p.openSite(siteToOpen);
  p.display();
  if(p.percolating()) {
    console.log(`System Percolating.`);
    console.log(p.count())
    break;
  }
}


/*
        0
1   2   3   4   5
6   7   8   9   10
11  12  13  14  15
16  17  18  19  20
21  22  23  24  25
        26
*/

/*
        0
1   2   3   X   X
X   7   8   X   10
11  12  13  14  15
X   X   X   X   20
21  X   23  24  X
        26
*/
