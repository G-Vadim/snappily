import BaseLink from 'next/link';
import { Flex, UnorderedList, ListItem, Text } from '@chakra-ui/react';

import { BookDemoModal } from '@/app/components/modals/BookDemoModal';
import { SmallLogoIcon } from './icons';

export const Header = () => {
  return (
    <Flex as="header" justify="space-between" alignItems="center" mt="24px">
      <BaseLink href="/">
        <SmallLogoIcon />
      </BaseLink>
      <nav>
        <UnorderedList display="flex" gap="24px" styleType="none" ml="0">
          <ListItem>
            <BaseLink href="/home-movers">
              <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                For Home Movers
              </Text>
            </BaseLink>
          </ListItem>
          <ListItem>
            <BaseLink href="/partners">
              <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                For Partners
              </Text>
            </BaseLink>
          </ListItem>
          <ListItem>
            <BaseLink href="/about-us">
              <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                About Us
              </Text>
            </BaseLink>
          </ListItem>
          <ListItem>
            <BaseLink href="/faq">
              <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                FAQs
              </Text>
            </BaseLink>
          </ListItem>
        </UnorderedList>
      </nav>
      <Flex>
        <BookDemoModal />
      </Flex>
    </Flex>
  );
};
