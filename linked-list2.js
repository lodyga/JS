class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(values = []) {
      this.head = null;
      
      if (values.length > 0) {
        this.createFromArray(values);
      }
    }
    
    // Create linked list from array
    createFromArray(values) {
      if (values.length === 0) return;
      
      // this.head = new ListNode(values[0]);
      // let current = this.head;
      // 
      // for (let i = 1; i < values.length; i++) {
      //   current.next = new ListNode(values[i]);
      //   current = current.next;
      // }
      let node = new ListNode();
      const anchor = node;
      for (const value of values) {
        node.next = new ListNode(value);
        node = node.next;
      }
      this.head = anchor.next;
    }
    
    // Visualize the linked list as a graph (text representation)
    visualize() {
      if (!this.head) {
        console.log("Empty list");
        return;
      }
      
      let current = this.head;
      let output = "";
      
      while (current) {
        output += `(${current.value})`;
        if (current.next) {
          output += " -> ";
        }
        current = current.next;
      }
      
      console.log(output);
    }
    
    // Convert to array for easier inspection
    toArray() {
      const result = [];
      let current = this.head;
      
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      
      return result;
    }
  }
  
  // Example usage:
  const values = [1, 2, 3, 4, 5];
  const linkedList = new LinkedList(values);
  
  console.log("Linked List Visualization:");
  linkedList.visualize();
  
  console.log("\nArray representation:", linkedList.toArray());