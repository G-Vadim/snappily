import { Box } from '@chakra-ui/react';

export const Button = ({ children, ...props }) => (
  <Box
    as="button"
    px="23px"
    py="12px"
    rounded="base"
    fontSize="xs"
    lineHeight="xs"
    fontWeight="medium"
    letterSpacing="-0.22px"
    w="fit-content"
    {...props}
  >
    {children}
  </Box>
);
