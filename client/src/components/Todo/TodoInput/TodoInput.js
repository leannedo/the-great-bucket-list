// Libraries
import React, { useEffect, useState } from "react";

// Components
import Input from "../../Input";

// Styling
import "./TodoInput.scss";

// Hooks
import { useModal } from "../../../modules/modal/contexts/ModalContext";
import { useInput } from "../../../modules/input/hooks/useInput";
import { useCategory } from "../../../modules/category/contexts/CategoryContext";
import { useTodo } from "../../../modules/todo/contexts/TodoContext";

const TodoInput = () => {
  /** Extracting state from hooks */
  const { showModal, categorySelectionModal } = useModal();
  const { currentSelectedCategory } = useCategory();
  const { addTodo } = useTodo();

  /** Establish internal state */
  const [todoInput, setTodoInput] = useInput({
    validationRules: { isRequired: true },
  });
  const [categoryBox, setCategoryBox] = useState("#FFFFFF");
  const [inputTouched, setInputTouched] = useState(false);

  /** Hook to watch changes on current selected category */
  useEffect(() => setCategoryBox(currentSelectedCategory.colorIndicator), [
    currentSelectedCategory,
  ]);

  const inputChangeHandler = (value) => {
    if (!inputTouched) {
      setInputTouched(true);
    }

    todoInput.onChange(value);
    todoInput.validate(value);
  };

  /**
   * Add new todo on Enter's key pressed, then reset state
   * @param {event} e
   */
  const addTodoHandler = (e) => {
    // Enter's key code
    if (e.keyCode === 13) {
      if (!todoInput.isValid || !currentSelectedCategory.id) {
        return;
      }

      addTodo({
        content: todoInput.value,
        categoryId: currentSelectedCategory.id,
      });
      setTodoInput("");
      setInputTouched(false);
      setCategoryBox("#FFFFFF");
    }
  };

  const todoValid =
    !inputTouched || (todoInput.isValid && Boolean(currentSelectedCategory.id));

  return (
    <div className="input-container">
      <div
        onClick={() => showModal({ key: categorySelectionModal.key })}
        className={`input-checkbox ${todoValid ? "" : "invalid"}`}
        style={{ backgroundColor: `${categoryBox}` }}
      />
      <Input
        value={todoInput.value}
        onChange={inputChangeHandler}
        className="td-input-wrapper"
        placeholder="What's needed to be done?"
        name="text"
        onKeyUpHandler={addTodoHandler}
      />
    </div>
  );
};

export default TodoInput;
