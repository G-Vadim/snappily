import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';

export const Description = ({ title, descriptions }) => (
  <Flex
    as="section"
    pl={{ base: '0', md: '168px' }}
    pr={{ base: '0', md: '124px' }}
    gap="20px"
    justifyContent="space-between"
    alignItems="center"
    flexDirection={{ base: 'column', md: 'row' }}
  >
    <Image src="/images/WalkingDog.png" alt="WalkingDog" width={360} height={307} style={{ height: 'fit-content' }} />
    <Flex flexDir="column" gap="32px" maxW="526px">
      {title}
      <Flex flexDir="column" gap="26px">
        {descriptions.map((item, i) => (
          <Text
            key={i}
            fontSize={{ base: '16px', md: 'base' }}
            lineHeight={{ base: '26px', md: 'base' }}
            letterSpacing="-0.2px"
            fontWeight={i > 0 && i !== descriptions.length - 1 ? 'thin' : 'light'}
            color={i === descriptions.length - 1 ? 'coral' : ''}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Flex>
  </Flex>
);
