import { useEffect } from "react"

export default function CategoryBar ({ activeSkatepark }) {
    useEffect(()=>{
        fetch('http://localhost:9292/categories')
        .then((r)=>r.json())
        .then((data)=>console.log(data))
    },[activeSkatepark])
    return (
        <div>
        <p>Hello</p>
        </div>
    )
}