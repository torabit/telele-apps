import { isGrpcDefaultValue } from './lib/isGrpcDefaultValue';
import { isProtoColor } from './lib/isProtoColor';
import { isDateMessage } from './lib/isDateMessage';
import { isTimeOfDay } from './lib/isTimeOfDay';

import { convertDateMessage, convertTime } from '../util/datetime';
import { convertColor } from 'util/color';

export function validationColor(value: unknown): string | null {
  if (isGrpcDefaultValue(value)) return null;
  if (isProtoColor(value)) return convertColor(value);
}

export function validationDateMessage(value: unknown): Date | null {
  if (isGrpcDefaultValue(value)) return null;
  if (isDateMessage(value)) return convertDateMessage(value);
}

export function validationTime(value: unknown): Date | null {
  if (isGrpcDefaultValue(value)) return null;
  if (isTimeOfDay(value)) return convertTime(value);
}
