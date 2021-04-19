// Libraries
import { useState, useEffect } from 'react';
import { validate, ValidationRules } from '../utils/validation';

export interface FormControls {
  [key: string]: FormElement;
}

export interface FormElement {
  inputName: string;
  label?: string;
  value?: string;
  valid?: boolean;
  touched?: boolean;
  validationRules?: ValidationRules<string | number | boolean>;
}

interface IUseForm {
  form: FormControls;
  isFormValid: boolean;
  inputChangeHandler: (value: string, fieldName: string) => void;
  setForm: (form: FormControls) => void;
  onFormSubmit: () => Record<string, string>;
  clearForm: () => void;
}

const useForm = (initialFormControls: FormControls = {}): IUseForm => {
  const [form, setForm] = useState(initialFormControls);
  const [isFormValid, setIsFormValid] = useState(null);

  const inputChangeHandler = (value, fieldName) => {
    if (!(fieldName in form)) {
      return;
    }

    const { validationRules } = form[fieldName];

    const isValid = validationRules ? validate(value, validationRules) : true;

    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        touched: true,
        valid: isValid,
      },
    });
  };

  const validateForm = () => {
    const validatedForm = { ...form };

    for (const fieldName in form) {
      if (form.hasOwnProperty(fieldName)) {
        const { value, validationRules } = form[fieldName];

        const isValid = validationRules
          ? validate(value, validationRules)
          : true;

        validatedForm[fieldName] = {
          ...validatedForm[fieldName],
          valid: isValid,
        };
      }
    }

    setForm(validatedForm);

    return validatedForm;
  };

  const checkIsFormValid = (form: FormControls) => {
    return Object.entries(form).every(([, el]) => el.valid);
  };

  const clearForm = () => {
    setForm(initialFormControls);
    setIsFormValid(null);
  };

  const getFormValues = (form: FormControls) => {
    return Object.values(form).reduce((formValues, el) => {
      const { inputName, value } = el;
      formValues[inputName] = value;
      return formValues;
    }, {});
  };

  const onFormSubmit = () => {
    const isFormValid = checkIsFormValid(validateForm());

    if (!isFormValid) {
      return null;
    }

    setIsFormValid(null);

    return getFormValues(form);
  };

  useEffect(() => setIsFormValid(checkIsFormValid(form)), [form]);

  return {
    form,
    setForm,
    isFormValid,
    inputChangeHandler,
    onFormSubmit,
    clearForm,
  };
};

export default useForm;
