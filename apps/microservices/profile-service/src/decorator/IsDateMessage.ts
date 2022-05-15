import { ValidateBy, ValidationOptions } from 'class-validator';
import { isDateMessage } from 'validator/lib/isDateMessage';

export function IsDateMessage(validationOption?: ValidationOptions) {
  return ValidateBy(
    {
      name: 'IsDateMessage',
      validator: {
        validate(value): boolean {
          if (isDateMessage(value)) {
            return true;
          }
          return false;
        },
      },
    },
    validationOption,
  );
}
