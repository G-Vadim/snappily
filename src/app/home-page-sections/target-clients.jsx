import Image from 'next/image';
import { Flex, Text, Center } from '@chakra-ui/react';

import { Button } from '@/app/components/Button';

export const TargetClients = ({ targetClients }) => (
  <Flex as="section" gap="16px">
    {targetClients.map(({ id, title, imageSrc, text }) => (
      <Flex
        key={id}
        flexDir="column"
        py="64px"
        px="80px"
        alignItems="center"
        gap="24px"
        rounded="base"
        bgColor="white"
        boxSize="650px"
      >
        <Text as="h3" fontSize="semi-md" lineHeight="semi-md" color="coral" fontWeight="bold">
          {title}
        </Text>
        <Center h="350px">
          <Image src={imageSrc} alt={title} width={400} height={262} style={{ height: '205px' }} />
        </Center>
        <Text fontSize="base" lineHeight="base" fontWeight="light" textAlign="center">
          {text}
        </Text>
        <Button bgColor="black" color="white" fontWeight="semibold">
          Find out more
        </Button>
      </Flex>
    ))}
  </Flex>
);
