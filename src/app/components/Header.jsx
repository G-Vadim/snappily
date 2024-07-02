import Link from 'next/link';

import { SmallLogoIcon } from './icons';
import { Button } from './Button';

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
      <Link href="/" className="text-xs font-medium">Login</Link>
      <Button className="text-coral bg-white">Book a demo</Button>
    </div>
  </header>
);
