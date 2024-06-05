import { LinkedList } from './LinkedList';

console.log(`hello`)

const ll = new LinkedList<number>((a: number, b: number) => a<b? -1 : a>b ? 1 : 0)
console.log(ll.getSize())
ll.append(5)
ll.append(6)
ll.append(23)
console.log(ll.getSize())
ll.append(25)
ll.append(6)
ll.append(23)
ll.append(25)
console.log(ll.getSize())

ll.pop()
ll.pop()
ll.pop()
ll.pop()
ll.pop()
ll.pop()
ll.pop()
ll.insertAtIndex(1, 4344)

ll.print()


// 5 4344 6 23 25 6

export { LinkedList } from './LinkedList';
