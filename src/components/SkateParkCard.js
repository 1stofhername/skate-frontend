import { useEffect, useState } from "react";

export default function SkateparkCard ({ skateparks }) {
    const [skateparks, setSkateparks] = useState("")
    console.log(skateparks)

    skateparks.map(()=>{
        return (
            <p>I'm a skatepark</p>
        )
    })

}