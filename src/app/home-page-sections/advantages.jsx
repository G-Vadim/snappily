import { Flex } from '@chakra-ui/react';

import { Article } from '@/app/components/Article';

export const Advantages = ({ items }) => (
  <Flex as="section" flexDir="column" gap="24px">
    {items.map((item, i) => (
      <Article key={i} {...item} />
    ))}
  </Flex>
);
