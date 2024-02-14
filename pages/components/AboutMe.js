import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import React from 'react'

function AboutMe() {
    return (
        <div className=" min-h-screen  text-center pt-8">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mb-8 overflow-hidden">
                <Image src={deved} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-4xl text-textColor">About Me</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-md max-w-2xl mx-auto dark:text-textColor">
                Hello there! My name is Eray and I enjoy creating living things on
                the internet. My interest in programming started in 2007 when I
                bought my first computer. After dealing with{" "}
                <span className="text-teal-500">HTML</span> and{" "}
                <span className="text-teal-500">CSS</span> for a while, I learned{" "}
                <span className="text-teal-500">Python</span> and{" "}
                <span className="text-teal-500">C#</span>. All this made me a{" "}
                <span className="text-teal-500">Fullstack Developer.</span>
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-textColor">
                Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex justify-center gap-20">
                <ul className="list-disc">
                    <li className="text-xl text-textColor text-left">Python</li>
                    <li className="text-xl text-textColor text-left">C# / .Net</li>
                    <li className="text-xl text-textColor text-left">React.js</li>
                    <li className="text-xl text-textColor text-left">Next.js</li>
                </ul>
                <ul className="list-disc">
                    <li className="text-xl text-textColor text-left">
                        Premiere Pro
                    </li>
                    <li className="text-xl text-textColor text-left">
                        Davinci Resolve
                    </li>
                    <li className="text-xl text-textColor text-left">
                        After Effects
                    </li>
                    <li className="text-xl text-textColor text-left">Photoshop</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe