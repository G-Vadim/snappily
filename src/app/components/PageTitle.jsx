import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';

export const PageTitle = ({ imageSrc, title, subTitle, note }) => (
  <Flex as="section" flexDir="column" gap="40px" alignItems="center">
    <Image
      src={imageSrc}
      alt="page-title"
      width={480}
      height={248}
      style={{ objectFit: 'contain', maxHeight: '248px' }}
    />
    <Flex flexDir="column" gap="24px" alignItems="center">
      <Text as="h1" fontSize="5xl" lineHeight="5xl" textAlign="center" fontWeight="bold" letterSpacing="-2px">
        {title}
      </Text>
      {subTitle && (
        <Text fontSize="base" lineHeight="base" maxW="650px" textAlign="center" fontWeight="light">
          {subTitle}
        </Text>
      )}
      {note && (
        <Text fontSize="base" lineHeight="base" maxW="650px" textAlign="center" fontWeight="light">
          {note}
        </Text>
      )}
    </Flex>
  </Flex>
);
