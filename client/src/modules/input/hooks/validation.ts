export const validate = (value: any, rules: any) => {
  let isValid = true;

  // eslint-disable-next-line guard-for-in
  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;

      case 'isRequired':
        isValid = isValid && requiredValidator(value);
        break;

      case 'isHexCode':
        isValid = isValid && hexCodeValidator(value);
        break;

      default:
        isValid = true;
    }
  }

  return isValid;
};

export const minLengthValidator = (value: any, minLength: any) =>
  value.length > minLength;

export const requiredValidator = (value: any) => value.trim() !== '';

export const hexCodeValidator = (value: any) =>
  /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
