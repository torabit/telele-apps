import { Color } from 'grpc/protobuf/google/type/color';

interface RGBA {
  red: number;
  green: number;
  blue: number;
  alpha: number | undefined;
}

export function hexToRgb(hex: string, a?: number): RGBA {
  if (hex.slice(0, 1) == '#') hex = hex.slice(1);
  if (hex.length == 3) {
    hex =
      hex.slice(0, 1) +
      hex.slice(0, 1) +
      hex.slice(1, 2) +
      hex.slice(1, 2) +
      hex.slice(2, 3) +
      hex.slice(2, 3);
  }

  const red = parseInt('0x' + hex.slice(0, 2));
  const green = parseInt('0x' + hex.slice(2, 4));
  const blue = parseInt('0x' + hex.slice(4, 6));
  const alpha = a;
  return { red, green, blue, alpha };
}

export function rgbToProto(r: number, g: number, b: number, a?: number): Color {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const alpha = a;

  return { red, green, blue, alpha };
}

export function convertGoogleColor(hex: string, a?: number): Color {
  const rgb = hexToRgb(hex, a);
  return rgbToProto(rgb.red, rgb.green, rgb.blue, rgb.alpha);
}
