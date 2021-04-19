// Libraries
import React, { useEffect, useState } from 'react';

// Components
import Input from '../../../../components/Input';

// Styling
import './TodoInput.scss';

// Hooks
import { useModal } from '../../../modal/context/ModalContext';
import { useCategory } from '../../../category/context/CategoryContext';
import { useTodo } from '../../contexts/TodoContext';
import { ModalKeys } from '../../../modal/types';

const TodoInput = (): JSX.Element => {
  const { showModal } = useModal();
  const { currentSelectedCategory } = useCategory();
  const { addTodo } = useTodo();

  const [todoInput, setTodoInput] = useState('');
  const [isPristine, setIsPristine] = useState(true);
  const [categoryBox, setCategoryBox] = useState('#fff');

  useEffect(() => setCategoryBox(currentSelectedCategory.colorIndicator), [
    currentSelectedCategory,
  ]);

  const inputChangeHandler = (value: string) => {
    setTodoInput(value);
  };

  const isTodoValid = () => {
    return isPristine || Boolean(todoInput && currentSelectedCategory.id);
  };

  const addTodoHandler = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    if (isPristine) {
      setIsPristine(false);
    }

    if (!todoInput || !currentSelectedCategory.id) {
      return;
    }

    const todo = {
      name: todoInput,
      categoryId: currentSelectedCategory.id,
      completed: false,
    };
    addTodo(todo);

    // reset states
    setTodoInput('');
    setIsPristine(true);
    setCategoryBox('#fff');
  };

  return (
    <div className="input-container">
      <div
        role="option"
        onClick={() => showModal(ModalKeys.CATEGORY_SELECTION_MODAL)}
        className={`input-checkbox ${isTodoValid() ? '' : 'invalid'}`}
        style={{ backgroundColor: `${categoryBox}` }}
      />
      <Input
        value={todoInput}
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
