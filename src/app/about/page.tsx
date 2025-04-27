import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function About() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="pt-16 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Our Story
                            </div>
                        </div>
                        <h1 className="section-title mt-5">
                            About Motion
                        </h1>
                        <p className="section-description mt-5">
                            We&apos;re on a mission to help teams work more efficiently and achieve their goals with powerful, intuitive tools.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="md:flex items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                                Our journey to transform productivity
                            </h2>

                            <p className="mt-6 text-[#010D3E] text-lg leading-relaxed">
                                Founded in 2020, Motion began with a simple idea: productivity tools should work for you, not the other way around. Our founders experienced firsthand the challenges of managing complex projects across distributed teams.
                            </p>

                            <p className="mt-4 text-[#010D3E] text-lg leading-relaxed">
                                What started as a simple task management tool has evolved into a comprehensive platform that helps thousands of teams around the world streamline their workflows, collaborate effectively, and achieve their goals faster.
                            </p>
                        </div>

                        <div className="mt-10 md:mt-0 md:w-1/2">
                            <div className="rounded-3xl overflow-hidden shadow-[0_7px_14px_#EAEAEA]">
                                <div
                                    className="w-full aspect-video bg-gradient-to-br from-[#183EC2] via-[#6A98F0] to-[#EAEEFE]"
                                    aria-label="The Motion team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Our Values
                        </h2>
                        <p className="section-description mt-5">
                            These core principles guide everything we do at Motion
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {[
                            {
                                title: "User-Centered Design",
                                description: "We believe that the best tools feel intuitive and adapt to how you work, not the other way around."
                            },
                            {
                                title: "Continuous Improvement",
                                description: "We're constantly refining our platform based on user feedback and emerging best practices."
                            },
                            {
                                title: "Transparency",
                                description: "We build trust through honest communication with our team and customers."
                            },
                            {
                                title: "Work-Life Balance",
                                description: "We create tools that boost productivity without sacrificing wellbeing."
                            },
                            {
                                title: "Accessibility",
                                description: "We design our platform to be usable by everyone, regardless of ability."
                            },
                            {
                                title: "Security First",
                                description: "We prioritize the security and privacy of our users' data in everything we build."
                            }
                        ].map((value, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white flex flex-col items-start max-w-none">
                                <h3 className="text-xl font-bold tracking-tight">{value.title}</h3>
                                <p className="mt-4 text-[#010D3E]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Meet Our Team
                        </h2>
                        <p className="section-description mt-5">
                            The talented people behind Motion&apos;s success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                name: "Alex Morgan",
                                role: "CEO & Co-Founder",
                                bio: "Former product lead at Dropbox with 10+ years of experience in productivity tools."
                            },
                            {
                                name: "Jamie Chen",
                                role: "CTO & Co-Founder",
                                bio: "Engineering leader who previously built scalable systems at Asana and Microsoft."
                            },
                            {
                                name: "Taylor Kim",
                                role: "Head of Design",
                                bio: "Award-winning designer focused on creating intuitive user experiences."
                            },
                            {
                                name: "Jordan Smith",
                                role: "VP of Product",
                                bio: "Product strategist with a passion for solving complex workflow challenges."
                            },
                            {
                                name: "Casey Rivera",
                                role: "Customer Success Lead",
                                bio: "Dedicated to helping teams get the most out of Motion's platform."
                            },
                            {
                                name: "Riley Patel",
                                role: "Head of Marketing",
                                bio: "Creative marketer who loves telling stories about how technology improves work."
                            }
                        ].map((member, index) => (
                            <div key={index} className="p-10 border border-[#222222]/10 rounded-3xl bg-white flex flex-col items-start max-w-none">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F87BFF] to-[#2FD8FE]"></div>
                                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                                <p className="text-[#010D3E]/60 font-medium">{member.role}</p>
                                <p className="mt-4 text-[#010D3E]">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
                <div className="container">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">
                                Careers
                            </div>
                        </div>
                        <h2 className="section-title mt-5">
                            Join our team
                        </h2>
                        <p className="section-description mt-5">
                            We&apos;re always looking for talented people to help us build the future of productivity
                        </p>

                        <div className="flex justify-center mt-10">
                            <button className="btn btn-primary">
                                View open positions
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
} 