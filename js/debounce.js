const handleChange = (message)=>{
    console.log("message => ", message)
}


function debounce(){
    let timer = setTimeout(()=>{
        console.log("Hello world")
    }, 2000)
    return () => clearTimeout(timer)
}

debounce()

//react example:
// import { useEffect } from "react"
// useEffect(()=>{
//     const timer = setTimeout(()=>{
//         check()
//     }, 1000)
//     return ()=> clearTimeout(timer)
// },[value])
