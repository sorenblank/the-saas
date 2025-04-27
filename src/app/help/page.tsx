"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";

export default function Help() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // State for FAQ accordion
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I get started with Motion?",
            answer: "Getting started is easy! Simply sign up for a free account, and you'll be guided through our onboarding process. You can import existing tasks or start from scratch with our templates."
        },
        {
            question: "Can I collaborate with my team?",
            answer: "Yes! Motion is designed for collaboration. You can invite team members, assign tasks, share workspaces, and communicate within the platform."
        },
        {
            question: "Is my data secure?",
            answer: "We take security seriously. Motion uses industry-standard encryption, regular security audits, and strict access controls to keep your data safe."
        },
        {
            question: "What integrations are available?",
            answer: "Motion integrates with popular tools like Google Workspace, Microsoft Office, Slack, Zoom, and many more. Check our integrations page for the full list."
        },
        {
            question: "How do I upgrade my plan?",
            answer: "You can upgrade anytime from your account settings. Choose the plan that fits your needs, and you'll immediately get access to additional features."
        },
        {
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period."
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
                                Support Center
                            </div>
                        </div>
                        <h1 className="section-title mt-5">
                            How can we help you?
                        </h1>
                        <p className="section-description mt-5">
                            Find answers, resources, and support to help you get the most out of Motion
                        </p>

                        <div className="mt-10 max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for help..."
                                    className="w-full py-4 px-6 rounded-xl border border-[#222222]/10 focus:outline-none focus:ring-2 focus:ring-[#183EC2]/30"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#183EC2] text-white p-2 rounded-lg">
                                    <ArrowIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Options Section */}
            <section ref={sectionRef} className="py-24 bg-white overflow-x-clip">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Support options
                        </h2>
                        <p className="section-description mt-5">
                            Choose the support channel that works best for you
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Knowledge Base",
                                description: "Browse our comprehensive guides, tutorials, and documentation to find answers to common questions.",
                                cta: "Explore articles"
                            },
                            {
                                title: "Email Support",
                                description: "Contact our support team directly for personalized assistance with your specific questions.",
                                cta: "Send an email"
                            },
                            {
                                title: "Live Chat",
                                description: "Get real-time help from our support specialists during business hours for immediate assistance.",
                                cta: "Start a chat"
                            }
                        ].map((option, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white flex flex-col items-start max-w-none">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]"></div>
                                <h3 className="text-xl font-bold mt-4">{option.title}</h3>
                                <p className="mt-4 text-[#010D3E]">{option.description}</p>
                                <button className="mt-6 flex items-center gap-2 text-[#183EC2] font-medium hover:gap-3 transition-all duration-100">
                                    <span>{option.cta}</span>
                                    <ArrowIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="absolute -right-32 top-32 w-64 h-64 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE] opacity-30 blur-3xl"
                        style={{ translateY }}
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                FAQ
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Frequently asked questions
                        </h2>
                        <p className="section-description mt-5">
                            Quick answers to common questions about Motion
                        </p>
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-[#222222]/10 last:border-b-0"
                            >
                                <button
                                    className="w-full py-6 flex justify-between items-center text-left"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-xl font-medium">{faq.question}</h3>
                                    <div className={`w-6 h-6 rounded-full border border-[#222222]/20 flex items-center justify-center transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}>
                                        <span className="text-lg font-light">+</span>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6' : 'max-h-0'}`}
                                >
                                    <p className="text-[#010D3E]">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Resources
                        </h2>
                        <p className="section-description mt-5">
                            Helpful materials to help you get the most out of Motion
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                title: "Getting Started Guide",
                                description: "A comprehensive walkthrough of Motion's core features to help new users get up and running quickly."
                            },
                            {
                                title: "Video Tutorials",
                                description: "Watch step-by-step video guides that demonstrate how to use Motion's features effectively."
                            },
                            {
                                title: "Best Practices",
                                description: "Learn proven strategies and workflows to maximize your productivity with Motion."
                            },
                            {
                                title: "Webinars",
                                description: "Join our regular webinars to learn advanced features and get your questions answered live."
                            },
                            {
                                title: "Case Studies",
                                description: "See how other teams and organizations are using Motion to transform their workflows."
                            },
                            {
                                title: "API Documentation",
                                description: "Technical resources for developers looking to integrate with or extend Motion."
                            }
                        ].map((resource, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white flex flex-col items-start max-w-none">
                                <h3 className="text-xl font-bold tracking-tight">{resource.title}</h3>
                                <p className="mt-4 text-[#010D3E]">{resource.description}</p>
                                <button className="mt-6 flex items-center gap-2 text-[#183EC2] font-medium hover:gap-3 transition-all duration-100">
                                    <span>Learn more</span>
                                    <ArrowIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Still need help?
                        </h2>
                        <p className="section-description mt-5">
                            Our support team is ready to assist you with any questions or issues
                        </p>

                        <div className="flex justify-center mt-10">
                            <button className="btn btn-primary">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
} 