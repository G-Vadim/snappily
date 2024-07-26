import Link from 'next/link';
import Image from 'next/image';
import { Flex, Text, Grid } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { PageTitle } from '@/app/components/PageTitle';
import { TogetherSection } from '@/app/components/TogetherSection';
import { HandsIcon } from '@/app/components/icons';
import { aboutUs } from '@/app/data';

const AboutUs = () => (
  <>
    <BaseContainer>
      <PageTitle {...aboutUs.header} />
      <Flex as="section" flexDir="column" gap="64px" alignItems="center" mt="140px">
        <HandsIcon width={100} height={100} />
        <Text
          as="h2"
          fontSize="2xl"
          lineHeight="2xl"
          maxW="480px"
          textAlign="center"
          fontWeight="bold"
          letterSpacing="-2px"
        >
          <Text as="span" color="coral">
            Snappily Support
          </Text>{' '}
          for home movers
        </Text>
        <Grid gap="20px" maxW="985px" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
          <Flex flexDir="column" gap="20px">
            {aboutUs.points.map((item, i) => (
              <Text key={i} fontSize="base" lineHeight="base" fontWeight="light">
                {item}
              </Text>
            ))}
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            alignItems="center"
            px="39px"
            pt="39px"
            rounded="base"
            bgColor="white"
          >
            <Text as="h2" fontSize="semi-md" lineHeight="semi-md" textAlign="center" fontWeight="bold">
              Send us a message at
              <br />
              <Link href="mailto:support@snapilly.co.uk">
                <Text color="coral">support@snapilly.co.uk</Text>
              </Link>
            </Text>
            <Image src="/images/FingerClick.jpg" width={404} height={277} alt="finger-click" />
          </Flex>
        </Grid>
      </Flex>
    </BaseContainer>
    <TogetherSection />
  </>
);

export default AboutUs;
