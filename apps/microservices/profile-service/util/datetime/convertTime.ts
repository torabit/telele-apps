import { TimeOfDay } from 'grpc/protobuf/google/type/timeofday';

export function convertTime(timeOfDay: TimeOfDay): Date {
  const timestamp = new Date(
    Date.UTC(0, 0, 0, timeOfDay.hours, timeOfDay.minutes, timeOfDay.seconds),
  );

  return timestamp;
}
