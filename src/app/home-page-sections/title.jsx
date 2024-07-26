'use client';
import { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Flex, Box, Text } from '@chakra-ui/react';

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
    <Flex as="section" justifyContent="space-between" pl="168px" pr="110px" mb="80px">
      <Flex flexDir="column" gap="24px">
        <Flex flexDir="column">
          <Flex gap="8px" maxW="620px" mt="70px">
            <Text as="h1" fontSize="3xl" lineHeight="3xl" fontWeight="bold" letterSpacing="-2px" display="inline">
              Snappily{' '}
            </Text>
            <Box display="inline">
              <Slider {...settings}>
                <Text as="span" fontSize="3xl" lineHeight="3xl" fontWeight="bold" letterSpacing="-2px" color="coral">
                  Simplifies
                </Text>
                <Text as="span" fontSize="3xl" lineHeight="3xl" fontWeight="bold" letterSpacing="-2px" color="coral">
                  Automates
                </Text>
                <Text as="span" fontSize="3xl" lineHeight="3xl" fontWeight="bold" letterSpacing="-2px" color="coral">
                  Accelerates
                </Text>
              </Slider>
            </Box>
          </Flex>
          <Text as="h1" fontSize="3xl" lineHeight="3xl" fontWeight="bold" letterSpacing="-2px" maxW="585px">
            Compliance: One Task at a Time
          </Text>
        </Flex>
        <Text fontSize="base" lineHeight="base" maxW="483px" fontWeight="light">
          {text}
        </Text>
      </Flex>
      <Image src={imageSrc} alt="home-title" width={357} height={448} />
    </Flex>
  );
};
