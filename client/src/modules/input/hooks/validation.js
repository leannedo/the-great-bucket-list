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

const minLengthValidator = (value, minLength) => {
  return value.length > minLength;
};

const requiredValidator = (value) => {
  return value.trim() !== "";
};

const hexCodeValidator = (value) => {
  return /^([0-9A-F]{3}){1,2}$/i.test(value);
};
