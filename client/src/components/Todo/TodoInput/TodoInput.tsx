// Libraries
import React, { useEffect, useState } from 'react';

// Components
import Input from '../../Input';

// Styling
import './TodoInput.scss';

// Hooks
import { useModal } from '../../../modules/modal/context/ModalContext';
import { useInput } from '../../../modules/input/hooks/useInput';
import { useCategory } from '../../../modules/category/context/CategoryContext';
import { useTodo } from '../../../modules/todo/contexts/TodoContext';
import { ModalKeys } from '../../../modules/modal/types';

const TodoInput = (): JSX.Element => {
  const { showModal } = useModal();
  const { currentSelectedCategory } = useCategory();
  const { addTodo } = useTodo();

  const [todoInput, setTodoInput] = useInput({
    validationRules: { isRequired: true },
  });
  const [categoryBox, setCategoryBox] = useState('#FFFFFF');
  const [inputTouched, setInputTouched] = useState(false);

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

  const addTodoHandler = (e) => {
    if (e.keyCode === 13) {
      if (!todoInput.isValid || !currentSelectedCategory.id) {
        return;
      }

      const todo = {
        name: todoInput.value,
        categoryId: currentSelectedCategory.id,
        completed: false,
      };
      addTodo(todo);

      setTodoInput('');
      setInputTouched(false);
      setCategoryBox('#FFFFFF');
    }
  };

  const todoValid =
    !inputTouched || (todoInput.isValid && Boolean(currentSelectedCategory.id));

  return (
    <div className="input-container">
      <div
        onClick={() => showModal(ModalKeys.CATEGORY_SELECTION_MODAL)}
        className={`input-checkbox ${todoValid ? '' : 'invalid'}`}
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
