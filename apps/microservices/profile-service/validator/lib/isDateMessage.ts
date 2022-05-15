import { DateMessage } from 'grpc/protobuf/google/type/date';

export function isDateMessage(value: unknown): value is DateMessage {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as DateMessage).year === 'number' &&
    typeof (value as DateMessage).month === 'number' &&
    typeof (value as DateMessage).day === 'number'
  );
}
