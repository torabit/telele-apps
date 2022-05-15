import React from 'react';

const FontSize = {
  SMALL: 'var(--font-size-9)',
  MEDIUM: 'var(--font-size-6)',
} as const;

interface TeleleLevelProps {
  exp: number;
  fontSize: keyof typeof FontSize;
  margin: string;
}

export const TeleleLevel: React.VFC<TeleleLevelProps> = ({ exp, fontSize, margin }) => {
  const currentLevel = Math.floor(exp / 1000);
  const currentExp = exp % 1000;
  const adaptDisplayExp = currentExp / 10;
  const dsplayLevelColor = exp === 0 ? 'var(--color-text-alt)' : 'var(--color-telele-orange)';
  return (
    <>
      <div className='telele-level' aria-label={`テレレレベル`}>
        <div className='current-users-level' aria-label={`${currentLevel}テレレレベル`}>
          <span>Lv.{currentLevel}</span>
        </div>
        <div className='containerStyles'>
          <div className='fillerStyles'></div>
        </div>
      </div>
      <style jsx>{`
        .telele-level {
          margin: ${margin};
        }
        .current-users-level {
          color: ${dsplayLevelColor};
          font-size: ${FontSize[fontSize]};
          font-weight: var(--font-weight-bold);
        }
        .containerStyles {
          height: 0.2rem;
          width: 100%;
          box-shadow: 0 0 0.1rem 0.1rem rgb(255 255 255 / 25%);
          background-color: var(--color-opac-b-2);
          border-radius: var(--border-radius-extra-large);
        }
        .fillerStyles {
          height: 100%;
          width: ${adaptDisplayExp}%;
          background-color: var(--color-telele-orange);
          border-radius: inherit;
        }
      `}</style>
    </>
  );
};
