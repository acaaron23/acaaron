import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="w-full min-h-screen p-10 bg-gradient-to-br from-black to-gray-800 text-white">
            <div className="w-full max-w-5xl mx-auto bg-white/5 rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="flex flex-col gap-12">
                    <h2 className="text-5xl font-bold text-center">About Me</h2>

                    {/* Intro Section */}
                    <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-6 w-full">
                        <Image
                            src="/ac_pfp.jpeg"
                            alt="Aaron Chen Photo"
                            width={300}
                            height={300}
                            className="rounded-full border-4 border-gray-200 object-cover shrink-0"
                        />
                        <p className="text-xl font-semibold">
                            Hey, I&#39;m Aaron, a rising senior at Boston University studying Computer Science. I&#39;m excited to have you here to learn more about me!
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-2xl font-bold underline text-center">Let&#39;s Connect!</h1>
                        <div className="flex flex-row flex-nowrap justify-center items-center gap-6">
                            <Link href="https://www.linkedin.com/in/acaaron/" target="_blank" rel="noopener noreferrer">
                                <div className="w-32 h-32 rounded-full bg-white border-4 border-gray-200 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/linkedin.png"
                                        alt="LinkedIn Logo"
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                            <Link href="https://github.com/acaaron23" target="_blank" rel="noopener noreferrer">
                                <div className="w-32 h-32 rounded-full bg-white border-4 border-gray-200 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/github.png"
                                        alt="GitHub Logo"
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Origin */}
                    <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-6 w-full">
                        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 shrink-0">
                            <Image
                                src="/nyc.jpeg"
                                alt="NYC Pic"
                                width={240}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-[250px]">
                            <h1 className="text-xl font-bold underline">Origin:</h1>
                            <p className="text-xl font-semibold pt-2">
                                I was born and raised in Brooklyn, New York! I love the energy of NYC and the rich diversity of cultures to explore.
                                In my free time, I enjoy discovering new restaurants and taking walks with family and friends.
                            </p>
                        </div>
                    </div>

                    {/* Gym */}
                    <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-6 w-full">
                        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 shrink-0">
                            <Image
                                src="/gym.png"
                                alt="Gym Pic"
                                width={240}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-[250px]">
                            <h1 className="text-xl font-bold underline">Gym:</h1>
                            <p className="text-xl font-semibold pt-2">
                                Going to the gym is the cornerstone of my day. It motivates me to push beyond my limits and step outside of my comfort zone.
                                The gym is where I witness my physical growth and find a deep sense of fulfillment, especially during moments of self-doubt.
                            </p>
                        </div>
                    </div>

                    {/* Music */}
                    <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-6 w-full">
                        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 shrink-0">
                            <Image
                                src="/laufey.png"
                                alt="Laufey Pic"
                                width={240}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-[250px]">
                            <h1 className="text-xl font-bold underline">Music:</h1>
                            <p className="text-xl font-semibold pt-2">
                                When it’s time to buckle down and focus on my coursework, I rely on music. I discovered Laufey while studying for a midterm in my dorm lounge.
                                Her calming yet powerful lyrics stood out to me, especially as someone who typically listens to EDM and fast-paced music.
                            </p>
                        </div>
                    </div>

                    {/* Reselling */}
                    <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-6 w-full">
                        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 shrink-0">
                            <Image
                                src="/reselling.png"
                                alt="Reselling Pic"
                                width={240}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-[250px]">
                            <h1 className="text-xl font-bold underline">Businesses:</h1>
                            <p className="text-xl font-semibold pt-2">
                                I started my sneaker reselling business in high school as a gateway into entrepreneurship and a way to support myself financially.
                                It allowed me to afford the sneakers I always wanted while teaching me important lessons about money management, networking,
                                and running a business with integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
