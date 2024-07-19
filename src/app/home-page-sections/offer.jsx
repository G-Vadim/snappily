'use client';
import { useState } from 'react';
import Image from "next/image";

import { BaseContainer } from "@/app/components/BaseContainer";
import { home } from "@/app/data";

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
    <article className="flex flex-col gap-16 justify-center mt-[104px]">
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
        <div className="relative mt-[67px] h-[488px]">
          <Image
            className={`absolute ${items[activeTabIndex].imageStyle || ''}`}
            style={{ zIndex: 2 }}
            src={items[activeTabIndex].imageSrc}
            alt={items[activeTabIndex].title}
            width={1300}
            height={820}
            priority={activeTabIndex}
          />
          <div
            className="w-[1330px] h-[977px] rounded-[50%] bg-gradient-to-b absolute"
            style={{
              zIndex: 1,
              backgroundImage: 'linear-gradient(to bottom, rgba(255, 0, 51, 0.5) 0%, rgba(137, 49, 76, 0.2) 25%, rgba(255, 0, 51, 0) 50%)'
            }}
          />
        </div>
      </div>
    </article>
  )
}

export const Offer = ({title, text}) => (
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