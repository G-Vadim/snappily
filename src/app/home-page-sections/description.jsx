import Image from "next/image";

export const Description = ({ title, descriptions }) => (
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