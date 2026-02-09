import { useEffect, useState } from "react";
import Api from "./Api";

const useFetch = (endpoint)=>{

    const [data,setData] = useState(null);
    const[isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {

  const fetchData = async () => {
    try {
      const dataFromApi = await Api(endpoint);
      setData(dataFromApi);
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  fetchData();

}, [endpoint]);


    return {data,isPending,error};
}

export default useFetch;