'use client';
import { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Flex, Box, Text, Center } from '@chakra-ui/react';

export const Title = ({ text, imageSrc }) => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(200);

  useEffect(() => {
    setTimeout(() => setAutoplaySpeed(1600), 1100);
  }, []);

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: autoplaySpeed,
      cssEase: 'linear',
    }),
    [autoplaySpeed]
  );

  return (
    <Flex
      as="section"
      justifyContent="space-between"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      pl={{ base: '0', md: '168px' }}
      pr={{ base: '0', md: '110px' }}
      gap={{ base: '12px', md: '0' }}
    >
      <Flex flexDir="column" gap={{ base: '20px', md: '24px' }}>
        <Flex flexDir="column">
          <Flex gap={{ base: '4px', md: '8px' }} maxW="620px" mt={{ base: '0', md: '70px' }}>
            <Text
              as="h1"
              fontSize={{ base: '36px', md: '3xl' }}
              lineHeight={{ base: '48px', md: '3xl' }}
              fontWeight="bold"
              letterSpacing="-2px"
              display="inline"
            >
              Snappily{' '}
            </Text>
            <Box display="inline">
              <Slider {...settings}>
                <Text
                  as="span"
                  fontSize={{ base: '36px', md: '3xl' }}
                  lineHeight={{ base: '48px', md: '3xl' }}
                  fontWeight="bold"
                  letterSpacing="-2px"
                  color="coral"
                >
                  Simplifies
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: '36px', md: '3xl' }}
                  lineHeight={{ base: '48px', md: '3xl' }}
                  fontWeight="bold"
                  letterSpacing="-2px"
                  color="coral"
                >
                  Automates
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: '36px', md: '3xl' }}
                  lineHeight={{ base: '48px', md: '3xl' }}
                  fontWeight="bold"
                  letterSpacing="-2px"
                  color="coral"
                >
                  Accelerates
                </Text>
              </Slider>
            </Box>
          </Flex>
          <Text
            as="h1"
            fontSize={{ base: '36px', md: '3xl' }}
            lineHeight={{ base: '48px', md: '3xl' }}
            fontWeight="bold"
            letterSpacing="-2px"
            maxW="585px"
          >
            Compliance: One Task at a Time
          </Text>
        </Flex>
        <Text
          fontSize={{ base: 'mxs', md: 'base' }}
          lineHeight={{ base: 'msm', md: 'base' }}
          maxW="483px"
          fontWeight="light"
        >
          {text}
        </Text>
      </Flex>
      <Center display={{ base: 'flex', md: 'none' }}>
        <Image
          src={imageSrc}
          alt="page-title"
          width={357}
          height={448}
          style={{ objectFit: 'contain', maxHeight: '248px' }}
        />
      </Center>
      <Center display={{ base: 'none', md: 'flex' }}>
        <Image src={imageSrc} alt="home-title" width={357} height={448} />
      </Center>
    </Flex>
  );
};
