// Libraries
import { useState, useEffect } from "react";

// Utils
import { validate as validateInput } from "./validation";

/**
 * modalReducer receives 2 params: state & action and returns new state for modal
 * @param {string} initialValue
 * @returns {Array} return an input prop with (value and onChange) and a method to setValue
 */
export const useInput = ({ initialValue = "", validationRules = {} }) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(null);

  const validate = (value) => {
    const isValid = validateInput(value, validationRules);
    setIsValid(isValid);
  };

  useEffect(() => validate(value));

  return [
    {
      value: value,
      onChange: (value) => setValue(value),
      validate,
      isValid: isValid,
    },
    (value) => setValue(value),
  ];
};
