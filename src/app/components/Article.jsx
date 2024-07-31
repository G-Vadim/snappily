import Image from 'next/image';
import { Flex, Text, Center } from '@chakra-ui/react';

export const Article = ({ imageSrc, title, text, bgColor, revert }) => (
  <Flex
    as="article"
    gap="20px"
    justifyContent="center"
    p={{ base: '32px', md: '25px 0' }}
    rounded="base"
    flexDirection={{ base: 'column', md: revert ? 'row-reverse' : 'row' }}
    bgColor={bgColor}
  >
    <Center display={{ base: 'flex', md: 'none' }}>
      <Image
        src={imageSrc}
        alt={text}
        width={297}
        height={270}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '297px',
          maxHeight: '270px',
          objectFit: 'contain',
        }}
      />
    </Center>
    <Flex flexDir="column" justifyContent="center" gap="20px" w={{ base: 'auto', md: '540px' }}>
      {title}
      <Text fontSize={{ base: '16px', md: 'base' }} lineHeight={{ base: '26px', md: 'base' }} fontWeight="light">
        {text}
      </Text>
    </Flex>
    <Center w="480px" h="250px" display={{ base: 'none', md: 'flex' }}>
      <Image
        src={imageSrc}
        alt={text}
        width={480}
        height={360}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '480px',
          maxHeight: '250px',
          objectFit: 'contain',
        }}
      />
    </Center>
  </Flex>
);
