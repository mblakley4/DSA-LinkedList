'use strict'

class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  insertFirst(item) {
      this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
        this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
         and the item is not on the list */
      if (currNode.next === null) {
          return null;
      }
      else {
          // Otherwise, keep looking
          currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item){
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(nextNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== nextNode)) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found on list');
        return;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }

  insertAfter(prevNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== prevNode)) {
        //save the previous node
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode !== null) {
        console.log('Item not found on list');
        return;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }

  insertAt(index, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode = this.head;
    let i = 0;

    while (i !== index) {
      if (!currNode.next) {
        console.log('This index does not exist use insertLast to add to the end of the list');
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }
    if (currNode === null) {
      console.log('Item not found on list (insertAt)');
      return;
    }

    let pushedItem = prevNode;
    let newItem = new _Node(item, prevNode.next);
    //    console.log(pushedItem);
    pushedItem.next = newItem;
    // to insert & replace use below
    //   this.remove(targetNode);
  }
}

function isEmpty(list) {
	if(!list.head) {
		console.log('List is Empty');
		return true;
	}
	return false;
}

function display(list) {

	if(isEmpty(list)) {
		return;
	}

	let current = list.head;

	while(current !== null) {
		console.log(current.value);
		current = current.next;
	}
	return;
}

function size(list){
	if(isEmpty(list)) {
		return 0;
	}
	let size = 0;
	let current = list.head;
	while(current !== null) {
		current = current.next;
		size++;
	}

	return size;
}

function findPrevious(list, value) {
	if(isEmpty(list)) {
		return null;
	}

	let current = list.head;
	let previous = null;

	while(current.value !== value) {
		previous = current;
		current = current.next;
	}
	return previous.value;
}

function findLast(list) {
	if(isEmpty(list)) {
		return null;
	}

	let last = list.head;
	let current = list.head;

	while(current !== null) {
		last = current;
		current = current.next;
	}
	return last.value;
}


function main() {
	const SLL = new LinkedList();

	isEmpty(SLL);

	SLL.insertLast('Apollo');
	SLL.insertLast('Boomer');
	SLL.insertLast('Helo');
	SLL.insertLast('Husker');
	SLL.insertLast('Starbuck');
	SLL.insertLast('Tauhida');

	SLL.insertBefore('Athena','Boomer');
	SLL.insertAfter('Hotdog','Helo');

	SLL.remove('Tauhida');

	let index = 3;
	SLL.insertAt(index, 'Kat');

	display(SLL);
	console.log('size:', size(SLL));

	console.log('Previous',findPrevious(SLL, 'Starbuck'));
	console.log('Last', findLast(SLL));
}

main();
