import '../styles/globals.css';
import '../styles/transitions.css';
import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { MainLayout } from '../components/Layout/MainLayout';
import ToastifyContainer from '../components/DataDisplay/Toast';

import { RecoilRoot } from 'recoil';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../apollo';

delete theme.styles.global; // chakraの `body style` を消してます

export function App({ Component, pageProps }: AppProps): ReactElement {
  const client = initializeApollo();
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <ToastifyContainer />
        </ChakraProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
