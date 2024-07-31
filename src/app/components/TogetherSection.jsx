import Image from 'next/image';
import { Flex, Text, Box } from '@chakra-ui/react';

import { Button } from '../components/Button';

export const TogetherSection = (props) => (
  <Flex
    as="section"
    w="100%"
    gap="20px"
    flexDir={{ base: 'column-reverse', md: 'row' }}
    justifyContent="center"
    alignItems={{ base: 'center', md: 'normal' }}
    py={{ base: '40px', md: '106px' }}
    px={{ base: '16px', md: '0' }}
    bgColor="white"
    mt={{ base: '0', md: '144px' }}
    {...props}
  >
    <Flex flexDir="column" justifyContent="center" gap={{ base: '16px', md: '64px' }} w={{ base: '100%', md: '483px' }}>
      <Box>
        <Text
          as="h2"
          display={{ base: 'inline', md: 'block' }}
          fontSize={{ base: '37px', md: '4xl' }}
          lineHeight={{ base: '50px', md: '4xl' }}
          fontWeight="bold"
          letterSpacing="-1px"
        >
          Let’s make
          <Box as="br" display={{ base: 'none', md: 'block' }} />
          the next move.{' '}
        </Text>
        <Text
          as="h2"
          display={{ base: 'inline', md: 'block' }}
          fontSize={{ base: '37px', md: '4xl' }}
          lineHeight={{ base: '50px', md: '4xl' }}
          fontWeight="bold"
          letterSpacing="-1px"
          color="coral"
        >
          Together.
        </Text>
      </Box>
      <Button bgColor="coral" color="white" px="26px" fontWeight="semibold">
        Get Started
      </Button>
    </Flex>
    <Image src="/images/Together.jpg" alt="together" width={483} height={363} />
  </Flex>
);
