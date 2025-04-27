"use client";

import ArrowRight from '@/assets/arrow-right.svg';
import StarImage from '@/assets/star.png';
import SpringImage from '@/assets/spring.png';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const TranslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">
            Sign up for free today
          </h2>

          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>

          <motion.img src={StarImage.src} alt="Star Image" width={360} className='absolute -left-[350px] -top-[137px]' style={{ translateY: TranslateY }} />
          <motion.img src={SpringImage.src} alt="Spring Image" width={360} className='absolute -right-[331px] -top-[19px]' style={{ translateY: TranslateY }} />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <Link href="https://sorenblank.com" className="btn btn-primary">Get for free</Link>
          <Link href="https://sorenblank.com" className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
