import { DateMessage } from 'grpc/protobuf/google/type/date';

export function convertGoogleDate(timestamp?: Date): DateMessage | null {
  if (!timestamp) {
    return null;
  }

  const googleDate: DateMessage = {
    year: timestamp.getFullYear(),
    month: timestamp.getMonth(),
    day: timestamp.getDate(),
  };

  return googleDate;
}
