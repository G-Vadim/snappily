import Image from "next/image";

import { Button } from "@/app/components/Button";

export const TargetClients = ({ targetClients }) => (
  <section className="flex gap-4">
    {
      targetClients.map(({ id, title, imageSrc, text }) => (
        <div key={id} className="flex flex-col py-[64px] px-20 items-center gap-6 rounded-[24px] bg-white w-[650px] h-[650px]">
          <h3 className="text-semi-md text-coral font-bold">{title}</h3>
          <div className="flex justify-center items-center h-[350px]">
            <Image src={imageSrc} alt={title} width={400} height={262} className="h-[205px]"/>
          </div>
          <p className="text-base font-light text-center">{text}</p>
          <Button className="bg-black text-white font-semibold">Find out more</Button>
        </div>
      ))
    }
  </section>
);