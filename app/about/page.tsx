import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="w-full h-full p-10 min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
            <div className="w-full max-w-5xl bg-white/5 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
                <div className="flex flex-col gap-8">
                    <h2 className="text-5xl font-bold text-center">About Me</h2>
                    <div className="flex flex-row items-center gap-8">
                        <Image
                            src="/ac_pfp.jpeg"
                            alt="Aaron Chen Photo"
                            width={300}
                            height={300}
                            className="rounded-full border-4 border-gray-200 object-cover"
                        />
                        <h1 className="font-semibold text-xl"> Hey, I&#39;m Aaron, a rising senior at Boston University studying Computer Science! I&#39;m excited to have you here to learn more about me!</h1>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col justify-center items-center gap-8">
                        <h1 className= "text-2xl font-bold text-center text-white underline">
                            Let&#39;s Connect!
                        </h1>
                        <div className="flex flex-row items-center gap-8">
                            <Link href={"https://www.linkedin.com/in/acaaron/"} target="_blank" rel="noopener noreferrer">
                            <div className="w-40 h-40 rounded-full border-4 bg-white border-gray-200 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/linkedin.png"
                                        alt="LinkedIn Logo"
                                        width={160}
                                        height={160}
                                        className="object-contain"
                                    />
                            </div>
                            </Link>

                            <Link href={"https://github.com/acaaron23"} target="_blank" rel="noopener noreferrer">
                            <div className="w-40 h-40 rounded-full border-4 bg-white border-gray-200 overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/github.png"
                                    alt="GitHub Logo"
                                    width={160}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>
                            </Link>
                        </div>

                        {/* NYC */}
                        <div className="flex flex-row items-center gap-8">
                             <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200">
                                <Image
                                        src="/nyc.jpeg"
                                        alt="NYC Pic"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            <div className="flex-1 min-w-[250px]">
                                <h1 className="pl-2 font-bold text-xl underline">Origin:</h1>
                                <h1 className="font-semibold text-xl p-2"> I was born and raised in Brooklyn, New York! I love the energy of NYC and the rich diversity
                                    of cultures to explore. In my free time, I enjoy discovering new restaurants and taking walks with family and friends.</h1>
                            </div>
                        </div>

                        {/* Gym */}
                        <div className="flex flex-row items-center gap-8">
                            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200">
                                <Image
                                    src="/gym.png"
                                    alt="Gym Pic"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-[250px]">
                                <h1 className="pl-2 font-bold text-xl underline">Gym:</h1>
                                <p className="font-semibold text-xl p-2">
                                    Going to the gym is the cornerstone of my day. It drives me to surpass yesterday’s limits and push beyond my comfort zone.
                                    The gym is where I witness my physical growth and find a deep sense of fulfillment, especially during moments of self-doubt.
                                </p>
                            </div>
                        </div>

                        {/* Favorite Artist(s) */}
                        <div className="flex flex-row items-center gap-8">
                            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200">
                                <Image
                                    src="/laufey.png"
                                    alt="Laufey Pic"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-[250px]">
                                <h1 className="pl-2 font-bold text-xl underline">Music:</h1>
                                <p className="font-semibold text-xl p-2">
                                    When it’s time to buckle down and focus on my coursework and problem sets, I put on music to help me concentrate.
                                    I first discovered Laufey while cramming for a midterm in my dorm’s lounge, and her calming yet powerful lyrics
                                    immediately stood out to me. As someone who usually prefers EDM and fast-paced music, her music was a refreshing and inspiring change.
                                </p>
                            </div>
                        </div>

                        {/* Reselling */}
                        <div className="flex flex-row items-center gap-8">
                            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200">
                                <Image
                                    src="/reselling.png"
                                    alt="Reselling Pic"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-[250px]">
                                <h1 className="pl-2 font-bold text-xl underline">Businesses:</h1>
                                <p className="font-semibold text-xl p-2">
                                    I started my sneaker reselling business when I began high school as a gateway into entrepreneurship and a way to support myself financially.
                                    Beyond that, it taught me valuable lessons about money management, building connections, and practicing sound business principles.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
};