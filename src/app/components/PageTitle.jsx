import Image from 'next/image';
import { Flex, Text, Center } from '@chakra-ui/react';

export const PageTitle = ({ imageSrc, title, subTitle, note }) => (
  <Flex as="section" flexDir="column" gap={{ base: '12px', md: '40px' }} alignItems="center">
    <Center display={{ base: 'none', md: 'flex' }}>
      <Image
        src={imageSrc}
        alt="page-title"
        width={480}
        height={248}
        style={{ objectFit: 'contain', maxHeight: '248px' }}
      />
    </Center>
    <Center display={{ base: 'flex', md: 'none' }}>
      <Image
        src={imageSrc}
        alt="page-title"
        width={480}
        height={248}
        style={{ objectFit: 'contain', maxHeight: '248px' }}
      />
    </Center>
    <Flex flexDir="column" gap={{ base: '20px', md: '24px' }} alignItems="center">
      <Text
        as="h1"
        fontSize={{ base: 'lg', md: '5xl' }}
        lineHeight={{ base: 'lg', md: '5xl' }}
        textAlign="center"
        fontWeight="bold"
        letterSpacing="-2px"
      >
        {title}
      </Text>
      {subTitle && (
        <Text
          fontSize={{ base: 'mxs', md: 'base' }}
          lineHeight={{ base: 'msm', md: 'base' }}
          maxW="650px"
          textAlign={{ base: 'left', md: 'center' }}
          fontWeight="light"
        >
          {subTitle}
        </Text>
      )}
      {note && (
        <Text
          fontSize={{ base: 'mxs', md: 'base' }}
          lineHeight={{ base: 'msm', md: 'base' }}
          maxW="650px"
          textAlign={{ base: 'left', md: 'center' }}
          fontWeight="light"
        >
          {note}
        </Text>
      )}
    </Flex>
  </Flex>
);
