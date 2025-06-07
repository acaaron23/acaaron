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
                        <div className="flex flex-wrap justify-center gap-3 text-gray-900">
                            {[
                                "CS519 - Spark! Software Engineering X-Lab",
                                "CS351 - Distributed Systems",
                                "CS460 - Introduction to Databases",
                                "CS440 - Introduction to AI",
                                "CS411 - Software Engineering",
                                "CS391 - Web Application Development",
                                "CS330 - Analysis of Algorithms",
                                "CS237 - Probability in Computing",
                                "CS210 - Computer Systems",
                                "CS132 - Geometric Algorithms",
                                "CS131 - Combinatoric Structures",
                                "CS112 - Introduction to Java",
                            ].map((course) => (
                                <span key={course} className="px-4 py-1 border border-white/30 rounded-full text-large font-bold bg-gray-300 text-black">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-semibold mb-4">Awards</h3>
                        <div className="flex flex-wrap justify-center gap-3 text-white-900">
                            <span className="px-4 py-1 border border-white/30 rounded-full text-large font-bold bg-gray-300 text-black">
                                    College of Arts and Science Dean&#39;s List Spring 2025
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}