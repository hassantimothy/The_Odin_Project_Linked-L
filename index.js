// Node class represents an individual node in the linked list
class Node {
  constructor(value) {
    this.value = value; // value stored in the node
    this.nextNode = null; // reference to the next node, initially null
  }
}

// LinkedList class manages the linked list structure
class LinkedList {
  constructor() {
    this.head = null; // points to the first node in the list
    this.tail = null; // points to the last node in the list
    this.size = 0; // tracks the number of nodes in the list
  }

  // Appends a new node with the given value to the end of the list
  append(value) {
    // Create a new node
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node after the current tail and update the tail
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++; // Increment the size of the list
  }

  // Prepends a new node with the given value to the start of the list
  prepend(value) {
    // Create a new node
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node before the current head and update the head
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++; // Increment the size of the list
  }

  // Retrieves the node at the specified index in the list
  at(index) {
    // Check for valid index range
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let count = 0;
    // Traverse the list until reaching the desired index
    while (count < index) {
      current = current.nextNode;
      count++;
    }
    return current; // Return the node at the given index
  }

  // Returns the current size of the list
  size() {
    return this.size;
  }

  // Returns the head node of the list
  head() {
    return this.head;
  }

  // Returns the tail node of the list
  tail() {
    return this.tail;
  }

  // Removes and returns the last node from the list
  pop() {
    if (!this.head) return null;

    let current = this.head;
    let previous = null;
    // Traverse the list until reaching the last node
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    // Update the tail and remove the last node
    if (previous) {
      previous.nextNode = null;
      this.tail = previous;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size--; // Decrement the size of the list
    return current.value; // Return the value of the removed node
  }

  // Checks if the given value exists in the list
  contains(value) {
    let current = this.head;
    // Traverse the list and check each node for the value
    while (current) {
      if (current.value === value) {
        return true; // Value found
      }
      current = current.nextNode;
    }
    return false; // Value not found
  }

  // Finds the index of the node containing the given value
  find(value) {
    let current = this.head;
    let index = 0;
    // Traverse the list and search for the value
    while (current) {
      if (current.value === value) {
        return index; // Return the index if value is found
      }
      current = current.nextNode;
      index++;
    }
    return null; // Return null if value is not found
  }

  // Represents the linked list as a string for display purposes
  toString() {
    let result = '';
    let current = this.head;
    // Traverse the list and concatenate node values into a string
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {
    // Check for valid index range
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      // If inserting at the beginning, use the prepend method
      this.prepend(value);
      return;
    } else if (index === this.size) {
      // If inserting at the end, use the append method
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;

    // Traverse the list to the insertion point
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    // Insert the new node at the specified index
    newNode.nextNode = current;
    previous.nextNode = newNode;
    this.size++; // Increment the size of the list
  }

  // Removes the node at the given index from the list
  removeAt(index) {
    // Check for valid index range
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      // If removing the first node, update the head
      this.head = current.nextNode;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--; // Decrement the size of the list
      return current.value; // Return the value of the removed node
    }

    // Traverse the list to the node to be removed
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    // Remove the node at the specified index
    previous.nextNode = current.nextNode;

    // Update the tail if the last node is removed
    if (index === this.size - 1) {
      this.tail = previous;
    }

    this.size--; // Decrement the size of the list
    return current.value; // Return the value of the removed node
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(15, 2);
console.log(linkedList.toString()); // Output: (5) -> (10) -> (15) -> (20) -> null
console.log(linkedList.size); // Output: 4
console.log(linkedList.at(2)); // Output: Node { value: 15, nextNode: Node { value:
