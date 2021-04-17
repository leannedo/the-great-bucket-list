// Libraries
import { useState, useEffect } from 'react';

// Utils
import { validate as validateInput } from '../../../utils/validation';

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
