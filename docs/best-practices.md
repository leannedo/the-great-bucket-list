# Patterns and Practices
This project respects React's design principles and aims for scalability and reusability by leveraging industry-standard best practices and design patterns:

### Immutability
It goes without saying that one cannot ignore Immutability principle when working with React's state. Immutable states will help React to recognize that there are changes in our component and will re-render it, as well as prevent unnecessary side-effects.

Therefore, in our `reducer` function, we will always return a computed new state, without mutating the original state, for example:

```js
// Add new todo without mutating array/object (by using ES6 spread operator)

updatedTodos = [...state.todos, addedTodo];

return {...state, todos: updatedTodos}

```


```js
// Or leveraging ES6 higher-order functions such as `map`, `filter`, `reducer`, etc.

// Remove todo from array
updatedTodos = state.todos.filter((todo) => todo.id !== deletedId

```

### Reusable components and logics
Reusability has always been a main concern for any application development. It will save development time and make it easier to scale and maintain our application.

Adhering to DRY (Don't repeat yourself) principle, several design patterns have been taken into usage to promote reusability, such as:

#### Compound component

Component component is a versatile pattern to help us design our components to be extendable and customisable, and can be used universally. Its core purpose is to let the component's user to define what content (specifically the markup) they would like to render, as well as the order of it.

For example, in our `Modal` component, we receive a `children` props, which is rendered as our Modal's actual content:

```js
...

const Modal = ({ className, children, modalKey, visible }) => {
  ...
  return (
    <div className={`td-modal-wrapper ${visible ? "show" : "hide"}`}>
      <div className={`td-modal ${className}`}>{children}</div>
      <Backdrop closeModalHandler={closeModalHandler} modalVisible={visible} />
    </div>
  );
};
```

Then we can reuse our `Modal` component in different contexts:

```js
// in ConfirmModal component, which is an extension of the Modal component
...
const ConfirmModal = (props) => {
  ...
  return (
      <Modal className={className} visible={isVisible} modalKey={key}>
        <div className="td-confirm-modal">
          <Button onClick={okHandler} type="danger">
            {okText}
          </Button>
          <Button
            onClick={onModalClose}
            className="confirm-modal-cancel-btn"
            type="text"
          >
            {cancelText}
          </Button>
        </div>
      </Modal>
    );
}
```

#### Reusable logic with hooks

Hooks make it easier to write reusable logic and integrate it to our component.

For example, we have a reusable [useInput](https://github.com/leannedo/Assignment/blob/master/client/src/modules/input/hooks/useInput.js) hook, which take the input's initial value, as well as a set of validation rules, then return the input's prop, containing the current input's `value`, `valid` state, an input's `onChange` and `validate` method. We can then reuse this hook for multiple inputs in our form.

```js
// initialize color input's state with useInput

const [colorProp, setColor] = useInput({
    validationRules: { isRequired: true, isHexCode: true },
  });
  
// accessing input's current value
colorProp.value

// triggering input's onChange and validate method
colorProp.onChange(value)
colorProp.validate(value)
  
```
