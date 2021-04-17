/* -------------- Validators -------------- */

export const minLengthValidator = (value: string, minLength: number): boolean =>
  value.length >= minLength;

export const requiredValidator = (value: string): boolean =>
  value.trim() !== '';

export const hexCodeValidator = (value: string): boolean =>
  /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);

/* ---------------------------------------- */

export interface ValidationRules<T> {
  [key: string]: T;
}

export interface ValidatorMap<T> {
  [key: string]: (value: string, ...args: T[]) => boolean;
}

const validatorMap: ValidatorMap<boolean | number | string> = {
  minLength: minLengthValidator,
  isRequired: requiredValidator,
  isHexCode: hexCodeValidator,
};

export const validate = (
  value: string,
  validationRules: ValidationRules<boolean | number | string>,
): boolean => {
  return Object.entries(validationRules).every(([key, constraint]) => {
    if (!validatorMap[key]) {
      throw new Error(`${key} does not exist in validator map`);
    }

    if (constraint === false) {
      // skip validation
      return true;
    }

    const validator = validatorMap[key];

    return validator(value, constraint);
  });
};
