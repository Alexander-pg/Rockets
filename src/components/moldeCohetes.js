import { useEffect, useState } from "react"

export default function Molde({rocket_id}){

    const [title,setTitle] = useState("Cargando...")
    const [image,setImage] = useState("cargando...")
    const [text,setText] = useState("Cargando")

        const data = async()=>{
        const getData = await fetch('https://api.spacexdata.com/v3/rockets')
        const allData = await getData.json()
        var rocket_name = allData[rocket_id].rocket_name
        var rocket_image = allData[rocket_id].flickr_images[0]
        var rocket_description = allData[rocket_id].description
        console.log(rocket_image)
        setTitle(rocket_name)
        setImage(rocket_image)
        setText(rocket_description)
        
    }
    useEffect(()=>{
        data()
    })
    

    return(
        <div>
            
            <h1>
                {title}
            </h1>

        <img src={image} />
            <p>{text}</p>
        </div>
    )
}