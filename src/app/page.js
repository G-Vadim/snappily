'use client';
import { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { BaseContainer } from './components/BaseContainer';
import { Button } from './components/Button';
import { Article } from './components/Article';
import { TogetherSection } from "./components/TogetherSection";
import { home } from './data';

const Title = ({ text, imageSrc }) => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(200);

  useEffect(() => {
    setTimeout(() => setAutoplaySpeed(1600), 1100);
  }, []);

  const settings = useMemo(() => ({
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
      cssEase: "linear"
  }), [autoplaySpeed]);

  return (
    <section className="flex justify-between pl-[168px] pr-[110px] mb-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex gap-2 max-w-[585px]">
            <h1 className="text-3xl font-bold -tracking-[2px] inline">Snappily{' '}</h1>
            <div className="inline">
              <Slider {...settings}>
                <span className="text-3xl font-bold -tracking-[2px] text-coral">Simplifies</span>
                <span className="text-3xl font-bold -tracking-[2px] text-coral">Automates</span>
                <span className="text-3xl font-bold -tracking-[2px] text-coral">Accelerates</span>
              </Slider>
            </div>
          </div>
          <h1 className="text-3xl font-bold -tracking-[2px] max-w-[585px]">Compliance: One Task at a Time</h1>
        </div>
        <p className="text-base max-w-[483px] font-light">{text}</p>
      </div>
      <Image src={imageSrc} alt="home-title" width={357} height={448}/>
    </section>
  );
};

const KeysList = ({keys}) => (
  <section
    className="flex justify-between py-4 px-[42px] items-center border border-w-2 border-dashed rounded-[24px]"
    style={{borderColor: 'rgba(0, 0, 0, 0.24)'}}
  >
    {keys.map(({id, content, isIcon}) => <div key={id}>{isIcon ? content : <span className="text-semi-md font-semibold -tracking-[2px]">{content}</span>}</div>)}
  </section>
);

