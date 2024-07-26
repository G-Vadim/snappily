import Image from 'next/image';
import { Flex, Text, Box } from '@chakra-ui/react';

import { Button } from '../components/Button';

export const TogetherSection = (props) => (
  <Flex as="section" gap="20px" justifyContent="center" pt="106px" pb="104px" bgColor="white" mt="144px" {...props}>
    <Flex flexDir="column" justifyContent="center" gap="64px" w="483px">
      <Box>
        <Text as="h2" fontSize="4xl" lineHeight="4xl" fontWeight="bold" letterSpacing="-1px">
          Let’s make
          <br />
          the next move.
        </Text>
        <Text as="h2" fontSize="4xl" lineHeight="4xl" fontWeight="bold" letterSpacing="-1px" color="coral">
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
