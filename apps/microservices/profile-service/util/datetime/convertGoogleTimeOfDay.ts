export interface GoogleTimeOfDay {
  /**
   * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
   * to allow the value "24:00:00" for scenarios like business closing time.
   */
  hours: number;
  /** Minutes of hour of day. Must be from 0 to 59. */
  minutes: number;
  /**
   * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
   * allow the value 60 if it allows leap-seconds.
   */
  seconds: number;
  /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
  nanos: number;
}

export function convertGoogleTimeOfDay(
  timestamp?: Date,
): GoogleTimeOfDay | null {
  if (!timestamp) {
    return null;
  }

  const googleTimeOfDay: GoogleTimeOfDay = {
    hours: timestamp.getHours(),
    minutes: timestamp.getMinutes(),
    seconds: timestamp.getSeconds(),
    nanos: 0,
  };

  return googleTimeOfDay;
}
