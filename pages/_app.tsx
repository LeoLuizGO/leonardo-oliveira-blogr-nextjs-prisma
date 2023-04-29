// _app.tsx

import { SessionProvider } from 'next-auth/react';
import { Session } from "next-auth";
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps<{
  session: Session;}>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
