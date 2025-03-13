'use client'

import { useState } from "react"

interface Iprops{
    images : {
        id : string,
        src : string
    }[]
}

const HeroBanner = ({images} : Iprops)=>{

    const [enableId , setEnableId] = useState<null | string>(images[0]?.id ?? null)

    const changeEnableId = (type : string)=>{

        const indexFinder = images.findIndex(item => item.id === enableId)

        if(type === 'next'){
            setEnableId(images[indexFinder+1].id)
        }else{
            setEnableId(images[indexFinder-1].id)
        }
    }

    if(!enableId){
        return null
    }

    return(
        <div className="w-full relative">
            <img className="w-full" src={images.find(item => item.id === enableId)?.src}/>
            <button className="p-1 border border-black" onClick={()=> changeEnableId("next")}>next</button>
            <button className="p-1 border border-black" onClick={()=> changeEnableId("prev")}>prev</button>
        </div>
    )
}

export default HeroBanner