import React from 'react'
import { FaFilePen } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"




const Card = ({data, reference}) => {
    let close = <IoIosCloseCircle color="white" size=".9em"/>;  
    let download = <MdCloudDownload size=".9em" color="#fff"/>;

    

    return (
        <div >
            <motion.div drag whileDrag={{scale: 1.1}} dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} dragElastic={.1} dragConstraints={reference} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 text-lg overflow-hidden cursor-grab'> 
                <FaFilePen/>
                <p className='text-sm leading-tight mt-5 '>{data.desc}</p>
                <div className='footer absolute bottom-0 w-full left-0'>
                    <div className='flex py-3 items-center justify-between mb-3 px-8 '>
                        <h5 className={data.tag.color==="green"?"text-green-300 ":"text-sky-300"}>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {data.close?close:download} 
                        </span>
                    </div>
                    {
                        data.tag.isOpen&&(
                            <div className={`tag w-full py-4 ${data.tag.color==="blue"?"bg-sky-400 hover:bg-sky-500 cursor-pointer":"bg-green-400 hover:bg-green-500 cursor-pointer"} flex items-center justify-center`}>
                                <h3 className='text-[17px] font-semibold text-white'>{data.tag.title}</h3>
                            </div>
                        )}
                    
                </div>
            </motion.div>
        </div>
    )
}

export default Card
