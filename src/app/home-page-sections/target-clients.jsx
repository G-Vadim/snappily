'use client';
import Image from 'next/image';
import { Flex, Text, Center } from '@chakra-ui/react';

import { useMobile } from '@/app/utils/useMobile';
import { Button } from '@/app/components/Button';

export const TargetClients = ({ targetClients }) => {
  const isMobile = useMobile();

  return (
    <Flex as="section" gap="16px" flexDirection={{ base: 'column', md: 'row' }}>
      {targetClients.map(({ id, title, imageSrc, text }) => (
        <Flex
          key={id}
          flexDir="column"
          py={{ base: '32px', md: '64px' }}
          px={{ base: '32px', md: '80px' }}
          alignItems="center"
          gap="24px"
          rounded="base"
          bgColor="white"
          boxSize={{ base: 'auto', md: '650px' }}
          maxW="650px"
        >
          <Text as="h3" fontSize={{ base: 'md', md: 'semi-md' }} lineHeight="semi-md" color="coral" fontWeight="bold">
            {title}
          </Text>
          <Center h={{ base: 'auto', md: '350px' }}>
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={262}
              style={{ height: isMobile ? 'auto' : '205px' }}
            />
          </Center>
          <Text
            fontSize={{ base: '16px', md: 'base' }}
            lineHeight={{ base: '26px', md: 'base' }}
            fontWeight="light"
            textAlign={{ base: 'left', md: 'center' }}
          >
            {text}
          </Text>
          <Button bgColor="black" color="white" fontWeight="semibold">
            Find out more
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};
