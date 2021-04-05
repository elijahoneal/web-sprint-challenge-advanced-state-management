# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API is a hook that allows components to share data outside the parent-child relationship. It solves the issue of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions dispatch objects with a defined 'type' and sometimes a payload. Reducers take a state object and return a new state. The store contains all the state in Redux.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

redux-thunk allows us to dispatch multiple actions at once or change state.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API is my favorite so far. It is straightforward and although components become less reusable, I find it easier to setup than Redux.