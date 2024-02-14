import React from 'react'
import web1 from "../../public/web1.png";
import Image from "next/image";
import web2 from "../../public/web2.png";

function Portfolio() {
    return (
        <div>
            <div className="text-center px-24">
                <h3 className=" text-4xl pt-10 mb-5 dark:text-textColor">
                    Portfolio
                </h3>
                <p className=" py-2  text-xl dark:text-textColor">
                    Lorem <span className="text-teal-500">ipsum</span> dolor sit amet,
                    consectetur adipiscing elit. Pellentesque egestas rutrum dolor,
                    consectetur consequat nibh malesuada ac. Donec tristique vel odio
                    rhoncus tempus. Sed vitae velit gravida, rhoncus dui nec, mattis
                    risus. Morbi placerat blandit mi. Donec congue auctor auctor.
                    Vestibulum nec dolor a eros lobortis volutpat. Cras nec nibh.
                </p>
                <p className=" py-2 text-xl dark:text-textColor">
                    Morbi placerat blandit mi. Donec congue auctor auctor. Vestibulum
                    nec dolor a eros lobortis volutpat. Cras nec nibh.
                </p>
            </div>
            {/*Galeri*/}
            <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap px-20">
                <div className=" basis-1/3 flex-1 ">
                    <Image
                        src={web1}
                        className="rounded-lg object-cover"
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                    />
                </div>
                <div className=" basis-1/3 flex-1 ">
                    <Image
                        src={web2}
                        className="rounded-lg object-cover"
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio