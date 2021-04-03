// Libraries
import React, { useEffect, useState } from 'react';

// Components
//  ts-migrate(6142) FIXME: Module '../../Input' was resolved to '/Users/ngocd... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../Input' was resolved to '/Users/ngocd... Remove this comment to see the full error message
import Input from '../../Input';

// Styling
import './TodoInput.scss';

// Hooks
//  ts-migrate(6142) FIXME: Module '../../../modules/category/contexts/Categor... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../../../modules/modal/contexts/ModalConte... Remove this comment to see the full error message
import { useModal } from '../../../modules/modal/contexts/ModalContext';
import { useInput } from '../../../modules/input/hooks/useInput';
//  ts-migrate(6142) FIXME: Module '../../../modules/category/contexts/Categor... Remove this comment to see the full error message
import { useCategory } from '../../../modules/category/contexts/CategoryContext';
//  ts-migrate(6142) FIXME: Module '../../../modules/todo/contexts/TodoContext... Remove this comment to see the full error message
import { useTodo } from '../../../modules/todo/contexts/TodoContext';

const TodoInput = () => {
  /** Extracting state from hooks */
  //  ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
  const { showModal, categorySelectionModal } = useModal();
  //  ts-migrate(2339) FIXME: Property 'onChange' does not exist on type '((valu... Remove this comment to see the full error message
  const { currentSelectedCategory } = useCategory();
  //  ts-migrate(2339) FIXME: Property 'validate' does not exist on type '((valu... Remove this comment to see the full error message
  const { addTodo } = useTodo();

  /** Establish internal state */
  const [todoInput, setTodoInput] = useInput({
    //  ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
    validationRules: { isRequired: true },
  });
  const [categoryBox, setCategoryBox] = useState('#FFFFFF');
  //  ts-migrate(2339) FIXME: Property 'isValid' does not exist on type '((value... Remove this comment to see the full error message
  const [inputTouched, setInputTouched] = useState(false);

  /** Hook to watch changes on current selected category */
  //  ts-migrate(2339) FIXME: Property 'value' does not exist on type '((value: ... Remove this comment to see the full error message
  useEffect(() => setCategoryBox(currentSelectedCategory.colorIndicator), [
    currentSelectedCategory,
  ]);

  //  ts-migrate(2349) FIXME: This expression is not callable.
  const inputChangeHandler = (value) => {
    //  ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
    //  ts-migrate(2339) FIXME: Property 'isValid' does not exist on type '((value... Remove this comment to see the full error message
    if (!inputTouched) {
      setInputTouched(true);
    }

    //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    todoInput.onChange(value);
    //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    todoInput.validate(value);
  };

  /**
   * Add new todo on Enter's key pressed, then reset state
   * @param {event} e
   */
  const addTodoHandler = (e) => {
    // Enter's key code
    if (e.keyCode === 13) {
      //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      //  ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
      if (!todoInput.isValid || !currentSelectedCategory.id) {
        return;
      }

      const todo = {
        //  ts-migrate(2339) FIXME: Property 'isValid' does not exist on type '((value... Remove this comment to see the full error message
        name: todoInput.value,
        categoryId: currentSelectedCategory.id,
        completed: false,
      };
      addTodo(todo);

      //  ts-migrate(2339) FIXME: Property 'value' does not exist on type '((value: ... Remove this comment to see the full error message
      setTodoInput('');
      setInputTouched(false);
      setCategoryBox('#FFFFFF');
    }
  };

  const todoValid =
    //  ts-migrate(2349) FIXME: This expression is not callable.
    !inputTouched || (todoInput.isValid && Boolean(currentSelectedCategory.id));

  return (
    <div className="input-container">
      <div
        //  ts-migrate(2339) FIXME: Property 'isValid' does not exist on type '((value... Remove this comment to see the full error message
        onClick={() => showModal({ key: categorySelectionModal.key })}
        //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className={`input-checkbox ${todoValid ? '' : 'invalid'}`}
        //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        style={{ backgroundColor: `${categoryBox}` }}
      />
      <Input
        value={todoInput.value}
        onChange={inputChangeHandler}
        className="td-input-wrapper"
        //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        placeholder="What's needed to be done?"
        name="text"
        onKeyUpHandler={addTodoHandler}
      />
    </div>
  );
};

export default TodoInput;
