import Image from "next/image";

export const Phone = () => (
  <div className="relative rounded-[24px] overflow-hidden min-w-[482px]">
    <Image src="/images/MobilePhone.jpg" alt="phone-background" width={482} height={643} style={{ zIndex: 1 }} />
    <Image
      src="/images/App.png"
      alt="phone-app"
      width={544}
      height={1172}
      style={{ zIndex: 2, borderColor: '#FF0033' }}
      className="absolute w-[332px] h-[720px] top-[47px] left-[75px] border border-w-2 rounded-[38px]"
    />
  </div>
)