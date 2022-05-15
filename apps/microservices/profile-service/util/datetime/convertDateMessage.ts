import { DateMessage } from 'grpc/protobuf/google/type/date';

export function convertDateMessage(dateMessage: DateMessage) {
  const timestamp = new Date(
    Date.UTC(dateMessage.year, dateMessage.month - 1, dateMessage.day, 0, 0, 0),
  );
  return timestamp;
}
