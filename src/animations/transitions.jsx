import { useState, useEffect } from "react"


export function Transitions({images}) {
    const [next_img, setNext_img] = useState(images[0]);
    
    useEffect(() => {
        images.map(image => {
            setTimeout(() => {
                setNext_img(image)
            },300)
        })
    })


    return <>
        <img src={`/${next_img}`} className="slct" />
    </>
}