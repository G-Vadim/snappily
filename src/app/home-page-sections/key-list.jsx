'use client';
import { useMemo } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

import { useMobile } from '@/app/utils/useMobile';

export const KeysList = ({ keys }) => {
  const isMobile = useMobile();

  const preparedKeys = useMemo(() => (isMobile ? keys.slice(0, 6) : keys), [keys, isMobile]);

  return (
    <Flex
      as="section"
      justifyContent="space-between"
      alignItems="center"
      py="16px"
      px={{ base: '18px', md: '42px' }}
      borderWidth="1px"
      borderStyle="dashed"
      borderColor="rgba(0, 0, 0, 0.24)"
      rounded="base"
      gap={{ base: '12px', md: '0' }}
    >
      {preparedKeys.map(({ id, content, isIcon }) => (
        <Box key={id}>
          {isIcon ? (
            content
          ) : (
            <Text
              as="span"
              fontSize={{ base: '20px', md: 'semi-md' }}
              lineHeight="semi-md"
              fontWeight="semibold"
              letterSpacing="-2px"
            >
              {content}
            </Text>
          )}
        </Box>
      ))}
    </Flex>
  );
};
