"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Features() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="pt-16 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Powerful & Intuitive
                            </div>
                        </div>
                        <h1 className="section-title mt-5">
                            Features that drive productivity
                        </h1>
                        <p className="section-description mt-5">
                            Discover how Motion helps teams streamline workflows, collaborate effectively, and achieve their goals faster.
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Highlights Section */}
            <section ref={sectionRef} className="py-24 bg-white overflow-x-clip">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Key Features
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Everything you need to succeed
                        </h2>
                        <p className="section-description mt-5">
                            Our platform combines powerful features with an intuitive interface to help you work smarter, not harder.
                        </p>
                    </div>

                    <div className="mt-16 space-y-24">
                        {/* Feature 1 */}
                        <div className="md:flex items-center gap-16">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                                    Task Management
                                </h3>
                                <p className="mt-6 text-[#010D3E] text-lg leading-relaxed">
                                    Create, organize, and prioritize tasks with our intuitive drag-and-drop interface. Set deadlines, assign responsibilities, and track progress in real-time.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {["Custom task views", "Priority settings", "Deadline tracking", "Task dependencies"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#010D3E]">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 md:w-1/2 relative">
                                <div className="rounded-3xl overflow-hidden border border-[#222222]/10">
                                    <div
                                        className="w-full aspect-video bg-gradient-to-br from-[#183EC2] via-[#6A98F0] to-[#EAEEFE]"
                                        aria-label="Task Management"
                                    />
                                </div>
                                <motion.div
                                    className="absolute -right-16 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] opacity-70 blur-xl"
                                    style={{ translateY }}
                                />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="md:flex items-center flex-row-reverse gap-16">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                                    Team Collaboration
                                </h3>
                                <p className="mt-6 text-[#010D3E] text-lg leading-relaxed">
                                    Work together seamlessly with real-time updates, shared workspaces, and integrated communication tools. Keep everyone aligned and moving in the same direction.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {["Shared workspaces", "Real-time updates", "Comment threads", "Team dashboards"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#010D3E]">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 md:w-1/2 relative">
                                <div className="rounded-3xl overflow-hidden border border-[#222222]/10">
                                    <div
                                        className="w-full aspect-video bg-gradient-to-br from-[#F87BFF] via-[#D2DCFF] to-[#2FD8FE]"
                                        aria-label="Team Collaboration"
                                    />
                                </div>
                                <motion.div
                                    className="absolute -left-16 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#183EC2] to-[#6A98F0] opacity-70 blur-xl"
                                    style={{ translateY }}
                                />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="md:flex items-center gap-16">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                                    Progress Analytics
                                </h3>
                                <p className="mt-6 text-[#010D3E] text-lg leading-relaxed">
                                    Gain insights into your team&apos;s performance with comprehensive analytics and reporting. Identify bottlenecks, track productivity trends, and make data-driven decisions.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {["Performance dashboards", "Custom reports", "Productivity metrics", "Time tracking"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-[#010D3E]">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 md:w-1/2 relative">
                                <div className="rounded-3xl overflow-hidden border border-[#222222]/10">
                                    <div
                                        className="w-full aspect-video bg-gradient-to-br from-[#FFDD9B] via-[#C2F0B1] to-[#2FD8FE]"
                                        aria-label="Progress Analytics"
                                    />
                                </div>
                                <motion.div
                                    className="absolute -right-16 -top-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#FFDD9B] to-[#C2F0B1] opacity-70 blur-xl"
                                    style={{ translateY }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Seamless Integration
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Works with your favorite tools
                        </h2>
                        <p className="section-description mt-5">
                            Connect Motion with the tools you already use to create a seamless workflow
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="aspect-square rounded-xl bg-white border border-[#222222]/10 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] opacity-70"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customization Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Tailored to your workflow
                        </h2>
                        <p className="section-description mt-5">
                            Customize Motion to match exactly how your team works
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Custom Fields",
                                description: "Create fields specific to your workflow needs to track the information that matters most to your team."
                            },
                            {
                                title: "Workflow Templates",
                                description: "Start quickly with pre-built templates or create your own to standardize processes across your organization."
                            },
                            {
                                title: "Automation Rules",
                                description: "Set up triggers and actions to automate repetitive tasks and keep your projects moving forward."
                            },
                            {
                                title: "Personalized Views",
                                description: "Choose from Kanban boards, lists, calendars, or Gantt charts to visualize your work your way."
                            },
                            {
                                title: "Role-Based Access",
                                description: "Control who can view and edit specific projects, tasks, or sensitive information."
                            },
                            {
                                title: "White Labeling",
                                description: "Apply your brand colors and logo to create a consistent experience for your team and clients."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white flex flex-col items-start max-w-none">
                                <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="mt-4 text-[#010D3E]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Get Started
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Ready to boost your productivity?
                        </h2>
                        <p className="section-description mt-5">
                            Join thousands of teams already using Motion to streamline their workflows
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