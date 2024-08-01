'use client';
import { Flex, Box, Text } from '@chakra-ui/react';

import { BaseContainer } from './components/BaseContainer';
import { TogetherSection } from './components/TogetherSection';
import { Title } from '@/app/home-page-sections/title';
import { KeysList } from '@/app/home-page-sections/key-list';
import { Description } from '@/app/home-page-sections/description';
import { TargetClients } from '@/app/home-page-sections/target-clients';
import { Testimonials } from '@/app/home-page-sections/testimonials';
import { Logos } from '@/app/home-page-sections/logos';
import { Advantages } from '@/app/home-page-sections/advantages';
import { Offer } from '@/app/home-page-sections/offer';
import { home } from './data';

const Home = () => (
  <>
    <BaseContainer p={{ base: '16px', md: '0' }}>
      <Title {...home.titleSection} />
      <Flex flexDir="column" gap={{ base: '40px', md: '144px' }} mt={{ base: '24px', md: '80px' }}>
        <KeysList keys={home.keys} />
        <Description {...home.description} />
        <TargetClients targetClients={home.targetClients} />
      </Flex>
    </BaseContainer>
    <Testimonials {...home.testimonials} />
    <Box display={{ base: 'block', md: 'none' }}>
      <Logos logos={home.logos} />
    </Box>
    <BaseContainer p={{ base: '16px', md: '0' }} mt={{ base: '24px', md: '0' }}>
      <Flex flexDir="column" gap={{ base: '24px', md: '144px' }} pt={{ base: '16px', md: 0 }}>
        <Box display={{ base: 'none', md: 'block' }}>
          <Logos logos={home.logos} />
        </Box>
        <Text
          as="h2"
          display={{ base: 'block', md: 'none' }}
          fontSize="semi-md"
          lineHeight="40px"
          letterSpacing="-1px"
          fontWeight="bold"
          textAlign="center"
        >
          <Text as="span" color="coral">
            What
          </Text>{' '}
          does
          <br />
          Snappily do?
        </Text>
        <Advantages {...home.advantages} />
      </Flex>
    </BaseContainer>
    <Offer {...home.offer} />
    <Box h={{ base: '150px', md: '380px' }} bgColor="white" />
    <TogetherSection mt="0" />
  </>
);

export default Home;
