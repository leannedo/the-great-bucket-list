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
    //  ts-migrate(2345) FIXME: Argument of type 'boolean' is not assignable to pa... Remove this comment to see the full error message
    setIsValid(isValid);
  };

  useEffect(() => validate(value));

  return [
    {
      value,
      //  ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
      onChange: (value) => setValue(value),
      validate,
      isValid,
    },
    //  ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
    (value) => setValue(value),
  ];
};
