/*
 * navigator.platformはMDNでは非推奨になっているが
 * 現状フロントで判別するならこれしかやり方がない。
 * navigator.platformは書き換えが可能なので、信頼できる返り値ではない場合がある。
 * しかし、その場合はユーザ自身が故意的に変更しているものと見なすため、
 * ここではそれを考慮しない。
 *
 */

const determineUserAgent = (re: RegExp) => {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(window.navigator.userAgent)
    : false;
};

const determinePlatform = (re: RegExp) => {
  return typeof window !== 'undefined' && window.navigator !== null
    ? re.test(window.navigator.platform)
    : false;
};

export const isMac = () => {
  return determinePlatform(/^Mac/);
};

export const isIPhone = () => {
  return determinePlatform(/^iPhone/);
};

export const isIPad = () => {
  // iPadOS 13　は僕たちを自分自身がMacだと騙してきますが、タッチサポートで正体を暴けます。
  return determinePlatform(/^iPad/) || (isMac() && navigator.maxTouchPoints > 1);
};

export const isIOS = () => {
  return isIPhone() || isIPad();
};

export const isAppleDevice = () => {
  return isMac() || isIOS();
};

export const isWebKit = () => {
  return determineUserAgent(/AppleWebKit/) && !isChrome();
};

export const isChrome = () => {
  return determineUserAgent(/Chrome/);
};

export const isAndroid = () => {
  return determineUserAgent(/Android/);
};

export const isSmartPhone = () => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(max-device-width: 600px)').matches
  ) {
    return true;
  } else {
    return false;
  }
};
