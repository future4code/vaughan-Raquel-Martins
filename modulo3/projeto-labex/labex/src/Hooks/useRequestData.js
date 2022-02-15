import {useEffect , useState } from 'react';
import axios from 'axios';



export function useRequestData(url){
    const [data, setData] = useState(undefined)
    const [isLoading , setLoading] = useState(false)
    const [error, setError] = useState("")

  

    console.log("URL",url)
    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then((res) => {
            setLoading(false)
            setData(res.data)
        }).catch((err) => {
            setError(err)
            console.log("ERROR", err)
            setLoading(false)
        })
    }, [url])

    return [data, isLoading, error]
}