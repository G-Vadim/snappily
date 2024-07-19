'use client';
import { BaseContainer } from './components/BaseContainer';
import { TogetherSection } from './components/TogetherSection';
import { Title } from './home-page-sections/title';
import { KeysList } from './home-page-sections/key-list';
import { Description } from './home-page-sections/description';
import { TargetClients } from './home-page-sections/target-clients';
import { Testimonials } from './home-page-sections/testimonials';
import { Logos } from './home-page-sections/logos';
import { Advantages } from './home-page-sections/advantages';
import { Offer } from './home-page-sections/offer';
import { home } from './data';

const Home = () => (
  <>
    <BaseContainer>
      <Title {...home.titleSection} />
      <div className="flex flex-col gap-[144px]">
        <KeysList keys={home.keys}/>
        <Description {...home.description} />
        <TargetClients targetClients={home.targetClients}/>
      </div>
    </BaseContainer>
    <Testimonials {...home.testimonials} />
    <BaseContainer>
      <div className="flex flex-col gap-[144px]">
        <Logos logos={home.logos} />
        <Advantages {...home.advantages} />
      </div>
    </BaseContainer>
    <Offer {...home.offer} />
    <div className="h-[380px] bg-white"/>
    <TogetherSection className='mt-0'/>
  </>
);

export default Home;