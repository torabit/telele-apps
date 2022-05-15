import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export interface GoogleTimestamp {
  seconds: number;
  nanos: number;
}

/**
 * Unix epocからUTC timeの秒数に変換します
 * gRPC通信の時に必要な変換です
 * @param timestamp JavascriptのDate型の値
 * @returns GoogleTimestampに変換したObjectを返します
 */
export function convertGoogleTimestamp(timestamp?: Date): GoogleTimestamp {
  if (!timestamp) {
    return null;
  }
  const googleTimestamp = new Timestamp();
  googleTimestamp.fromDate(timestamp);

  const compiledTimestamp: GoogleTimestamp = {
    seconds: googleTimestamp.getSeconds(),
    nanos: googleTimestamp.getNanos(),
  };
  return compiledTimestamp;
}
