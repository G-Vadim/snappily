import Image from "next/image";

import { BaseContainer } from '../components/BaseContainer';
import { PageTitle } from '../components/PageTitle';
import { Article } from '../components/Article';
import { PlatformButtons } from '../components/PlatformButtons';
import { TogetherSection } from '../components/TogetherSection';
import { HandsIcon, CompassIcon } from '../components/icons';
import { partners } from '../data';

const Partners = () => (
  <>
    <BaseContainer>
      <PageTitle {...partners.header}/>
      <section className="flex flex-col gap-6 mt-[75px]">
        {partners.articles.map(({id, ...item}, i) => (
          <Article key={id} revert={!Boolean(i % 2)} {...item}/>
        ))}
      </section>
      <section className="mt-[144px] flex flex-col gap-16 items-center">
        <h2 className="text-2xl max-w-[796px] text-center font-bold -tracking-[2px]">Why is Snappily important in the <span className="text-coral">Transaction Process?</span></h2>
        <div className="flex flex-1 gap-12 items-center justify-center">
          <div className="flex flex-col gap-5">
            <HandsIcon />
            <h3 className="text-md font-semibold -tracking-[2px]">Silent Support Service</h3>
            <p className="text-base font-light">
              At Snappily, we believe in blending digital support with a human touch. We value
              your relationship with your customers, while empowering agencies to run their own business. It&apos;s all about
              that perfect balance of human touch with digital support. So elevate your customer journey with a digital
              app and admin task assistance - saving your team time and hassle while earning revenue by utilizing our
              services.
            </p>
          </div>
          <Image src="/images/IDCheck.png" alt="IDCheck" width={482} height={644} className="min-w-[482px] h-auto"/>
          <div className="flex flex-col gap-5">
            <CompassIcon />
            <h3 className="text-md font-semibold -tracking-[2px]">Automated Task Management</h3>
            <p className="text-base font-light">
              With our clever (but simple) platform, wave goodbye to tracking spreadsheets and chasing customers.
              Our compliance platform handles, tracks and alerts you about compliance tasks, freeing you to focus on what
              truly matters. Reduce admin load by 60% and Reclaim 19 hours monthly* for more important tasks.
              Unlock Exclusive Integrations: Seamlessly connect with Alto&apos;s estate agency CRM and ID providers -
              all conveniently built-in.
            </p>
          </div>
        </div>
        <PlatformButtons/>
      </section>
    </BaseContainer>
    <TogetherSection/>
  </>
);

export default Partners;