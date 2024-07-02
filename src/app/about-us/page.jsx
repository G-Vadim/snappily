import Link from 'next/link';
import Image from 'next/image';

import { BaseContainer } from '../components/BaseContainer';
import { PageTitle } from '../components/PageTitle';
import { TogetherSection } from '../components/TogetherSection';
import { HandsIcon } from '../components/icons';
import { aboutUs } from '../data';

const AboutUs = () => (
  <>
    <BaseContainer>
      <PageTitle {...aboutUs.header}/>
      <section className="mt-[140px] flex flex-col gap-16 items-center">
        <HandsIcon width={100} height={100} />
        <h2 className="text-2xl max-w-[480px] text-center font-bold -tracking-[2px]">
          <span className="text-coral">Snappily Support</span> for home movers
        </h2>
        <div className="grid grid-cols-2 gap-5 max-w-[985px]">
          <div className="flex flex-col gap-5">
            {aboutUs.points.map((item, i) => (
              <p key={i} className="text-base font-light">{item}</p>
            ))}
          </div>
          <div className="flex flex-col justify-between items-center px-[39px] pt-[39px] rounded-[24px] bg-white">
            <h2
              className="text-semi-md text-center font-bold"
            >
              Send us a message at
              <br/>
              <Link
                className="text-coral"
                href="mailto:support@snapilly.co.uk"
              >
                support@snapilly.co.uk
              </Link>
            </h2>
            <Image src="/images/FingerClick.jpg" width={404} height={277} alt="finger-click"/>
          </div>
        </div>
      </section>
    </BaseContainer>
    <TogetherSection/>
  </>
);

export default AboutUs;