Write a function called isSorted that accepts a linked list as a parameter and returns true if the linked list is sorted in ascending order,

an emtpy or single item list should be considered sorted because it's NOT not sorted.

stretch goal: return true if it's either ascending or descending.

```
function isSorted(linkedList) {
  if (linkedList.length === 0 || linkedList.length === 1) {
    return true;
  }
  let currentNode = linkedList.root;
  let nextNode = currentNode.next();
  if (currentNode.val < nextNode) {
    while (currentNode !== null) {
     if (currentNode.val >= nextNode.val) {
        return false;
      } else {
        currentNode = nextNode;
        nextNode = nextNode.next();
      }
    }
    return true;
  } else if (currentNode.val > nextNode) {
    while (currentNode !== null) {
      if (currentNode.val >= nextNode.val) {
        return false;
      } else {
        currentNode = nextNode;
        nextNode = nextNode.next();
      }
    }
    return true;
  }  
}
```