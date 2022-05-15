import { ValidateBy, ValidationOptions } from 'class-validator';
import { isAlphanumeric } from '../../validator/lib/isAlphanumeric';
/**
 * 与えられた値が`userId`かどうかを判定します
 * @param validationOptions
 * @returns `boolean`
 */
export function IsUserId(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'IsUserId',
      validator: {
        validate(value): boolean {
          return isAlphanumeric(value, '_');
        },
      },
    },
    validationOptions,
  );
}
