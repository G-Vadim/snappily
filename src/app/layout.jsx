import { Box } from '@chakra-ui/react';

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { BaseContainer } from '@/app/components/BaseContainer';
import { Providers } from '@/app/providers';
import '@/app/theme/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <BaseContainer>
            <Header />
          </BaseContainer>
          <Box as="main" pt={{ base: '65px', md: '80px' }}>
            {children}
          </Box>
          <BaseContainer>
            <Footer />
          </BaseContainer>
        </Providers>
      </body>
    </html>
  );
}
