# Merge Two Sorted Linked Lists
Write a function called `merge` that accepts two sorted
Linked Lists and zips them together into one sorted Linked
List.

Be sure to draw pictures on the whiteboard to represent
example input. Use psuedo code to engineer any particularly
tricky pieces of code.

Given:

```
8 -> 12 -> 14
9 -> 13
```

Return:

```
8 -> 9 -> 12 -> 13 -> 14
```

# Possible Solution
```javascript
  function (l1, l2) {
    let merged = new LinkedList();
    let n1 = l1.root;
    let n2 = l2.root;
    if (n1.val < n2.val) {
      merged.root = n1;
      n1 = n1.next;
    } else {
      merged.root = n2;
      n2 = n2.next;
    }
    let last = merged.root;
    while (n1 !== null && n2 !== null) {
      if (n1.val < n2.val) {
        last.next = n1;
        n1 = n1.next;
      } else if (n2.val < n2.val) {
        last.next = n2;
        n2 = n2.next;
      }
      last = last.next;
    }
    while (n1) {
      last.next = n1;
      n1 = n1.next;
    }
    while (n2) {
      last.next = n2;
      n2 = n2.next;
    }
    return merged;
  }
```