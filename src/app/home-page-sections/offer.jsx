'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Flex, Text, Grid, Box, GridItem } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { home } from '@/app/data';
import { useMobile } from '@/app/utils/useMobile';

const WorryList = ({ worryList }) => (
  <Flex as="article" flexDir="column" w={{ base: 'auto', md: '650px' }} mt={{ base: '40px', md: '104px' }}>
    {worryList.map((item, i) => (
      <Grid
        key={i}
        templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
        gap={{ base: '0', md: '40px' }}
        borderBottomWidth={{ base: 'unset', md: '1px' }}
        borderColor={{ base: 'unset', md: 'rgba(255, 255, 255, 0.1)' }}
        py={{ base: '0', md: '40px' }}
      >
        {item.map((el) =>
          el.title ? (
            <Text
              as="h3"
              key={`${i}-${el.id}`}
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={{ base: 'md', md: 'lg' }}
              fontWeight="semibold"
              color="white"
              letterSpacing={{ base: '-1px', md: '-2px' }}
            >
              {el.title}
            </Text>
          ) : (
            <Flex
              key={`${i}-${el.id}`}
              flexDir={{ base: 'row', md: 'column' }}
              gap="16px"
              alignItems={{ base: 'center', md: 'unset' }}
              borderBottomWidth={{ base: '1px', md: 'unset' }}
              borderColor={{ base: 'rgba(255, 255, 255, 0.1)', md: 'unset' }}
              py={{ base: '24px', md: '0' }}
            >
              {el.icon}
              <Text
                fontSize={{ base: 'mxs', md: '20px' }}
                lineHeight={{ base: 'base', md: '28px' }}
                fontWeight="light"
                color="white"
              >
                {el.text}
              </Text>
            </Flex>
          )
        )}
      </Grid>
    ))}
  </Flex>
);

