import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Parameters, StoryContext } from '@storybook/react';
import * as React from 'react';
import './__mocks/NextImage';

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
};

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  return (
    <ChakraProvider
      theme={extendTheme({
        direction: dir,
        styles: {
          global: {
            body: {
              backgroundColor: 'var(--color-background-body)',
            },
          },
        },
      })}
    >
      <div dir={dir} id='story-wrapper' style={{ minHeight: '100vh' }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
