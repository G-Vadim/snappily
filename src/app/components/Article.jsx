import Image from 'next/image';
import { Flex, Text, Center } from '@chakra-ui/react';

export const Article = ({ imageSrc, title, text, bgColor, revert }) => (
  <Flex
    as="article"
    gap="20px"
    justifyContent="center"
    py="25px"
    rounded="base"
    flexDirection={revert ? 'row-reverse' : ''}
    bgColor={bgColor}
  >
    <Flex flexDir="column" justifyContent="center" gap="20px" w="540px">
      {title}
      <Text fontSize="base" lineHeight="base" fontWeight="light">
        {text}
      </Text>
    </Flex>
    <Center w="480px" h="250px" className="w-[480px] h-[250px]">
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