const Tabs = ({ title, items }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isMobile = useMobile();

  return (
    <Flex
      as="article"
      flexDir="column"
      gap={{ base: '24px', md: '64px' }}
      justifyContent="center"
      mt={{ base: '40px', md: '104px' }}
    >
      <Text
        as="h2"
        fontSize={{ base: 'semi-md', md: '2xl' }}
        lineHeight={{ base: '40pxd', md: '2xl' }}
        fontWeight="bold"
        color="white"
        textAlign="center"
      >
        {title}
      </Text>
      <Box>
        <Box sx={{ columnCount: 5 }}>
          {items.map((el, i) => (
            <Box
              key={i}
              py={{ base: '6px', md: '12px' }}
              borderTopWidth="2px"
              borderColor={activeTabIndex === i ? 'coral' : 'charcoal'}
              _hover={{
                cursor: 'pointer',
              }}
              onClick={() => setActiveTabIndex(i)}
            >
              <Text
                display={{ base: 'none', md: 'block' }}
                as="h3"
                fontSize="base"
                lineHeight="base"
                fontWeight="semibold"
                color="white"
                textAlign="center"
              >
                {el.title}
              </Text>
            </Box>
          ))}
        </Box>
        <Text
          display={{ base: 'block', md: 'none' }}
          as="h3"
          fontSize="base"
          lineHeight="base"
          color="white"
          fontWeight="semibold"
          textAlign="center"
        >
          {items[activeTabIndex].title}
        </Text>
        <Flex position="relative" mt="67px" h={{ base: '125px', md: '488px' }} justifyContent="center">
          <Image
            style={{
              zIndex: 2,
              position: 'absolute',
              ...items[activeTabIndex][isMobile ? 'mobileImageStyle' : 'imageStyle'],
            }}
            src={items[activeTabIndex].imageSrc}
            alt={items[activeTabIndex].title}
            width={1300}
            height={820}
            priority={activeTabIndex}
          />
          <Box
            w={{ base: '361px', md: '1330px' }}
            h="265px"
            rounded="full"
            bgGradient="linear-gradient(to bottom, rgba(255, 0, 51, 0.5) 0%, rgba(137, 49, 76, 0.2) 25%, rgba(255, 0, 51, 0) 50%)"
            position="absolute"
            zIndex="1"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export const Offer = ({ title, text }) => {
  const isMobile = useMobile();

  return (
    <Box as="section" bgColor="charcoal" pt={{ base: '32px', md: '144px' }} mt={{ base: '24px', md: '144px' }}>
      <BaseContainer px={{ base: '16px', md: '0' }}>
        <Flex flexDir="column" alignItems="center">
          <Flex flexDir="column" gap={{ base: '40px', md: '64px' }} justifyContent="center">
            <Flex flexDir="column" alignItems="center" gap="20px">
              {title}
              <Text
                fontSize={{ base: 'mxs', md: 'base' }}
                lineHeight="base"
                fontWeight="light"
                color="white"
                maxW="810px"
                textAlign={{ base: 'left', md: 'center' }}
              >
                {text}
              </Text>
            </Flex>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(5, minmax(0, 1fr))' }}
              templateRows={{ base: 'repeat(5, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }}
              gap={{ base: '24px', md: '20px' }}
              px={{ base: '0', md: '167px' }}
              maxH={{ base: 'unset', md: '800px' }}
            >
              <GridItem
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
                pt={{ base: '16px', md: '20px' }}
                px={{ base: '16px', md: '39px' }}
                gap={{ base: '18px', md: '20px' }}
                bgColor="#DFDEFB"
                rounded="base"
                colSpan={{ base: '1', md: '3' }}
                rowSpan={{ base: '1', md: '2' }}
                minH={{ base: '288px', md: 'unset' }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  lineHeight={{ base: 'semi-md', md: 'md' }}
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Digital ID & AML Checks
                </Text>
                <Image
                  src="/images/IDCheck.png"
                  alt="IDCheck"
                  width={480}
                  height={520}
                  style={{ width: isMobile ? '203px' : '420px' }}
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDir="column"
                alignItems="center"
                pt={{ base: '16px', md: '20px' }}
                px={{ base: '16px', md: '39px' }}
                gap={{ base: '18px', md: '20px' }}
                bgColor="#FBE8DE"
                rounded="base"
                colSpan={{ base: '1', md: '2' }}
                rowSpan={{ base: '1', md: '1' }}
                minH={{ base: '288px', md: 'unset' }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  lineHeight={{ base: 'semi-md', md: 'md' }}
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Automated Title Deeds
                </Text>
                <Image
                  src="/images/AutomatedTitleNeeds.png"
                  alt="AutomatedTitleNeeds"
                  width={292}
                  height={179}
                  style={{ width: isMobile ? '329px' : '292px' }}
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDir="column"
                alignItems="center"
                pt={{ base: '16px', md: '20px' }}
                px={{ base: '16px', md: '39px' }}
                gap={{ base: '18px', md: '20px' }}
                bgColor="white"
                rounded="base"
                colSpan={{ base: '1', md: '2' }}
                rowSpan={{ base: '1', md: '1' }}
                minH={{ base: '288px', md: 'unset' }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  lineHeight={{ base: 'semi-md', md: 'md' }}
                  fontWeight="semibold"
                  textAlign="center"
                  maxW="280px"
                >
                  User-Friendly Property Information Forms
                </Text>
                <Image
                  src="/images/PropertyInfoForm.png"
                  alt="PropertyInfoForm"
                  width={292}
                  height={143}
                  style={{
                    width: isMobile ? '329px' : '292px',
                    maxHeight: '143px',
                    objectFit: 'contain',
                  }}
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDir="column"
                alignItems="center"
                pt={{ base: '16px', md: '20px' }}
                px={{ base: '16px', md: '39px' }}
                gap={{ base: '18px', md: '20px' }}
                bgColor="white"
                rounded="base"
                colSpan={{ base: '1', md: '2' }}
                rowSpan={{ base: '1', md: '1' }}
                minH={{ base: '288px', md: 'unset' }}
              >
                <Text
                  as="h3"
                  fontSize="md"
                  lineHeight={{ base: 'semi-md', md: 'md' }}
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Effortless E-sign for your Terms of Business
                </Text>
                <Image
                  src="/images/ESign.png"
                  alt="ESign"
                  width={292}
                  height={143}
                  style={{
                    width: isMobile ? '329px' : '292px',
                    maxHeight: '143px',
                    objectFit: 'contain',
                  }}
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
                py={{ base: '32px', md: '20px' }}
                px={{ base: '16px', md: '39px' }}
                bgColor="#DEFAFB"
                rounded="base"
                colSpan={{ base: '1', md: '3' }}
                rowSpan={{ base: '1', md: '1' }}
                minH={{ base: '288px', md: 'unset' }}
              >
                <Image
                  src="/images/ScreenWithList.png"
                  alt="SecureDocumentStore"
                  width={512}
                  height={185}
                  style={{
                    maxHeight: '160px',
                    objectFit: 'contain',
                  }}
                />
                <Text
                  as="h3"
                  fontSize="md"
                  lineHeight={{ base: 'semi-md', md: 'md' }}
                  fontWeight="semibold"
                  textAlign="center"
                >
                  Secure document store
                </Text>
              </GridItem>
            </Grid>
          </Flex>
          <WorryList worryList={home.worryList} />
          <Box mt={{ base: '40px', md: '144px' }} w={{ base: 'auto', md: '984px' }}>
            {home.benefit}
          </Box>
        </Flex>
        <Tabs {...home.tabs} />
      </BaseContainer>
    </Box>
  );
};
