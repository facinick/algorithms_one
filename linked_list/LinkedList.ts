import { Node } from "./node";

class LinkedList<T> {
  private size: number;
  private head: Node<T> | null;
  private comparator: (a: T, b: T) => -1 | 0 | 1;

  constructor(comparator: (a: T, b: T) => -1 | 0 | 1) {
    this.head = null;
    this.size = 0;
    this.comparator = comparator
  }

  append(element: T): boolean {
    return this.insertAtIndex(this.size, element)
  }

  prepend(element: T): boolean {
    return this.insertAtIndex(0, element)
  }

  insertAtIndex(index: number, element: T): boolean {
    if (index < 0 || index > this.size) {
      return false;
    }

    const newNode = new Node<T>(element);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let counter = 0;

      // Traverse to the desired index position
      while (current && counter < index) {
        previous = current;
        current = current.next;
        counter++;
      }

      // Insert at the middle or end
      newNode.next = current;
      if (previous) {
        previous.next = newNode;
      }
    }

    this.size++;
    return true;
  }

  deleteAtIndex(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removedElement: T;

    if (index === 0) {
      if(! this.head) {
        return null;
      }
      removedElement = this.head.value
      this.head = this.head?.next;
    } else {
      let current = this.head;
      let previous = null;
      let counter = 0;

      // Traverse to the node before the target index
      while (current && counter < index) {
        previous = current;
        current = current.next;
        counter++;
      }

      if(!current) {
        return null;
      }

      removedElement = current.value
      // Remove the node
      if (previous) {
        previous.next = current.next;
      }
    }

    this.size--;
    return removedElement;
  }

  pop(): T | null {
    return this.deleteAtIndex(this.size - 1)
  }

  shift(): T | null {
    return this.deleteAtIndex(0)
  }

  delete(element: T): void {
    if (!this.head) return;

    // Check if the head node is the node to be removed
    if (this.comparator(this.head.value, element) === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head.next;
    let previous = this.head;

    /**
     * Search for the node to be removed and keep track of its previous node
     *
     * If it were a double linked list, we could simply search the node
     * and it would have a pointer to the previous node
     **/
    while (current) {
      if (this.comparator(current.value, element) === 0) {
        current = null;
      } else {
        previous = current;
        current = current.next;
      }
    }

    /**
     * set previous.next to the target.next, if the node target is not found,
     * the 'previous' will point to the last node,
     * since the last node hasn't next, nothing will happen
     **/
    previous.next = previous.next ? previous.next.next : null;
  }

  search(data: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (this.comparator(current.value, data)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  print(): void {
    let curr = this.head

    let output = ""

    while (curr !== null) {
      output += `${curr.value} `
      curr = curr.next
    }

    console.log(output)
  }

  getSize(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.head === null && this.size === 0
  }
}

export {
  LinkedList
};
