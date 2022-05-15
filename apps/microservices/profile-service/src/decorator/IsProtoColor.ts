import { ValidateBy, ValidationOptions } from 'class-validator';
import { isProtoColor } from 'validator/lib/isProtoColor';

export function IsProtoColor(validationOption?: ValidationOptions) {
  return ValidateBy(
    {
      name: 'IsProtoColor',
      validator: {
        validate(value): boolean {
          if (isProtoColor(value)) {
            return true;
          }
          return false;
        },
      },
    },
    validationOption,
  );
}
