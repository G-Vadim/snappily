import Image from 'next/image';
import { Flex, Box } from '@chakra-ui/react';

export const Logos = ({ logos }) => (
  <Flex justifyContent="center" gap="32px">
    {logos.map(({ id, imageSrc }) => (
      <Box key={id}>
        <Image
          src={imageSrc}
          alt={`logo-${id}`}
          width={120}
          height={90}
          style={{
            borderRadius: '6px',
          }}
        />
      </Box>
    ))}
  </Flex>
);
