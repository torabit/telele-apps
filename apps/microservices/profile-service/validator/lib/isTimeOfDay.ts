import { TimeOfDay } from 'grpc/protobuf/google/type/timeofday';

export function isTimeOfDay(value: unknown): value is TimeOfDay {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as TimeOfDay).hours === 'number' &&
    typeof (value as TimeOfDay).minutes === 'number' &&
    typeof (value as TimeOfDay).seconds === 'number' &&
    typeof (value as TimeOfDay).nanos === 'number'
  );
}