const Description = ({ title, descriptions }) => (
  <section className="pl-[168px] pr-[124px] flex gap-5 justify-between items-center">
    <Image src="/images/WalkingDog.png" alt="WalkingDog" width={360} height={307} className="h-fit"/>
    <div className="flex flex-col gap-8 max-w-[526px]">
      {title}
      <div className="flex flex-col gap-[26px]">
        {descriptions.map((item, i) => (
          <p
            key={i}
            className={`text-base font-light${i === (descriptions.length - 1) ? ' text-coral' : ''}${i > 0 && i !== (descriptions.length - 1) ? ' font-thin' : ''}`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  </section>
);

const TargetClients = ({ targetClients }) => (
  <section className="flex gap-4">
    {
      targetClients.map(({ id, title, imageSrc, text }) => (
        <div key={id} className="flex flex-col py-[64px] px-20 items-center gap-6 rounded-[24px] bg-white">
          <h3 className="text-semi-md text-coral font-bold">{title}</h3>
          <Image src={imageSrc} alt={title} width={400} height={262} className="h-[205px]"/>
          <p className="text-base font-light text-center">{text}</p>
          <Button className="bg-black text-white font-semibold">Find out more</Button>
        </div>
      ))
    }
  </section>
)

const Advantages = ({ items }) => (
  <section className="flex flex-col gap-6">
    {
      items.map((item, i) => (
        <Article key={i} {...item}/>
      ))
    }
  </section>
);

const WorryList = ({ worryList }) => (
  <article className="flex flex-col w-[650px] mt-[104px]">
    {
      worryList.map((item, i) => (
        <div key={i} className="grid grid-cols-2 gap-10 border-b border-b-1 py-10" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          {
            item.map((el) =>
              el.title
                ? <h3 key={`${i}-${el.id}`} className="text-lg font-semibold text-white -tracking-[2px]">{el.title}</h3>
                : <div key={`${i}-${el.id}`} className="flex flex-col gap-4">
                    {el.icon}
                    <p className="text-[20px] leading-[28px] font-light text-white">{el.text}</p>
                  </div>
            )
          }
        </div>
      ))
    }
  </article>
);

const Tabs = ({ title, items }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <article className="flex flex-col gap-16 justify-center mt-[104px] pb-[543px]">
      <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
      <div>
        <div className="gap col-5 justify-between columns-5 gap-[24px]">
          {
            items.map((el, i) => (
              <div
                key={i}
                className={`py-3 border-t-2 hover:cursor-pointer ${activeTabIndex === i ? 'border-coral' : 'border-charcoal'}`}
                onClick={() => setActiveTabIndex(i)}
              >
                <h3 className="text-base font-semibold text-white text-center">{el.title}</h3>
              </div>
            ))
          }
        </div>
        <div className="relative mt-10">
          <Image
            className="absolute shadow-tab-image rounded-[24px]"
            src={items[activeTabIndex].imageSrc}
            alt={items[activeTabIndex].title}
            width={1440}
            height={1351}
          />
        </div>
      </div>
    </article>
  )
}

const Offer = ({title, text}) => (
  <section className="bg-charcoal pt-[144px] mt-[144px]">
    <BaseContainer>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-16 justify-center">
          <div className="flex flex-col items-center gap-5">
            {title}
            <p className="text-white text-base font-light max-w-[810px] text-center">{text}</p>
          </div>
          <div className="grid grid-cols-5 grid-rows-3 gap-5 px-[167px] max-h-[800px]">
            <div
              className="flex flex-col items-center pt-[20px] px-[39px] gap-[20px] bg-[#DFDEFB] rounded-[24px] col-span-3 row-span-2 justify-between"
            >
              <h3 className="text-md font-semibold">Digital ID & AML Checks</h3>
              <Image src="/images/IDCheck.png" alt="IDCheck" width={480} height={520} className="w-[420px]"/>
            </div>
            <div
              className="flex flex-col items-center pt-[20px] px-[39px] gap-[20px] bg-[#FBE8DE] rounded-[24px] col-span-2 row-span-1"
            >
              <h3 className="text-md font-semibold text-center">Automated Title Deeds</h3>
              <Image src="/images/AutomatedTitleNeeds.png" alt="AutomatedTitleNeeds" width={292} height={179}/>
            </div>
            <div
              className="flex flex-col items-center pt-[20px] px-[39px] gap-[20px] bg-white rounded-[24px] col-span-2 row-span-1"
            >
              <h3 className="text-md font-semibold text-center max-w-[280px]">User-Friendly Property
                Information Forms</h3>
              <Image src="/images/PropertyInfoForm.png" alt="PropertyInfoForm" width={292} height={143}
                     className="max-h-[143px] object-contain"/>
            </div>
            <div
              className="flex flex-col items-center pt-[20px] px-[39px] gap-[20px] bg-white rounded-[24px] col-span-2 row-span-1"
            >
              <h3 className="text-md font-semibold text-center">Effortless E-sign for your Terms of Business</h3>
              <Image src="/images/ESign.png" alt="ESign" width={292} height={143}
                     className="max-h-[143px] object-contain"/>
            </div>
            <div
              className="flex flex-col items-center py-[20px] px-[39px] justify-between bg-[#DEFAFB] rounded-[24px] col-span-3 row-span-1"
            >
              <Image
                src="/images/ScreenWithList.png"
                alt="SecureDocumentStore"
                width={512}
                height={185}
                className="max-h-[160px] object-contain"
              />
              <h3 className="text-md font-semibold text-center">Secure document store</h3>
            </div>
          </div>
        </div>
        <WorryList worryList={home.worryList}/>
        <div className="mt-[144px] w-[984px]">
          {home.benefit}
        </div>
      </div>
      <Tabs {...home.tabs} />
    </BaseContainer>
  </section>
);

const Home = () => (
  <>
    <BaseContainer>
      <Title {...home.titleSection} />
      <div className="flex flex-col gap-[144px]">
        <KeysList keys={home.keys}/>
        <Description {...home.description} />
        <TargetClients targetClients={home.targetClients}/>
        <Advantages {...home.advantages} />
      </div>
    </BaseContainer>
    <Offer {...home.offer} />
    <div className="h-[380px] bg-white"/>
    <TogetherSection className='mt-0'/>
  </>
);

export default Home;