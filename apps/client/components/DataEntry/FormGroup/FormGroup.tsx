import React, { ReactElement } from 'react';
import { Input } from '../Input';
import { TeleleError, ErrorCode } from '../../../common/error';

interface FormGroupProps {
  id?: string;
  isError?: boolean;
  label?: string;
  helperText?: string;
  errorCode: ErrorCode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormGroup: React.VFC<FormGroupProps> = (props): ReactElement => {
  const { id = '', isError = false, label = '', helperText = '', onChange, errorCode } = props;

  const teleleError = new TeleleError(errorCode);

  return (
    <>
      <div>
        <div className='label-wrapper'>
          <label htmlFor={id}>{label}</label>
        </div>
        <div>
          <Input id={id} onChange={onChange} isError={isError} />
        </div>
        <div className='helper-text-wrapper'>
          <p>{helperText}</p>
        </div>
        {isError ? (
          <div className='error-text-wrapper'>
            <p>{teleleError.getMessage()}</p>
          </div>
        ) : null}
      </div>
      <style jsx>{`
        .label-wrapper {
          font-size: var(--font-size-7);
          color: var(--color-text-base);
          font-weight: var(--font-weight-bold);
        }
        .helper-text-wrapper {
          color: var(--color-text-alt);
        }
        .error-text-wrapper {
          color: var(--color-red);
        }
      `}</style>
    </>
  );
};
