"use client"

import {useState } from "react";


export function TwitterCard({username, name}){
    
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing 
    ? "bg-white border-solid py-0 px-2 rounded-md hover:bg-red-600"
    : "bg-white border-solid py-0 px-2 rounded-md hover:bg-blue-600"

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    };

    return(
        <article className="flex items-center gap-x-4 justify-between w-[300px]">
        <img  className="rounded-full h-11" src={`https://unavatar.io/${username}`} alt=""/>
        <div className="grid">
            <strong>{name}</strong>
            <span>@midudev</span>
        </div>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
    </article>
    )

}   