export const validate = (value, rules) => {
  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;

      case "isRequired":
        isValid = isValid && requiredValidator(value);
        break;

      case "isHexCode":
        isValid = isValid && hexCodeValidator(value);
        break;

      default:
        isValid = true;
    }
  }

  return isValid;
};

export const minLengthValidator = (value, minLength) => {
  return value.length > minLength;
};

export const requiredValidator = (value) => {
  return value.trim() !== "";
};

export const hexCodeValidator = (value) => {
  return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
};
