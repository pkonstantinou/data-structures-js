class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const mid = Math.floor(index / 2);
    let node;
    let counter;
    if (index <= mid) {
      node = this.head;
      counter = 0;

      while (counter < index) {
        node = node.next;
        counter++;
      }
    } else {
      node = this.tail;
      counter = this.length - 1;

      while (counter > index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }
}

const list = new DoublyLinkedList();
list.push('here');
list.push('we');
list.push('are');

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
