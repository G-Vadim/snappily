import Link from 'next/link';

import { BookDemoModal } from "@/app/components/modals/BookDemoModal";
import { SmallLogoIcon } from './icons';

export const Header = () => (
  <header className="mt-6 flex justify-between items-center">
    <Link href="/">
      <SmallLogoIcon />
    </Link>
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link href="/home-movers" className="text-xs font-medium">For Home Movers</Link>
        </li>
        <li>
          <Link href="/partners" className="text-xs font-medium">For Partners</Link>
        </li>
        <li>
          <Link href="/about-us" className="text-xs font-medium">About Us</Link>
        </li>
        <li>
          <Link href="/faq" className="text-xs font-medium">FAQs</Link>
        </li>
      </ul>
    </nav>
    <div className="flex gap-6 items-center">
      <BookDemoModal />
    </div>
  </header>
);
