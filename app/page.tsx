import AcmeLogo from '@/app/ui/diet_munch-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import { url } from 'inspector';

export default function Page() {
  
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-6 relative text-black">
  <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
    <source src="/1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="text-center relative z-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Welcome to Diet Munch
    </h1>
    <p className="text-lg md:text-xl mb-4">
      The place where you can get your personalized healthy meal to your doorstep,{' '}
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        Diet Munch
      </a>
      , on a subscription basis.
    </p>
    <Link
      href="/login"
      className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-colors hover:bg-blue-400"
    >
      Log in
    </Link>
  </div>
</main>

  );
}