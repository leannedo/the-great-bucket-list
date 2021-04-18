import { minLengthValidator, validate, requiredValidator } from '../validation';

describe('min length validator', () => {
  test('it should return true if value length is longer than or equal to min length', () => {
    const value = 'hello_world';
    const minLength = 3;

    const result = minLengthValidator(value, minLength);

    expect(result).toBeTruthy();
  });

  test('it should return false if value less than min length', () => {
    const value = 'he';
    const minLength = 3;

    const result = minLengthValidator(value, minLength);

    expect(result).toBeFalsy();
  });
});

describe('require validator', () => {
  test('it should return true if value is not empty', () => {
    const value = 'hello_world';

    const result = requiredValidator(value);

    expect(result).toBeTruthy();
  });

  test('it should return false if value is empty', () => {
    const value = '';

    const result = requiredValidator(value);

    expect(result).toBeFalsy();
  });
});

describe('validate fn', () => {
  test('it should return true if all validation rules are met', () => {
    const value = 'hello_world';
    const validationRules = { isRequired: true, minLength: 3 };

    const result = validate(value, validationRules);

    expect(result).toBeTruthy();
  });

  test('it should return false if one of the validation rules are not met', () => {
    const value = 'he';
    const validationRules = { isRequired: true, minLength: 3 };

    const result = validate(value, validationRules);

    expect(result).toBeFalsy();
  });
});

// it should throw error
// it should return true if constraint is false
