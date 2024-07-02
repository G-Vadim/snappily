import { Button } from '../components/Button';
import { AndroidIcon, AppleIcon } from '../components/icons';

export const PlatformButtons = () => (
  <div className="flex gap-4">
    <Button className="bg-white text-coral font-semibold px-[26px] flex gap-2.5">
      <AppleIcon/>
      App Store
    </Button>
    <Button className="bg-white text-coral font-semibold px-[26px] flex gap-2.5">
      <AndroidIcon/>
      Play Store
    </Button>
  </div>
);
