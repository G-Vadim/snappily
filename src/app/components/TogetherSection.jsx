import Image from "next/image";

import { Button } from '../components/Button';

export const TogetherSection = ({ className = 'mt-[144px]' }) => (
  <section className={`flex gap-5 justify-center pt-[106px] pb-[104px] bg-white ${className}`}>
    <div className="flex flex-col justify-center gap-16 w-[483px]">
      <div>
        <h2 className="text-4xl font-bold -tracking-[1px]">
          Let’s make<br/>the next move.
        </h2>
        <h2 className="text-4xl font-bold -tracking-[ 1px] text-coral">Together.</h2>
      </div>
      <Button className="bg-coral text-white px-[26px] font-semibold">Get Started</Button>
    </div>
    <Image src="/images/Together.jpg" alt="together" width={483} height={363}/>
  </section>
);
