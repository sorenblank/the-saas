"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";

export default function Updates() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // State for filtering updates
    const [activeFilter, setActiveFilter] = useState("all");

    // Updates data
    const updates = [
        {
            title: "Motion 2.0 - Major Platform Redesign",
            date: "June 15, 2024",
            category: "major",
            description: "We&apos;re excited to announce the launch of Motion 2.0, featuring a complete UI redesign, improved performance, and several new features to enhance your productivity.",
            features: [
                "Completely redesigned user interface",
                "Improved task management system",
                "Enhanced collaboration tools",
                "New analytics dashboard",
                "Faster performance across all devices"
            ]
        },
        {
            title: "New Integration: Slack and Microsoft Teams",
            date: "May 22, 2024",
            category: "feature",
            description: "Stay connected with your team without switching contexts. Our new integrations with Slack and Microsoft Teams allow you to manage tasks directly from your communication platforms.",
            features: [
                "Create and assign tasks from Slack/Teams",
                "Receive notifications about task updates",
                "Share project progress with team channels",
                "Convert messages into actionable tasks"
            ]
        },
        {
            title: "Mobile App Improvements",
            date: "April 10, 2024",
            category: "improvement",
            description: "We&apos;ve made significant improvements to our mobile experience, ensuring you can stay productive on the go with better performance and new features.",
            features: [
                "Offline mode for working without internet",
                "Improved task creation flow",
                "Enhanced notification management",
                "Better synchronization between devices"
            ]
        },
        {
            title: "Bug Fixes and Performance Updates",
            date: "March 5, 2024",
            category: "bugfix",
            description: "This release focuses on stability and performance improvements across the platform, addressing several reported issues and optimizing the overall experience.",
            features: [
                "Fixed calendar sync issues",
                "Resolved task assignment notifications",
                "Improved loading times for large projects",
                "Fixed search functionality in the dashboard"
            ]
        },
        {
            title: "Custom Fields and Advanced Filtering",
            date: "February 12, 2024",
            category: "feature",
            description: "Customize your workflow with new custom fields and take advantage of our advanced filtering options to find exactly what you need, when you need it.",
            features: [
                "Create custom fields for tasks and projects",
                "Advanced filtering across all views",
                "Saved filters for quick access",
                "Bulk edit capabilities for multiple tasks"
            ]
        }
    ];

    // Roadmap items
    const roadmapItems = [
        {
            title: "AI-Powered Task Recommendations",
            quarter: "Q3 2024",
            description: "Intelligent suggestions for task prioritization and resource allocation based on your team&apos;s work patterns and project deadlines.",
            status: "in-progress"
        },
        {
            title: "Advanced Time Tracking",
            quarter: "Q3 2024",
            description: "Comprehensive time tracking with detailed reports, billable hours calculation, and integration with popular accounting software.",
            status: "in-progress"
        },
        {
            title: "Custom Dashboards",
            quarter: "Q4 2024",
            description: "Build personalized dashboards with the metrics and visualizations that matter most to you and your team.",
            status: "planned"
        },
        {
            title: "Enhanced Mobile Experience",
            quarter: "Q4 2024",
            description: "Major updates to our mobile apps with new features and improved performance for productivity on the go.",
            status: "planned"
        },
        {
            title: "Enterprise Security Features",
            quarter: "Q1 2025",
            description: "Advanced security controls, audit logs, and compliance features designed for enterprise customers.",
            status: "planned"
        }
    ];

    // Filter updates based on active filter
    const filteredUpdates = activeFilter === "all"
        ? updates
        : updates.filter(update => update.category === activeFilter);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="pt-16 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                What&apos;s New
                            </div>
                        </div>
                        <h1 className="section-title mt-5">
                            Product Updates & Roadmap
                        </h1>
                        <p className="section-description mt-5">
                            Stay up to date with the latest features, improvements, and fixes to Motion
                        </p>
                    </div>
                </div>
            </section>

            {/* Updates Filter Section */}
            <section className="py-10 bg-white border-b border-[#222222]/10">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { id: "all", label: "All Updates" },
                            { id: "major", label: "Major Releases" },
                            { id: "feature", label: "New Features" },
                            { id: "improvement", label: "Improvements" },
                            { id: "bugfix", label: "Bug Fixes" }
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeFilter === filter.id
                                    ? "bg-black text-white"
                                    : "bg-[#F5F5F5] text-[#010D3E]/60 hover:bg-[#EAEAEA]"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Updates List Section */}
            <section ref={sectionRef} className="py-24 bg-white overflow-x-clip">
                <div className="container">
                    <div className="space-y-16">
                        {filteredUpdates.map((update, index) => (
                            <div key={index} className="border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:w-1/2 bg-gradient-to-br from-[#183EC2] via-[#6A98F0] to-[#EAEEFE] flex items-center justify-center p-10">
                                        <div className="w-full aspect-video rounded-xl bg-white/10 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] opacity-70"></div>
                                        </div>
                                    </div>
                                    <div className="p-10 md:p-12 relative md:w-1/2">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="text-sm text-[#010D3E]/60">{update.date}</span>
                                            <div className={`text-xs px-2 py-1 rounded-full ${update.category === 'major' ? 'bg-[#FFD0EC] text-[#C41969]' :
                                                update.category === 'feature' ? 'bg-[#D0F1FF] text-[#0969A2]' :
                                                    update.category === 'improvement' ? 'bg-[#D8FFD0] text-[#2E8A14]' :
                                                        'bg-[#FFE8D0] text-[#B25000]'
                                                }`}>
                                                {update.category === 'major' ? 'Major Release' :
                                                    update.category === 'feature' ? 'New Feature' :
                                                        update.category === 'improvement' ? 'Improvement' :
                                                            'Bug Fix'}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight text-[#010D3E] mb-4">
                                            {update.title}
                                        </h3>
                                        <p className="text-[#010D3E] mb-6">
                                            {update.description}
                                        </p>

                                        {update.features && (
                                            <div className="mb-6">
                                                <h4 className="font-medium mb-3">What&apos;s included:</h4>
                                                <ul className="space-y-2">
                                                    {update.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-start gap-3 text-[#010D3E]">
                                                            <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]"></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <button className="flex items-center gap-2 text-[#183EC2] font-medium hover:gap-3 transition-all duration-100">
                                            <span>Read full release notes</span>
                                            <ArrowIcon className="h-4 w-4" />
                                        </button>

                                        {index % 2 === 0 && (
                                            <motion.div
                                                className="absolute -right-16 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] opacity-70 blur-xl hidden md:block"
                                                style={{ translateY }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Roadmap Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Coming Soon
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Product Roadmap
                        </h2>
                        <p className="section-description mt-5">
                            Get a sneak peek at what we&apos;re working on and what&apos;s coming next
                        </p>
                    </div>

                    <div className="mt-16 relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#222222]/10 -translate-x-1/2"></div>

                        <div className="space-y-16">
                            {roadmapItems.map((item, index) => (
                                <div key={index} className="md:flex items-center gap-8">
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                                        <div className="inline-flex px-3 py-1 rounded-lg bg-[#F5F5F5] text-sm font-medium text-[#010D3E]/60 mb-3">
                                            {item.quarter}
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-[#010D3E] mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#010D3E]">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${item.status === 'in-progress'
                                        ? 'bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]'
                                        : 'bg-white border-2 border-[#222222]/10'
                                        }`}></div>

                                    <div className={`md:w-1/2 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${item.status === 'in-progress'
                                            ? 'bg-[#D0F1FF] text-[#0969A2]'
                                            : 'bg-[#F5F5F5] text-[#010D3E]/60'
                                            }`}>
                                            {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Stay in the loop
                        </h2>
                        <p className="section-description mt-5">
                            Subscribe to our newsletter to get the latest updates delivered to your inbox
                        </p>
                    </div>

                    <div className="mt-10 max-w-md mx-auto">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 rounded-lg border border-[#222222]/10 focus:outline-none focus:ring-2 focus:ring-[#183EC2]/20"
                                required
                            />
                            <button type="submit" className="btn btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm text-[#010D3E]/60 mt-3">
                            We&apos;ll never share your email with anyone else.
                        </p>
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
                            Try the latest version today
                        </h2>
                        <p className="section-description mt-5">
                            Experience all the new features and improvements we&apos;ve been working on
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