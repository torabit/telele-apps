import { Color } from 'grpc/protobuf/google/type/color';

export function protoToCssColor(rgb_color: Color) {
  let redFrac = rgb_color.red || 0.0;
  let greenFrac = rgb_color.green || 0.0;
  let blueFrac = rgb_color.blue || 0.0;
  let red = Math.floor(redFrac * 255);
  let green = Math.floor(greenFrac * 255);
  let blue = Math.floor(blueFrac * 255);

  return { red: red, green: green, blue: blue };
}

export function rgbToCssColor(red: number, green: number, blue: number) {
  let rgbNumber = new Number((red << 16) | (green << 8) | blue);
  let hexString = rgbNumber.toString(16);
  let missingZeros = 6 - hexString.length;
  let resultBuilder = ['#'];
  for (let i = 0; i < missingZeros; i++) {
    resultBuilder.push('0');
  }
  resultBuilder.push(hexString);
  return resultBuilder.join('');
}

export function convertColor(rgb_color: Color) {
  for (const key of Object.keys(rgb_color)) {
    if (rgb_color[key] === null || undefined) {
      return null;
    }
  }

  const rgb = protoToCssColor(rgb_color);
  const hex = rgbToCssColor(rgb.red, rgb.green, rgb.blue);

  return hex.substring(1);
}
