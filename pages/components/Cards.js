import React from 'react'
import code from "../../public/code.png";
import Image from "next/image";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";

function Cards() {
    return (
        <div>
            <div className="text-center">
                <h3 className=" text-4xl py-12 dark:text-textColor">
                    Services I Offer
                </h3>
                <p className="text-xl leading-8 text-gray-800 dark:text-textColor">
                    Lorem <span className="text-teal-500">ipsum</span> dolor sit amet,
                    consectetur adipiscing elit. Praesent ligula nisi, lobortis et
                    porttitor id.
                </p>
                <p className="text-xl leading-8 text-gray-800 dark:text-textColor">
                    Sodales a arcu. Nunc feugiat blandit sem, sit amet ullamcorper
                    lorem accumsan a. In eros.
                </p>
            </div>
            {/*Kart1*/}
            <div className=" lg:flex gap-10 mt-4 px-32">
                <div className="text-center shadow-lg p-4 rounded-xl my-10 dark:bg-gray-800">
                    <Image src={design} width={60} height={60} />
                    <h3 className=" text-lg font-medium pt-4 pb-2 dark:text-textColor">
                        Beautiful Designs
                    </h3>
                    <p className=" py-2 dark:text-textColor">
                        Lorem <span className="text-teal-500">ipsum</span> dolor sit
                        amet, consectetur adipiscing elit. Praesent ligula nisi,
                        lobortis et porttitor id.
                    </p>
                    <h4 className=" py-2 text-textColor">Design tools I use:</h4>
                    <p className=" text-gray-800 py-1 dark:text-textColor">
                        Photoshop
                    </p>
                    <p className=" text-gray-800 py-1 dark:text-textColor">Figma</p>
                    <p className=" text-gray-800 py-1 dark:text-textColor">Blender</p>
                </div>
                {/*Kart2*/}
                <div className="text-center shadow-lg p-4 rounded-xl my-10 dark:bg-gray-800">
                    <Image src={code} width={60} height={60} />
                    <h3 className=" text-lg font-medium pt-4 pb-2 dark:text-textColor">
                        Beautiful Designs
                    </h3>
                    <p className=" py-2 dark:text-textColor">
                        Lorem <span className="text-teal-500">ipsum</span> dolor sit
                        amet, consectetur adipiscing elit. Praesent ligula nisi,
                        lobortis et porttitor id.
                    </p>
                    <h4 className=" py-2 text-textColor">Design tools I use:</h4>
                    <p className=" text-gray-800 py-1 dark:text-textColor">
                        Photoshop
                    </p>
                    <p className=" text-gray-800 py-1 dark:text-textColor">Figma</p>
                    <p className=" text-gray-800 py-1 dark:text-textColor">Blender</p>
                </div>
                {/*Kart3*/}
                <div className="text-center shadow-lg p-4 rounded-xl my-10 dark:bg-gray-800">
                    <Image src={consulting} width={60} height={60} />
                    <h3 className=" text-lg font-medium pt-4 pb-2 dark:text-textColor">
                        Beautiful Designs
                    </h3>
                    <p className=" py-2 dark:text-textColor">
                        Lorem <span className="text-teal-500">ipsum</span> dolor sit
                        amet, consectetur adipiscing elit. Praesent ligula nisi,
                        lobortis et porttitor id.
                    </p>
                    <h4 className=" py-2 text-textColor">Design tools I use:</h4>
                    <p className=" text-gray-800 py-1 dark:text-textColor">
                        Photoshop
                    </p>
                    <p className=" text-gray-800 py-1 dark:text-textColor">Figma</p>
                    <p className=" text-gray-800 py-1 dark:text-textColor">Blender</p>
                </div>
            </div>
        </div>
    )
}

export default Cards