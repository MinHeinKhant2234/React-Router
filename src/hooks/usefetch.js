import { useEffect,useState } from "react";

function useFetch(url){

    let [data,setdata]=useState(null)
    let [loading,setloading]=useState(false)
    let [error,setError]=useState(null)

    useEffect(()=>{
        let abortController = new AbortController();
        let signal = abortController.signal;
        setloading(true);
        fetch(url,{signal})
        .then(
            res=>{
            return res.json();
        })
        .then(
                data=>setdata(data),
                setloading(false)
            )
        .catch(e=>{
            setError(e.message);
        })

        return () => {abortController.abort();console.log('All clean')}

        
    },[url]);

    return {data,loading,error};
}

export default useFetch;