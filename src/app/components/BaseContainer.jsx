import { Box } from '@chakra-ui/react';

export const BaseContainer = ({ children, ...props }) => (
  <Box w={{ base: '100%', md: '1320px' }} mx="auto" {...props}>
    {children}
  </Box>
);
