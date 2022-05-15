import { ValidateBy, ValidationOptions } from 'class-validator';
import { isTimeOfDay } from 'validator/lib/isTimeOfDay';

export function IsTimeOfDay(validationOption?: ValidationOptions) {
  return ValidateBy(
    {
      name: 'IsTimeOfDay',
      validator: {
        validate(value): boolean {
          if (isTimeOfDay(value)) {
            return true;
          }
          return false;
        },
      },
    },
    validationOption,
  );
}
