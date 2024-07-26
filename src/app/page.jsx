'use client';
import { Flex, Box } from '@chakra-ui/react';

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
    <BaseContainer>
      <Title {...home.titleSection} />
      <Flex flexDir="column" gap="144px">
        <KeysList keys={home.keys} />
        <Description {...home.description} />
        <TargetClients targetClients={home.targetClients} />
      </Flex>
    </BaseContainer>
    <Testimonials {...home.testimonials} />
    <BaseContainer>
      <Flex flexDir="column" gap="144px">
        <Logos logos={home.logos} />
        <Advantages {...home.advantages} />
      </Flex>
    </BaseContainer>
    <Offer {...home.offer} />
    <Box h="380px" bgColor="white" />
    <TogetherSection mt="0" />
  </>
);

export default Home;
