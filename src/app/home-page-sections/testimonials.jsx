import Slider from "react-slick";
import Image from "next/image";

import { StarIcon } from '../components/icons';

const Slide = ({ avatar, rate, text, name }) => (
  <div className="bg-white rounded-[20px] relative flex flex-col justify-between pt-[16px] px-[20px] pb-[28px] gap-[28px] my-[35px] w-[440px]">
    <Image src={avatar} alt="client" width={62} height={62} className="rounded-full absolute -top-[30px] left-[20px] min-w-[62px] min-h-[62px] border border-w-1 border-solid border-charcoal"/>
    <div className="flex justify-end">{Array(rate).fill(undefined).map((_, i) => <StarIcon key={i} />)}</div>
    <p className="text-xs text-black font-light">{text}</p>
    <p className="text-xs font-semibold">{name}</p>
  </div>
)

export const Testimonials = ({ title, items }) => (
  <section className="flex flex-col gap-[93px] mt-[157px] mb-[60px]">
    {title}
    <div className="flex justify-around">
      {items.map((item) => <Slide key={item.id} {...item} />)}
    </div>
  </section>
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