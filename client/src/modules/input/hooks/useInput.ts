// Libraries
import { useState, useEffect } from 'react';

// Utils
import { validate as validateInput } from './validation';

/**
 * useInput receives 2 params: initialValue and validationRules
 * @param {string} initialValue
 * @param {Object} validationRules
 * @returns {Array} return an input prop with (value, onChange, validate function, and isValid) and a method to setValue
 */
export const useInput = ({ initialValue = '', validationRules = {} }) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(null);

  const validate = (value) => {
    const isValid = validateInput(value, validationRules);
    setIsValid(isValid);
  };

  useEffect(() => validate(value));

  return [
    {
      value,
      onChange: (value) => setValue(value),
      validate,
      isValid,
    },
    (value) => setValue(value),
  ];
};
