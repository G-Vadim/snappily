import Image from "next/image";

import { PageTitle } from '../components/PageTitle';
import { Article } from '../components/Article';
import { BaseContainer } from '../components/BaseContainer';
import { TogetherSection } from '../components/TogetherSection';
import { PlatformButtons } from '../components/PlatformButtons';
import { homeMovers } from '../data';

const HomeMovers = () => (
  <>
    <BaseContainer>
      <PageTitle {...homeMovers.header}/>
      <section className="flex flex-col gap-6 mt-[75px]">
        {homeMovers.articles.map(({id, ...item}, i) => (
          <Article key={id} revert={!Boolean(i % 2)} {...item}/>
        ))}
      </section>
      <section className="flex gap-12 justify-center items-center mt-[144px]">
        <Image src="/images/IDCheck.png" alt="IDCheck" width={482} height={644} className="rounded-[24px] h-full"/>
        <div className="flex flex-col gap-10 w-[437px]">
          <h2 className="text-2xl font-bold -tracking-[2px] max-w-[350px]">
            Here’s{' '}<span className="text-coral">how</span>{' '}our service works
          </h2>
          <div className="flex flex-col font-light gap-8">
            <p className="text-base">
              Our Home Mover App is your one-stop hub for managing initial compliance tasks for your move, all with just a
              few clicks.
              <br/>
              <br/>
              <span className="font-thin">
                Available on mobile or via the web, our user-friendly platform is tailored to guide you through the legal
              hoops of buying and selling. Sellers can effortlessly complete compliance documentation digitally to
              e-signing estate agency contracts. With regulations on the rise, paperwork can pile up fast. Remember, it&apos;s
              a legal requirement to complete all this paperwork, that&apos;s why we&apos;re here to help you tackle it all early
              on, ensuring a smooth journey with no hiccups down the road.
              </span>
            </p>
            <PlatformButtons />
          </div>
        </div>
      </section>
    </BaseContainer>
    <TogetherSection/>
  </>
);

export default HomeMovers;