import Link from 'next/link';
import { Flex, UnorderedList, ListItem, Text, Box } from '@chakra-ui/react';

import { BigLogoIcon } from './icons';

export const Footer = () => (
  <Flex as="footer" flexDir="column" py="80px" gap="64px">
    <nav>
      <UnorderedList display="flex" justifyContent="center" gap="133px" styleType="none" ml="0">
        <ListItem w="146px" textAlign="center">
          <Link href="/home-movers">
            <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
              For Home Movers
            </Text>
          </Link>
        </ListItem>
        <ListItem w="146px" textAlign="center">
          <Link href="/partners">
            <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
              For Partners
            </Text>
          </Link>
        </ListItem>
        <ListItem w="146px" textAlign="center">
          <Link href="/about-us">
            <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
              About Us
            </Text>
          </Link>
        </ListItem>
        <ListItem w="146px" textAlign="center">
          <Link href="/faq">
            <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
              FAQs
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
    <Flex justifyContent="center" gap="44px">
      <Link href="https://www.linkedin.com/company/snappilyuk/?viewAsMember=true" target="_blank">
        <Text fontSize="xl" fontWeight="semibold" letterSpacing="0.2px" lineHeight="xl">
          Linkedin
        </Text>
      </Link>
      <Link href="https://www.instagram.com/snappily_uk?igsh=aGZmNDgxdzRqcGtx" target="_blank">
        <Text fontSize="xl" fontWeight="semibold" letterSpacing="0.2px" lineHeight="xl">
          Instagram
        </Text>
      </Link>
    </Flex>
    <Link href="/">
      <BigLogoIcon />
    </Link>
    <Flex>
      <Box>
        <Text fontSize="sm" fontWeight="medium" letterSpacing="0.11px" lineHeight="sm">
          © 2023 Move Genius Holdings Limited. All rights reserved.
        </Text>
        <Text fontSize="sm" fontWeight="medium" letterSpacing="0.11px" lineHeight="sm">
          Company registration number: 14083514 VAT number: 423872882
        </Text>
      </Box>
    </Flex>
  </Flex>
);
