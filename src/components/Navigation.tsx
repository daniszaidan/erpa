import Link from 'next/link';
import ButtonTitle from './ButtonTitle';
import { ArrowRightIcon, UserIcon } from '@heroicons/react/24/outline';
import { NavigationProps } from '@/utils/types';

export default function Navigation({ className }: NavigationProps = {}) {
  return (
    <nav className={`absolute inset-0 mt-25 w-full h-100 flex items-center justify-between px-100 md:px-50 sm:px-25 ${className || ''}`}>
      <Link href="/" className="text-white text-[25px] font-[700]">
        Erpa
      </Link>
      <div className="flex items-center gap-25">
        <ButtonTitle title="Tentang" icon={<ArrowRightIcon />} />
        <ButtonTitle title="Harga" icon={<ArrowRightIcon />} />
        <ButtonTitle title="Kontak" icon={<ArrowRightIcon />} />
        <ButtonTitle title="Masuk" icon={<UserIcon />} />
      </div>
    </nav>
  );
}
