'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Text, Grid } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { PageTitle } from '@/app/components/PageTitle';
import { TogetherSection } from '@/app/components/TogetherSection';
import { HandsIcon } from '@/app/components/icons';
import { aboutUs } from '@/app/data';
import { useMobile } from '@/app/utils/useMobile';

const AboutUs = () => {
  const isMobile = useMobile();

  return (
    <>
      <BaseContainer p={{ base: '16px', md: '0' }} mb={{ base: '24px', md: '0' }}>
        <PageTitle {...aboutUs.header} />
        <Flex
          as="section"
          flexDir="column"
          gap={{ base: '12px', md: '64px' }}
          alignItems="center"
          mt={{ base: '64px', md: '140px' }}
        >
          <HandsIcon width={100} height={100} />
          <Text
            as="h2"
            fontSize={{ base: '32px', md: '2xl' }}
            lineHeight={{ base: '40px', md: '2xl' }}
            maxW={{ base: '260px', md: '480px' }}
            textAlign="center"
            fontWeight="bold"
            letterSpacing="-2px"
          >
            <Text as="span" color="coral">
              Snappily Support
            </Text>{' '}
            for home movers
          </Text>
          <Grid
            gap="24px"
            maxW="985px"
            gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' }}
            gridTemplateRows={{ base: '2', md: 'minmax(0, 1fr)' }}
          >
            <Flex flexDir="column" gap="20px">
              {aboutUs.points.map((item, i) => (
                <Text key={i} fontSize={{ base: 'mxs', md: 'base' }} lineHeight="base" fontWeight="light">
                  {item}
                </Text>
              ))}
            </Flex>
            <Flex
              flexDir="column"
              justifyContent="space-between"
              alignItems="center"
              pt="39px"
              rounded="base"
              bgColor="white"
              overflow="hidden"
              gap={{ base: '30px', md: 'none' }}
            >
              <Text
                as="h2"
                fontSize={{ base: 'md', md: 'semi-md' }}
                lineHeight={{ base: 'md', md: 'semi-md' }}
                textAlign="center"
                fontWeight={{ base: '600', md: 'bold' }}
              >
                Send us a message at
                <br />
                <Link href="mailto:support@snapilly.co.uk">
                  <Text color="coral">support@snapilly.co.uk</Text>
                </Link>
              </Text>
              {isMobile ? (
                <Image src="/images/FingerClick4.png" width={361} height={285} alt="finger-click" />
              ) : (
                <Image src="/images/FingerClick.jpg" width={404} height={277} alt="finger-click" />
              )}
            </Flex>
          </Grid>
        </Flex>
      </BaseContainer>
      <TogetherSection />
    </>
  );
};

export default AboutUs;
