'use client';
import BaseLink from 'next/link';
import {
  Flex,
  UnorderedList,
  ListItem,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBoolean,
} from '@chakra-ui/react';

import { useMobile } from '@/app/utils/useMobile';
import { BookDemoModal } from '@/app/components/modals/BookDemoModal';
import { SmallLogoIcon, HamburgerIcon } from './icons';
import { Button } from '@/app/components/Button';

export const Header = () => {
  const isMobile = useMobile();
  const [showModal, setShowModal] = useBoolean(false);

  if (isMobile) {
    return (
      <Flex
        p="16px"
        w="full"
        justifyContent="space-between"
        boxShadow="0 -5px 38px 0 rgba(0, 0, 0, 0.2)"
        borderBottom="1px solid #BFBFBF"
        position="fixed"
        bgColor="base"
        zIndex="3"
      >
        <BaseLink href="/">
          <SmallLogoIcon />
        </BaseLink>
        <Menu>
          <MenuButton
            h="32px"
            minW="32px"
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            bgColor="base"
          />
          <MenuList>
            <BaseLink href="/home-movers">
              <MenuItem>
                <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                  For Home Movers
                </Text>
              </MenuItem>
            </BaseLink>
            <BaseLink href="/partners">
              <MenuItem>
                <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                  For Partners
                </Text>
              </MenuItem>
            </BaseLink>
            <BaseLink href="/about-us">
              <MenuItem>
                <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                  About Us
                </Text>
              </MenuItem>
            </BaseLink>
            <BaseLink href="/faq">
              <MenuItem>
                <Text fontSize="xs" fontWeight="medium" lineHeight="xs">
                  FAQs
                </Text>
              </MenuItem>
            </BaseLink>
            <MenuItem>
              <Text
                fontSize="xs"
                fontWeight="medium"
                lineHeight="xs"
                onClick={() => {
                  setShowModal.on();
                }}
              >
                Book a demo
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
        <BookDemoModal show={showModal} onClose={() => setShowModal.off()} />
      </Flex>
    );
  }

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
      <Button
        color="coral"
        bgColor="white"
        onClick={() => {
          setShowModal.on();
        }}
      >
        Book a demo
      </Button>
      <BookDemoModal show={showModal} onClose={() => setShowModal.off()} />
    </Flex>
  );
};
