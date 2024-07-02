import Link from "next/link";

import { BigLogoIcon } from './icons';

export const Footer = () => (
  <footer className="py-20 flex flex-col gap-16">
    <nav>
      <ul className="flex justify-center gap-[133px]">
        <li className="w-[146px] text-center">
          <Link href="/home-movers" className="text-xs font-medium">For Home Movers</Link>
        </li>
        <li className="w-[146px] text-center">
          <Link href="/partners" className="text-xs font-medium">For Partners</Link>
        </li>
        <li className="w-[146px] text-center">
          <Link href="/about-us" className="text-xs font-medium">About Us</Link>
        </li>
        <li className="w-[146px] text-center">
          <Link href="/faq" className="text-xs font-medium">FAQs</Link>
        </li>
      </ul>
    </nav>
    <div className="flex justify-center gap-11">
      <Link href="/" className="text-xl font-semibold tracking-[0.2px]">Linkedin</Link>
      <Link href="/" className="text-xl font-semibold tracking-[0.2px]">Instagram</Link>
    </div>
    <Link href="/">
      <BigLogoIcon />
    </Link>
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium tracking-[0.11px]">© 2023 Snappily Holdings Limited. All rights reserved.</p>
        <p className="text-sm font-medium tracking-[0.11px]">Company registration number: 14083514 VAT number: 423872882</p>
      </div>
      <div className="flex ml-20">
        <p className="px-[23px] py-[11px] text-xs font-semibold text-coral bg-white rounded-[22px] relative z-10">
          We use cookies
        </p>
        <p className="w-[186px] py-[11px] text-xs font-semibold text-center text-linen bg-charcoal rounded-[22px] relative left-[-30px]">
          Ok, that’s fine.
        </p>
      </div>
      <div>
        <p className="text-sm font-medium tracking-[0.11px]">Privacy Policy</p>
        <p className="text-sm font-medium tracking-[0.11px]">Product T&C’s</p>
      </div>
    </div>
  </footer>
)