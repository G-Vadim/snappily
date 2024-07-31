import Link from 'next/link';
import { Flex, UnorderedList, ListItem, Text, Box } from '@chakra-ui/react';

import { BigLogoIcon } from './icons';

export const Footer = () => (
  <Flex
    as="footer"
    flexDir="column"
    py={{ base: '24px', md: '80px' }}
    gap={{ base: '24px', md: '64px' }}
    px={{ base: '16px', md: '0' }}
  >
    <nav>
      <UnorderedList
        display="flex"
        justifyContent={{ base: 'space-around', md: 'center' }}
        gap={{ base: 'none', md: '133px' }}
        styleType="none"
        ml="0"
      >
        <ListItem w={{ base: 'auto', md: '146px' }} textAlign="center">
          <Link href="/home-movers">
            <Text fontSize={{ base: 'exs', md: 'xs' }} fontWeight="medium" lineHeight={{ base: 'exs', md: 'xs' }}>
              For Home Movers
            </Text>
          </Link>
        </ListItem>
        <ListItem w={{ base: 'auto', md: '146px' }} textAlign="center">
          <Link href="/partners">
            <Text fontSize={{ base: 'exs', md: 'xs' }} fontWeight="medium" lineHeight={{ base: 'exs', md: 'xs' }}>
              For Partners
            </Text>
          </Link>
        </ListItem>
        <ListItem w={{ base: 'auto', md: '146px' }} textAlign="center">
          <Link href="/about-us">
            <Text fontSize={{ base: 'exs', md: 'xs' }} fontWeight="medium" lineHeight={{ base: 'exs', md: 'xs' }}>
              About Us
            </Text>
          </Link>
        </ListItem>
        <ListItem w={{ base: 'auto', md: '146px' }} textAlign="center">
          <Link href="/faq">
            <Text fontSize={{ base: 'exs', md: 'xs' }} fontWeight="medium" lineHeight={{ base: 'exs', md: 'xs' }}>
              FAQs
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
    <Flex justifyContent="center" gap={{ base: '35px', md: '44px' }}>
      <Link href="https://www.linkedin.com/company/snappilyuk/?viewAsMember=true" target="_blank">
        <Text
          fontSize={{ base: '26px', md: 'xl' }}
          fontWeight="semibold"
          letterSpacing="0.2px"
          lineHeight={{ base: '28px', md: 'xl' }}
        >
          Linkedin
        </Text>
      </Link>
      <Link href="https://www.instagram.com/snappily_uk?igsh=aGZmNDgxdzRqcGtx" target="_blank">
        <Text
          fontSize={{ base: '26px', md: 'xl' }}
          fontWeight="semibold"
          letterSpacing="0.2px"
          lineHeight={{ base: '28px', md: 'xl' }}
        >
          Instagram
        </Text>
      </Link>
    </Flex>
    <Link href="/">
      <Flex>
        <BigLogoIcon width={{ base: '361px', md: '1320px' }} height={{ base: '77px', md: '282px' }} />
      </Flex>
    </Link>
    <Flex>
      <Box>
        <Text
          fontSize={{ base: 'exs', md: 'sm' }}
          fontWeight="medium"
          letterSpacing="0.11px"
          lineHeight={{ base: 'exs', md: 'sm' }}
        >
          © 2023 Move Genius Holdings Limited. All rights reserved.
        </Text>
        <Text
          fontSize={{ base: 'exs', md: 'sm' }}
          fontWeight="medium"
          letterSpacing="0.11px"
          lineHeight={{ base: 'exs', md: 'sm' }}
        >
          Company registration number: 14083514 VAT number: 423872882
        </Text>
      </Box>
    </Flex>
  </Flex>
);
