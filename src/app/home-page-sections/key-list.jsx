import { Flex, Box, Text } from '@chakra-ui/react';

export const KeysList = ({ keys }) => (
  <Flex
    as="section"
    justifyContent="space-between"
    alignItems="center"
    py="16px"
    px="42px"
    borderWidth="1px"
    borderStyle="dashed"
    borderColor="rgba(0, 0, 0, 0.24)"
    rounded="base"
  >
    {keys.map(({ id, content, isIcon }) => (
      <Box key={id}>
        {isIcon ? (
          content
        ) : (
          <Text as="span" fontSize="semi-md" lineHeight="semi-md" fontWeight="semibold" letterSpacing="-2px">
            {content}
          </Text>
        )}
      </Box>
    ))}
  </Flex>
);
