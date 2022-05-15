import { Color } from 'grpc/protobuf/google/type/color';

export function isProtoColor(value: unknown): value is Color {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as Color).red === 'number' &&
    typeof (value as Color).green === 'number' &&
    typeof (value as Color).blue === 'number'
  );
}
