import Image from 'next/image';

export const Article = ({ imageSrc, title, text, bgColor, revert }) => (
  <article
    className={`flex gap-5 justify-center pt-[64px] pb-[66px] rounded-[24px] ${revert ? 'flex-row-reverse' : ''}`}
    style={{backgroundColor: bgColor}}
  >
    <div className="flex flex-col justify-center gap-5 w-[483px]">
      {title}
      <p className="text-base font-light">{text}</p>
    </div>
    <div className="w-[480px] h-[360px] flex justify-center items-center">
      <Image
        src={imageSrc}
        alt={text}
        width={480}
        height={360}
        className="object-contain w-full h-auto max-w-[480px] max-h-[360px]"
      />
    </div>
  </article>
)