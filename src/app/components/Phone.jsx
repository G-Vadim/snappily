import Image from 'next/image';
import { Box } from '@chakra-ui/react';

export const Phone = () => (
  <Box position="relative" rounded="base" overflow="hidden" minW="482px">
    <Image src="/images/MobilePhone.jpg" alt="phone-background" width={482} height={643} style={{ zIndex: 1 }} />
    <Image
      src="/images/App.png"
      alt="phone-app"
      width={544}
      height={1172}
      style={{
        zIndex: 2,
        position: 'absolute',
        width: '332px',
        height: '720px',
        top: '47px',
        left: '75px',
        border: '1px solid #FF0033',
        borderRadius: '38px',
      }}
    />
  </Box>
);
