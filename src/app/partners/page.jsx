import { Flex, Text, Center } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { PageTitle } from '@/app/components/PageTitle';
import { Article } from '@/app/components/Article';
import { TogetherSection } from '@/app/components/TogetherSection';
import { HandsIcon, CompassIcon } from '@/app/components/icons';
import { Phone } from '@/app/components/Phone';
import { partners } from '@/app/data';

const Partners = () => (
  <>
    <BaseContainer>
      <PageTitle {...partners.header} />
      <Flex as="section" flexDir="column" gap="24px" mt="75px">
        {partners.articles.map(({ id, ...item }, i) => (
          <Article key={id} revert={!(i % 2)} {...item} />
        ))}
      </Flex>
      <Flex as="section" flexDir="column" mt="144px" gap="64px" alignItems="center">
        <Text
          as="h2"
          fontSize="2xl"
          lineHeight="2xl"
          maxW="796px"
          textAlign="center"
          fontWeight="bold"
          letterSpacing="-2px"
        >
          Why is Snappily important in the{' '}
          <Text as="span" color="coral">
            Transaction Process?
          </Text>
        </Text>
        <Center flex="1" gap="48px">
          <Flex flexDir="column" gap="20px">
            <HandsIcon />
            <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" letterSpacing="-2px">
              Silent Support Service
            </Text>
            <Text fontSize="base" lineHeight="base" fontWeight="light">
              At Snappily, we believe in blending digital support with a human touch. We value your relationship with
              your customers, while empowering agencies to run their own business. It&apos;s all about that perfect
              balance of human touch with digital support. So elevate your customer journey with a digital app and admin
              task assistance - saving your team time and hassle while earning revenue by utilizing our services.
            </Text>
          </Flex>
          <Phone />
          <Flex flexDir="column" gap="20px">
            <CompassIcon />
            <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" letterSpacing="-2px">
              Automated Task Management
            </Text>
            <Text fontSize="base" lineHeight="base" fontWeight="light">
              With our clever (but simple) platform, wave goodbye to tracking spreadsheets and chasing customers. Our
              compliance platform handles, tracks and alerts you about compliance tasks, freeing you to focus on what
              truly matters. Reduce admin load by 60% and Reclaim 19 hours monthly* for more important tasks. Unlock
              Exclusive Integrations: Seamlessly connect with Alto&apos;s estate agency CRM and ID providers - all
              conveniently built-in.
            </Text>
          </Flex>
        </Center>
        {/*<PlatformButtons/>*/}
      </Flex>
    </BaseContainer>
    <TogetherSection />
  </>
);

export default Partners;
