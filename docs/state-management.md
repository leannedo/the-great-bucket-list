# State management

State management is one of the most critical, yet complicated part of every React application. Large projects usually rely on State Management libraries such as Redux (industry standard) for a scalable and maintainable solution.

However, for small projects (like this one), React built-in `Context API` and `Hooks` are a nice and convenient way, yet still powerful enough to reduce the hassle of state management, as well as keeping the integrity of our application. Plus, we don't need to install other dependencies (which might add extra kb to our bundle size) !

In this project, `Contexts` and `Hooks` are separated according to the application's domain, for example:

```bash
├── category
│   |   ├── contexts
│   |   ├── hooks
```

### Context

- `Context` provides a complete global state management solution. It serves act as a "data center" for our application's states, and is responsible for streamlining data accross our component's tree. Any components can subscribe to Contexts to get necessary data:

```js
// in CategoryList.js

import { useCategory } from "../../modules/category/contexts/CategoryContext";

const CategoryList = ({ className, onCategoryClick }) => {
  const { categories } = useCategory();

  return (
    <div className={className}>
      <div className="td-category-list">
        {categories.map((el, id) => (
          <Category
            key={id}
            category={el}
            onClick={(category) => onCategoryClick(category)}
          />
        ))}
        ....
        </div>
      </div>
    </div>
  );
};

```

### Hooks

- `Hooks`, on the other hand, supply state management's logic, with the help of `Reducer` pattern.

Each hook will have its own `reducer` function, which will compute the new states based on the `action` type and payload. It is useful for computing multiple states at once (which is usually a hassle with normal `useState`).

```js
// todoReducer.js
// where we need to compute multiple state at once

....
const todoReducer = (currentState, { type, payload }) => {
  ....
  
  case "ADD_TODO":
      const { todo: addedTodo } = payload;

      updatedTodos = [...state.todos, addedTodo];
      uncompletedCount = updatedTodos.filter((todo) => !todo.completed).length;
      completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount: uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length
        ),
      };
      
  ....
}

```

With the help of React built-in `useReducer`, we can always get the updated state, as well as a `dispatch` function to dispatch our actions to the reducer:

```js
....
// in TodoHooks

const [state, dispatch] = useReducer(todoReducer, initialState);

...

// dispatching action

const addTodo = (todo) => {
  postTodo(todo, (resData) => {
    if (resData) {
      dispatch({ type: "ADD_TODO", payload: { todo: resData } });
    }
  });
};

```
