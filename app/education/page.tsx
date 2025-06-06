import Image from "next/image";

export const metadata = {
    title: "Education",
};

export default function Education(){
    return (
        <>
            <div className="w-full h-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
                <div className="w-full max-w-5xl bg-white/5 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
                    <div className="flex flex-row gap-8 items-center justify-center">
                        <Image
                            src="/BU.png"
                            alt="Boston University"
                            width={164}
                            height={164}
                            className="w-full md:w-1/3"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-5xl font-bold">Boston University</h2>
                            <p className="text-white text-2xl font-light">Boston, MA</p>
                            <p className="text-white text-2xl font-light">Bachelor of Arts in Computer Science</p>
                            <p className="text-white text-2xl font-light">
                                Anticipated Graduation: May 2026
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-semibold mb-4">Relevant Coursework</h3>
                        <ul className="text-xl grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3 list-disc list-inside text-gray-200">
                            <li>CS519 - Spark! Software Engineering X-Lab</li>
                            <li>CS351 - Distributed Systems</li>
                            <li>CS460 - Introduction to Databases</li>
                            <li>CS440 - Introduction to AI</li>
                            <li>CS411 - Software Engineering</li>
                            <li>CS391 - Web Application Development</li>
                            <li>CS330 - Analysis of Algorithms</li>
                            <li>CS237 - Probability in Computing</li>
                            <li>CS210 - Computer Systems</li>
                            <li>CS132 - Geometric Algorithms</li>
                            <li>CS131 - Combinatoric Structures</li>
                            <li>CS112 - Introduction to Java</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}