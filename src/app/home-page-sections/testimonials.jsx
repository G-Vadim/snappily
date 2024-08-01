// import Slider from "react-slick";
import Image from 'next/image';
import { Flex, Text, Center } from '@chakra-ui/react';

import { StarIcon } from '@/app/components/icons';

const Slide = ({ avatar, rate, text, name }) => (
  <Flex
    flexDir="column"
    justifyContent="space-between"
    bgColor="white"
    rounded="sm"
    position="relative"
    pt="16px"
    px="20px"
    pb="28px"
    gap="28px"
    mt="35px"
    mb={{ base: '0', md: '35px' }}
    w="440px"
  >
    <Image
      src={avatar}
      alt="client"
      width={62}
      height={62}
      style={{
        borderRadius: '50%',
        position: 'absolute',
        top: '-30px',
        left: '20px',
        minWidth: '62px',
        minHeight: '62px',
        border: '1px solid #29262C',
      }}
    />
    <Flex justifyContent="flex-end">
      {Array(rate)
        .fill(undefined)
        .map((_, i) => (
          <StarIcon key={i} />
        ))}
    </Flex>
    <Text fontSize="xs" lineHeight="xs" fontWeight="light" color="black">
      {text}
    </Text>
    <Text fontSize="xs" lineHeight="xs" fontWeight="semibold">
      {name}
    </Text>
  </Flex>
);

export const Testimonials = ({ title, items }) => (
  <Flex
    flexDir="column"
    gap={{ base: '24px', md: '93px' }}
    mt={{ base: '40px', md: '157px' }}
    mb={{ base: 0, md: '60px' }}
    px={{ base: '16px', md: '0' }}
  >
    {title}
    <Flex justifyContent="space-around" display={{ base: 'none', md: 'flex' }}>
      {items.map((item) => (
        <Slide key={item.id} {...item} />
      ))}
    </Flex>
    <Center display={{ base: 'flex', md: 'none' }}>
      <Slide {...items[0]} />
    </Center>
  </Flex>
);

//export const Testimonials = ({ title, items }) => {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 8000,
//     autoplaySpeed: 10,
//     cssEase: "linear",
//     className: 'testimonials'
//   };
//
//   return (
//     <section className="flex flex-col gap-[93px] mt-[157px] mb-[60px]">
//       {title}
//       <Slider {...settings}>
//         {items.map((item) => <Slide key={item.id} {...item} />)}
//       </Slider>
//     </section>
//   );
// };
