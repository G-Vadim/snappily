import Image from 'next/image';

export const PageTitle = ({ imageSrc, title, subTitle, note }) => (
  <section className="flex flex-col gap-10 items-center">
    <Image src={imageSrc} alt="page-title" width={480} height={248} className="max-h-[248px] object-contain"/>
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-5xl text-center font-bold -tracking-[2px]">
        {title}
      </h1>
      {subTitle && (
        <p className="text-base max-w-[650px] text-center font-light">{subTitle}</p>
      )}
      {note && (
        <p className="text-base max-w-[650px] text-center font-light">{note}</p>
      )}
    </div>
  </section>
);
