# 401 Whiteboarding Exercise Bracket Balancing Problem

White a function called 'isBalanced' that accepts a string of left and right brackets and returns true of the brackets are balanced

Use a stack! Push whenever you se an opening curly brace.
Pop whenever you see a closing curly brace.
If you see a closing curly brace when the stack is empty, that's an error.

Use an array for the stack and using .push() and .pop() is ok.

* '' returns 'true'
* '{' returns 'false'
* '}' returns 'false'
* '{}' returns 'true'
* '}{' returns 'false'
* '{{}}' returns 'true'
* '{{}' returns 'false'
* '}{}' returns 'false'