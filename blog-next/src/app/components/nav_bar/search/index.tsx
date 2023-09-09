'use client'

import style from "./style.module.css"
import Image from "next/image"
import lupa from "../../../../../public/search.ico"
import { useState } from "react"

export default function Search()
{
    const [text, setText] = useState("");
    return (
        <section className={style.search}>
            <input 
                value={text} 
                onChange={e => setText(e.target.value)}
                className={`${style.search_field} ${style.background_transition_maintain}`} type="text" placeholder="Posts..."
            />
            
            <button 
                className={`${style.search_button} ${style.background_transition}`} 
                onClick={e => console.log(text)}            
            > 
                <Image 
                        src={lupa} 
                        alt="search icon"
                        objectFit="contain"
                />
            </button>
        </section>
    )
}