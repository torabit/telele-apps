export class TeleleError extends Error {
  private teleleErrorCode;
  constructor(errCode: ErrorCode) {
    super(errCode);
    this.teleleErrorCode = errCode;
  }
  getMessage() {
    return errorMessages[this.teleleErrorCode];
  }
}

const errorMessages: { [T in keyof typeof ErrorCode]: string } = {
  // input
  telele_input_notSocialLink: '有効なURLを入力してください',
  telele_input_socialLinkTitleNotObeyRegulations: '1文字以上16文字以内で入力してください',
};

export enum ErrorCode {
  // input
  telele_input_notSocialLink = 'telele_input_notSocialLink',
  telele_input_socialLinkTitleNotObeyRegulations = 'telele_input_socialLinkTitleNotObeyRegulations',
}
