import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} height={40} alt="Logo" className="relative" />
        </div>


        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/customers">Customers</a>
          <a href="/help">Help</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <Link href="https://x.com/sorenblank">
            <SocialX />
          </Link>

          <Link href="https://instagram.com/sorenblank_">
            <SocialInsta />
          </Link>

          <Link href="https://linkedin.com/in/sorenblank">
            <SocialLinkedIn />
          </Link>


        </div>

        <p className="mt-6">&copy; 2024 Motion, Inc. All rights reserved. Created by <a href="https://sorenblank.com" className="underline underline-offset-4">Soren</a>.</p>
      </div>
    </footer>
  );
};
