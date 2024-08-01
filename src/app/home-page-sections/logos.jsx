import Image from 'next/image';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { useMobile } from '@/app/utils/useMobile';

export const Logos = ({ logos }) => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <Flex overflow="hidden" position="relative" w="100%" h="90px" mt="40px">
        <motion.div
          style={{
            display: 'flex',
            position: 'absolute',
            right: '0',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '650%',
            gap: '20px',
          }}
          animate={{ right: ['-550%', '-222%'] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          {logos.map(({ id, imageSrc }) => (
            <Box key={id} w="120px" h="90px">
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
          {logos.map(({ id, imageSrc }) => (
            <Box key={`${id}-${id}`} w="120px" h="90px">
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
        </motion.div>
      </Flex>
    );
  }

  return (
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
};
