import React, { useState, useEffect } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion"


const AddBtn = (props) => {

    const [add, setAdd] = useState(false)
    const [desc, setDesc] = useState("")
    const [info, setinfo] = useState([])

    const handleAdd = () => {
        if (desc) {
            let newInfo = [...info, { id: uuidv4(), desc, filesize: "0.9mb", close: true, tag: { isOpen: true, title: "Download Now", color: "green" } }];
            props.get(newInfo);
            setinfo(newInfo)
            setDesc("");
            setAdd(!add);


        } else {
            alert("Text field can't be empty!")
        }


    }

    useEffect(() => {
        console.log(info);
    }, [info])

    const handleChange = (e) => {
        setDesc(e.target.value)
    }

    return (
        <>
            
            <motion.div  whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}} className=' text-zinc-600 hover:text-zinc-500 cursor-pointer' onClick={() => setAdd(!add)}>
                {add ? <CgCloseO size={"60px"} /> : <FiPlusCircle size={"60px"} />}
            </motion.div>
            <div>
                {add && <div className=' border w-[50vh] h-[60vh] bg-zinc-600/60 border-none rounded-[40px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-4'>
                    <input placeholder='Type here...' className='placeholder:text-slate-50/90 w-4/5 h-[8vh] p-[2rem] text-[18px] bg-slate-50/50 rounded-[50px] border-none text-black outline-none' type="text" onChange={handleChange} value={desc} />
                    <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}onHoverStart={e => {}} onHoverEnd={e => {}}>
                            <button  className='mt-6 px-[3rem]  py-2 border-none bg-zinc-900/90 text-white rounded-full hover:bg-zinc-900/70 ' onClick={handleAdd}>Add</button>
                    </motion.div>
                </div>}
            </div>
        </>

    )
}

export default AddBtn
