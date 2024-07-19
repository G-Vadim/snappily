import Image from "next/image";

export const Logos = ({ logos }) => (
  <div className="flex justify-center gap-8">
    {logos.map(({ id, imageSrc }) => (
      <div key={id}>
        <Image
          className="rounded-[6px]"
          src={imageSrc}
          alt={`logo-${id}`}
          width={120}
          height={90}
        />
      </div>
    ))}
  </div>
);