import { Flex, Text, SimpleGrid } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { PageTitle } from '@/app/components/PageTitle';
import { Article } from '@/app/components/Article';
import { TogetherSection } from '@/app/components/TogetherSection';
import { HandsIcon, CompassIcon } from '@/app/components/icons';
import { Phone } from '@/app/components/Phone';
import { partners } from '@/app/data';

const Partners = () => (
  <>
    <BaseContainer p={{ base: '16px', md: '0' }} mb={{ base: '24px', md: '0' }}>
      <PageTitle {...partners.header} />
      <Flex as="section" flexDir="column" gap="24px" mt={{ base: '40px', md: '75px' }}>
        {partners.articles.map(({ id, ...item }, i) => (
          <Article key={id} revert={!(i % 2)} {...item} />
        ))}
      </Flex>
      <Flex
        as="section"
        flexDir="column"
        mt={{ base: '34px', md: '144px' }}
        gap={{ base: '24px', md: '64px' }}
        alignItems="center"
      >
        <Text
          as="h2"
          fontSize={{ base: '32px', md: '2xl' }}
          lineHeight={{ base: '40px', md: '2xl' }}
          maxW="796px"
          textAlign={{ base: 'left', md: 'center' }}
          fontWeight="bold"
          letterSpacing="-2px"
        >
          Why is Snappily important in the{' '}
          <Text as="span" color="coral">
            Transaction Process?
          </Text>
        </Text>
        <SimpleGrid
          gap={{ base: '24px', md: '48px' }}
          alignItems="center"
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          templateAreas={{
            base: `
              "one"
              "three"
              "two"
            `,
            md: `"one two three"`,
          }}
        >
          <Flex flexDir="column" gap={{ base: '12px', md: '20px' }} gridArea="one">
            <Flex
              flexDir={{ base: 'row', md: 'column' }}
              gap={{ base: '12px', md: '20px' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <HandsIcon />
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" letterSpacing="-2px">
                Silent Support Service
              </Text>
            </Flex>
            <Text fontSize={{ base: '16px', md: 'base' }} lineHeight={{ base: '26px', md: 'base' }} fontWeight="light">
              At Snappily, we believe in blending digital support with a human touch. We value your relationship with
              your customers, while empowering agencies to run their own business. It&apos;s all about that perfect
              balance of human touch with digital support. So elevate your customer journey with a digital app and admin
              task assistance - saving your team time and hassle while earning revenue by utilizing our services.
            </Text>
          </Flex>
          <Phone gridArea="two" />
          <Flex flexDir="column" gap={{ base: '12px', md: '20px' }} gridArea="three">
            <Flex
              flexDir={{ base: 'row', md: 'column' }}
              gap={{ base: '12px', md: '20px' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <CompassIcon />
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" letterSpacing="-2px">
                Automated Task Management
              </Text>
            </Flex>
            <Text fontSize={{ base: '16px', md: 'base' }} lineHeight={{ base: '26px', md: 'base' }} fontWeight="light">
              With our clever (but simple) platform, wave goodbye to tracking spreadsheets and chasing customers. Our
              compliance platform handles, tracks and alerts you about compliance tasks, freeing you to focus on what
              truly matters. Reduce admin load by 60% and Reclaim 19 hours monthly* for more important tasks. Unlock
              Exclusive Integrations: Seamlessly connect with Alto&apos;s estate agency CRM and ID providers - all
              conveniently built-in.
            </Text>
          </Flex>
        </SimpleGrid>
        {/*<PlatformButtons/>*/}
      </Flex>
    </BaseContainer>
    <TogetherSection />
  </>
);

export default Partners;
