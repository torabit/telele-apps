import { ValidateBy, ValidationOptions } from 'class-validator';

/**
 * 与えられた値がGrpcで設定されているデフォルト値かどうかを判定します
 * @param validationOptions
 * @returns `boolean`
 */
export function IsNotGrpcDefaultValue(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'IsNotGrpcDefaultValue',
      validator: {
        validate(value): boolean {
          let isNotGrpcDefaultValue = true;
          switch (typeof value) {
            case 'string':
              if (value === '') isNotGrpcDefaultValue = false;
              else isNotGrpcDefaultValue = true;

              break;
            case 'number':
              if (value === 0) isNotGrpcDefaultValue = false;
              else isNotGrpcDefaultValue = true;

              break;
            case 'object':
              if (value === {}) isNotGrpcDefaultValue = false;
              else isNotGrpcDefaultValue = true;

            default:
              isNotGrpcDefaultValue = false;
          }
          return isNotGrpcDefaultValue;
        },
      },
    },
    validationOptions,
  );
}
