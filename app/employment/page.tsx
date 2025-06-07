import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Employment",
};

export default function Employment() {
    return (
        <div className="w-full h-full p-10 min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
            <div className="w-full max-w-5xl bg-white/5 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-center text-5xl font-bold">Employment</h2>
                        <p className="text-2xl font-light mt-2">Work Experience History</p>
                    </div>

                    <div className="space-y-10">
                        {/* NYCEDC */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="min-w-[128px] h-[128px] flex items-center justify-center">
                                <Image
                                    src="/nycedc.png"
                                    alt="NYCEDC Logo"
                                    width={164}
                                    height={164}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold">New York City Economic Development Corporation - NYCEDC </h3>
                                <h4 className="italic text-xl">Management Information Systems – Web Development Intern</h4>
                                <h4 className="text-lg text-gray-300">July 2025 – Present</h4>
                                <ul className="list-disc list-inside mt-2 text-gray-200 text-lg space-y-1">
                                    <li> Incoming Intern </li>
                                </ul>
                            </div>
                        </div>

                        {/* BU CSC */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="min-w-[128px] h-[128px] flex items-center justify-center">
                                <Image
                                    src="/bucsc.png"
                                    alt="Boston University CSC Logo"
                                    width={164}
                                    height={164}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold">Boston University Computer Science Club</h3>
                                <h4 className="italic text-xl">Computer Science Advisor</h4>
                                <h4 className="text-lg text-gray-300">January 2025 – Present</h4>
                                <ul className="list-disc list-inside mt-2 text-gray-200 text-lg space-y-1">
                                    <li>Facilitated 1-on-1 mentorship to navigate academic pathways, select appropriate courses, and explore extracurricular opportunities catered towards 100+ active members </li>
                                    <li>Enhanced community engagement through weekly workshops and collaborative opportunities through hands-on coding sessions, algorithm challenges, and collaborative project development</li>
                                </ul>
                            </div>
                        </div>

                        {/* BU FitRec */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="min-w-[128px] h-[128px] flex items-center justify-center">
                                <Image
                                    src="/fitrec.png"
                                    alt="Boston University FitRec Logo"
                                    width={164}
                                    height={164}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold">Boston University Fitness and Recreational Center</h3>
                                <h4 className="italic text-xl">Facility Supervisor & Student Manager</h4>
                                <h4 className="text-lg text-gray-300">December 2024 – Present</h4>
                                <ul className="list-disc list-inside mt-2 text-gray-200 text-lg space-y-1">
                                    <li>Supervise and lead a team of 70+ fitness attendants to maintain a clean, safe, and welcoming environment across all recreational facilities</li>
                                    <li>Facilitate cross-functional communication between facility operations and departmental teams to ensure seamless daily coordination and issue resolution</li>
                                    <li>Provide exceptional customer service by assisting members with equipment usage, addressing inquiries, and enhancing overall guest satisfaction</li>
                                </ul>
                            </div>
                        </div>

                        {/* NYCHA */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="min-w-[128px] h-[128px] flex items-center justify-center">
                                <Image
                                    src="/nycha.png"
                                    alt="NYCHA Logo"
                                    width={164}
                                    height={164}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold">New York City Housing Authority – NYCHA</h3>
                                <h4 className="italic text-xl">Infrastructure & Operations Intern</h4>
                                <h4 className="text-lg text-gray-300">July 2024 – August 2024</h4>
                                <ul className="list-disc list-inside mt-2 text-gray-200 text-lg space-y-1">
                                    <li>Documented configuration and deployment of 500+ network devices using industry-standard protocols to enhance network reliability and communication for operational continuity</li>
                                    <li>Leveraged ServiceNow, ActiveCampaign, and Siebel to tackle technical efficiency and resolution time</li>
                                </ul>
                            </div>
                        </div>

                        {/* PYE */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="min-w-[128px] h-[128px] flex items-center justify-center">
                                <Image
                                    src="/pye.png"
                                    alt="PYE Education Logo"
                                    width={164}
                                    height={164}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold">PYE Education Center</h3>
                                <h4 className="italic text-xl">STEM Project Development Intern</h4>
                                <h4 className="text-lg text-gray-300">July 2023 – August 2023</h4>
                                <ul className="list-disc list-inside mt-2 text-gray-200 text-lg space-y-1">
                                    <li>Designed and implemented coding-centric projects leveraging expertise in Python and C++ to simplify programming concepts for 100+ aspiring coders and integrated feedback from stakeholders for iterations</li>
                                    <li>Collaborated with educators to ensure the creation of diverse, engaging, and academically enriching projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}