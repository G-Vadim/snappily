'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Flex, Text, Grid, Box, GridItem } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { home } from '@/app/data';

const WorryList = ({ worryList }) => (
  <Flex as="article" flexDir="column" w="650px" mt="104px">
    {worryList.map((item, i) => (
      <Grid
        key={i}
        templateColumns="repeat(2, minmax(0, 1fr))"
        gap="40px"
        borderBottomWidth="1px"
        borderColor="rgba(255, 255, 255, 0.1)"
        py="40px"
      >
        {item.map((el) =>
          el.title ? (
            <Text
              as="h3"
              key={`${i}-${el.id}`}
              fontSize="lg"
              lineHeight="lg"
              fontWeight="semibold"
              color="white"
              letterSpacing="-2px"
            >
              {el.title}
            </Text>
          ) : (
            <Flex key={`${i}-${el.id}`} flexDir="column" gap="16px">
              {el.icon}
              <Text fontSize="20px" lineHeight="28px" fontWeight="light" color="white">
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

  return (
    <Flex as="article" flexDir="column" gap="64px" justifyContent="center" mt="104px">
      <Text as="h2" fontSize="2xl" lineHeight="2xl" fontWeight="bold" color="white" textAlign="center">
        {title}
      </Text>
      <Box>
        <Box sx={{ columnCount: 5 }}>
          {items.map((el, i) => (
            <Box
              key={i}
              py="12px"
              borderTopWidth="2px"
              borderColor={activeTabIndex === i ? 'coral' : 'charcoal'}
              _hover={{
                cursor: 'pointer',
              }}
              onClick={() => setActiveTabIndex(i)}
            >
              <Text as="h3" fontSize="base" lineHeight="base" fontWeight="semibold" color="white" textAlign="center">
                {el.title}
              </Text>
            </Box>
          ))}
        </Box>
        <Box position="relative" mt="67px" h="488px">
          <Image
            style={{ zIndex: 2, position: 'absolute', ...items[activeTabIndex].imageStyle }}
            src={items[activeTabIndex].imageSrc}
            alt={items[activeTabIndex].title}
            width={1300}
            height={820}
            priority={activeTabIndex}
          />
          <Box
            w="1330px"
            h="977px"
            rounded="full"
            bgGradient="linear-gradient(to bottom, rgba(255, 0, 51, 0.5) 0%, rgba(137, 49, 76, 0.2) 25%, rgba(255, 0, 51, 0) 50%)"
            position="absolute"
            zIndex="1"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export const Offer = ({ title, text }) => (
  <Box as="section" bgColor="charcoal" pt="144px" mt="144px">
    <BaseContainer>
      <Flex flexDir="column" alignItems="center">
        <Flex flexDir="column" gap="64px" justifyContent="center">
          <Flex flexDir="column" alignItems="center" gap="20px">
            {title}
            <Text fontSize="base" lineHeight="base" fontWeight="light" color="white" maxW="810px" textAlign="center">
              {text}
            </Text>
          </Flex>
          <Grid
            templateColumns="repeat(5, minmax(0, 1fr))"
            templateRows="repeat(3, minmax(0, 1fr))"
            gap="20px"
            px="167px"
            maxH="800px"
          >
            <GridItem
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="space-between"
              pt="20px"
              px="39px"
              gap="20px"
              bgColor="#DFDEFB"
              rounded="base"
              colSpan="3"
              rowSpan="2"
            >
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" textAlign="center">
                Digital ID & AML Checks
              </Text>
              <Image src="/images/IDCheck.png" alt="IDCheck" width={480} height={520} style={{ width: '420px' }} />
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              alignItems="center"
              pt="20px"
              px="39px"
              gap="20px"
              bgColor="#FBE8DE"
              rounded="base"
              colSpan="2"
              rowSpan="1"
            >
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" textAlign="center">
                Automated Title Deeds
              </Text>
              <Image src="/images/AutomatedTitleNeeds.png" alt="AutomatedTitleNeeds" width={292} height={179} />
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              alignItems="center"
              pt="20px"
              px="39px"
              gap="20px"
              bgColor="white"
              rounded="base"
              colSpan="2"
              rowSpan="1"
            >
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" textAlign="center" maxW="280px">
                User-Friendly Property Information Forms
              </Text>
              <Image
                src="/images/PropertyInfoForm.png"
                alt="PropertyInfoForm"
                width={292}
                height={143}
                style={{
                  maxHeight: '143px',
                  objectFit: 'contain',
                }}
              />
            </GridItem>
            <GridItem
              display="flex"
              flexDir="column"
              alignItems="center"
              pt="20px"
              px="39px"
              gap="20px"
              bgColor="white"
              rounded="base"
              colSpan="2"
              rowSpan="1"
            >
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" textAlign="center">
                Effortless E-sign for your Terms of Business
              </Text>
              <Image
                src="/images/ESign.png"
                alt="ESign"
                width={292}
                height={143}
                style={{
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
              py="20px"
              px="39px"
              bgColor="#DEFAFB"
              rounded="base"
              colSpan="3"
              rowSpan="1"
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
              <Text as="h3" fontSize="md" lineHeight="md" fontWeight="semibold" textAlign="center">
                Secure document store
              </Text>
            </GridItem>
          </Grid>
        </Flex>
        <WorryList worryList={home.worryList} />
        <Box mt="144px" w="984px">
          {home.benefit}
        </Box>
      </Flex>
      <Tabs {...home.tabs} />
    </BaseContainer>
  </Box>
);
