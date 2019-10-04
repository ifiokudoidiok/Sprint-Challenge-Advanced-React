- [ ] Why would you use class component over function components (removing hooks from the question)?

Removing hooks,  a Class Component is the ability of the last one to hold a state and the functionality that this provides. Also, a class component has direct access to the lifecycles methods of a Component.  
React provides different methods on a Class Component to leverage the power to the user to do specific tasks.


- [ ] Name three lifecycle methods and their purposes.

Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

Mounting – Birth of your component; `componentDidMount()`
Update – Growth of your component `componentDidUpdate()`
Unmount – Death of your component `componentWillUnmount()`


- [ ] What is the purpose of a custom hook?

Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it. This makes it more flexible.



- [ ] Why is it important to test our apps?

## Referencing the Training Kit:
In terms of benefits, testing:

- [ ] Surfaces bugs faster.
- [ ] Reduces the risk of regressions.
- [ ] Allows us to trust the code.
- [ ] Makes us think about the edge cases.
- [ ] Acts as a safety net when making changes or refactoring.
- [ ] Acts as documentation for the code.
- [ ] Encourages us to write more testable (better!) code.

Another thing to note, referencing `Isaac Aderogba`:
`Testing becomes more necessary when you're working in teams. e.g., if someone else refactors my portion of code, then running the test is their way of knowing they haven't broken anything after the refactor`