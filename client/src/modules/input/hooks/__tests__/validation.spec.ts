import { minLengthValidator, validate, requiredValidator } from '../validation';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('MIN_LENGTH_VALIDATOR', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return true if value larger than min length', () => {
    const value = 'hello_world';
    const minLength = 3;

    const result = minLengthValidator(value, minLength);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeTruthy();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return false if value less than min length', () => {
    const value = 'he';
    const minLength = 3;

    const result = minLengthValidator(value, minLength);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeFalsy();
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('REQUIRE_VALIDATOR', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return true if value is not empty', () => {
    const value = 'hello_world';

    const result = requiredValidator(value);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeTruthy();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return false if value is empty', () => {
    const value = '';

    const result = requiredValidator(value);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeFalsy();
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('VALIDATE', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return true if all validation rules are met', () => {
    const value = 'hello_world';
    const validationRules = { isRequired: true, minLength: 3 };

    const result = validate(value, validationRules);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeTruthy();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return true if all validation rules are met', () => {
    const value = 'he';
    const validationRules = { isRequired: true, minLength: 3 };

    const result = validate(value, validationRules);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toBeFalsy();
  });
});
