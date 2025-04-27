"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";

// Import customer logos (assuming these exist in your assets folder)
import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";

// Import customer avatars (assuming these exist in your assets folder)
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

export default function Customers() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // Case studies data
    const caseStudies = [
        {
            company: "Acme Corporation",
            logo: AcmeLogo,
            title: "How Acme increased team productivity by 35%",
            description: "Learn how Acme's marketing team streamlined their workflow and improved collaboration across departments.",
            stats: [
                { value: "35%", label: "Productivity increase" },
                { value: "12hrs", label: "Time saved weekly" },
                { value: "98%", label: "Team satisfaction" }
            ]
        },
        {
            company: "Quantum Innovations",
            logo: QuantumLogo,
            title: "Quantum's journey to seamless project management",
            description: "Discover how Quantum Innovations transformed their project delivery process and reduced missed deadlines.",
            stats: [
                { value: "40%", label: "Faster delivery" },
                { value: "60%", label: "Fewer meetings" },
                { value: "3x", label: "Project capacity" }
            ]
        },
        {
            company: "Echo Technologies",
            logo: EchoLogo,
            title: "Scaling operations while maintaining quality",
            description: "See how Echo Technologies managed to double their team size while improving their quality control processes.",
            stats: [
                { value: "100%", label: "Team growth" },
                { value: "25%", label: "Quality improvement" },
                { value: "45%", label: "Cost reduction" }
            ]
        }
    ];

    // Featured testimonials
    const featuredTestimonials = [
        {
            quote: "Motion has completely transformed how our team collaborates. The intuitive interface and powerful features have made project management a breeze.",
            author: "Jamie Rivera",
            position: "Head of Operations, Acme Corporation",
            image: avatar1
        },
        {
            quote: "We&apos;ve tried numerous productivity tools, but Motion stands out with its seamless integration capabilities and customizable workflows.",
            author: "Morgan Lee",
            position: "CTO, Quantum Innovations",
            image: avatar3
        },
        {
            quote: "The ROI on Motion has been incredible. Our team spends less time managing tasks and more time delivering value to our customers.",
            author: "Casey Jordan",
            position: "Product Manager, Echo Technologies",
            image: avatar4
        },
        {
            quote: "Motion&apos;s analytics have given us unprecedented visibility into our workflow bottlenecks, helping us optimize our processes continuously.",
            author: "Taylor Kim",
            position: "Director of Engineering, Celestial Systems",
            image: avatar2
        }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="pt-16 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Success Stories
                            </div>
                        </div>
                        <h1 className="section-title mt-5">
                            Our customers achieve great things
                        </h1>
                        <p className="section-description mt-5">
                            Discover how organizations of all sizes use Motion to streamline their workflows and boost productivity
                        </p>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold tracking-tight text-[#010D3E]">
                            Trusted by innovative teams worldwide
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        <Image src={AcmeLogo} alt="Acme Corporation" className="h-8 w-auto" />
                        <Image src={QuantumLogo} alt="Quantum Innovations" className="h-8 w-auto" />
                        <Image src={EchoLogo} alt="Echo Technologies" className="h-8 w-auto" />
                        <Image src={CelestialLogo} alt="Celestial Systems" className="h-8 w-auto" />
                        <Image src={PulseLogo} alt="Pulse Digital" className="h-8 w-auto" />
                        <Image src={ApexLogo} alt="Apex Solutions" className="h-8 w-auto" />
                    </div>
                </div>
            </section>

            {/* Featured Case Studies */}
            <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Case Studies
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Real results from real customers
                        </h2>
                        <p className="section-description mt-5">
                            See how organizations like yours have achieved their goals with Motion
                        </p>
                    </div>

                    <div className="mt-16 space-y-16">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-white rounded-3xl border border-[#222222]/10 shadow-[0_7px_14px_#EAEAEA] overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:w-1/2 p-10 md:p-12 relative">
                                        <div className="flex items-center mb-6">
                                            <Image src={study.logo} alt={study.company} className="h-8 w-auto mr-4" />
                                            <span className="text-[#010D3E]/60 font-medium">{study.company}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight text-[#010D3E] mb-4">
                                            {study.title}
                                        </h3>
                                        <p className="text-[#010D3E] mb-8">
                                            {study.description}
                                        </p>
                                        <div className="flex flex-wrap gap-8 mb-8">
                                            {study.stats.map((stat, statIndex) => (
                                                <div key={statIndex}>
                                                    <div className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] text-transparent bg-clip-text">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-sm text-[#010D3E]/60">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="flex items-center gap-2 text-[#183EC2] font-medium hover:gap-3 transition-all duration-100">
                                            <span>Read full case study</span>
                                            <ArrowIcon className="h-4 w-4" />
                                        </button>

                                        {index % 2 === 0 && (
                                            <motion.div
                                                className="absolute -right-16 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] opacity-70 blur-xl hidden md:block"
                                                style={{ translateY }}
                                            />
                                        )}
                                    </div>
                                    <div className="md:w-1/2 bg-gradient-to-br from-[#183EC2] via-[#6A98F0] to-[#EAEEFE] flex items-center justify-center p-10">
                                        <div className="aspect-video w-full bg-white/10 rounded-xl"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Testimonials */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Testimonials
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            What our customers say
                        </h2>
                        <p className="section-description mt-5">
                            See what our customers are saying about &quot;Motion&quot;
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        {featuredTestimonials.map((testimonial, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white shadow-[0_7px_14px_#EAEAEA]">
                                <div className="flex items-center gap-4 mb-6">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        width={56}
                                        height={56}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-bold">{testimonial.author}</h3>
                                        <p className="text-sm text-[#010D3E]/60">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="text-[#010D3E] text-lg leading-relaxed">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Breakdown */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Motion works for every industry
                        </h2>
                        <p className="section-description mt-5">
                            See how teams across different sectors leverage our platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                industry: "Technology",
                                description: "Software development teams use Motion to track sprints, manage backlogs, and coordinate releases across distributed teams.",
                                companies: "Quantum, Echo, Apex"
                            },
                            {
                                industry: "Marketing",
                                description: "Marketing teams rely on Motion to plan campaigns, track content calendars, and measure performance across channels.",
                                companies: "Acme, Pulse, Celestial"
                            },
                            {
                                industry: "Education",
                                description: "Educational institutions implement Motion to manage curriculum development, student projects, and administrative tasks.",
                                companies: "Global University, Learning Tree"
                            },
                            {
                                industry: "Healthcare",
                                description: "Healthcare providers streamline patient care coordination, staff scheduling, and compliance tracking with Motion.",
                                companies: "MediCare, HealthFirst"
                            },
                            {
                                industry: "Finance",
                                description: "Financial teams use Motion to manage reporting cycles, compliance tasks, and cross-departmental projects.",
                                companies: "Capital Group, Secure Finance"
                            },
                            {
                                industry: "Non-profit",
                                description: "Non-profit organizations coordinate volunteers, track grants, and manage events efficiently with Motion.",
                                companies: "Global Impact, Community First"
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white flex flex-col items-start">
                                <h3 className="text-xl font-bold tracking-tight">{item.industry}</h3>
                                <p className="mt-4 text-[#010D3E]">{item.description}</p>
                                <div className="mt-4 text-sm text-[#010D3E]/60">
                                    <span className="font-medium">Popular with:</span> {item.companies}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Get Started
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Join our growing customer community
                        </h2>
                        <p className="section-description mt-5">
                            Experience the same benefits that thousands of organizations are already enjoying
                        </p>

                        <div className="flex justify-center mt-10">
                            <button className="btn btn-primary">
                                Try Motion for free
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
} 