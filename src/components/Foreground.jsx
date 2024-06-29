import React, {useRef, useState, useEffect} from 'react'
import Card from './Card'


const Foreground = () => {
    
    const [data, setData] = useState([])
    const [temp, settemp] = useState([])
    const ref = useRef(null); 

    useEffect(() => {
        setData(temp)
    },[getData])
    


    return (
        
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
            ))}
            
        </div>
        
    )
}

export default Foreground
