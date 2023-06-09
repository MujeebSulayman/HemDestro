import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/Data";
import RowContainer from "../components/RowContainer";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";



const Menu = () => {

    const [filter, setFilter] = useState("chicken");
    const [{ foodItems }, dispatch] = useStateValue();

    return (

        <>
            <div className="w-full my-16 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-blue-500 transition-all ease-in-out duration-100">OUR MENU</h2>
            </div>
            <div className='w-full my-6'>
                
                <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                    {categories &&
                        categories.map((category) => (
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                key={category.id}
                                className={`group ${filter === category.urlParamName ? "bg-blue-500" : "bg-card"
                                    } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center  hover:bg-blue-300 `}
                                onClick={() => setFilter(category.urlParamName)}
                            >
                                <div
                                    className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName
                                        ? "bg-white"
                                        : "bg-blue-400"
                                        } group-hover:bg-white flex items-center justify-center`}
                                >
                                    <IoFastFood
                                        className={`z-[101] ${filter === category.urlParamName
                                            ? "text-textColor"
                                            : "text-white"
                                            } group-hover:text-textColor text-lg`}
                                    />
                                </div>
                                <p
                                    className={`text-sm ${filter === category.urlParamName
                                        ? "text-white"
                                        : "text-textColor"
                                        } group-hover:text-white`}
                                >
                                    {category.name}
                                </p>
                            </motion.div>
                        ))}
                </div>
            </div>
            <div className="w-full">
                <RowContainer
                    flag={false}
                    data={foodItems?.filter((n) => n.category == filter)}
                />
            </div>
        </>
    )
}

export default Menu