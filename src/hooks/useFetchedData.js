import { useEffect, useRef, useState } from "react";
import { useAxios } from "./useAxios";


const useFetchedData = (URL, req) => {
    const Axios = useAxios();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const ref = useRef(req)

    useEffect(() => {
        setData([]);
        setLoading(true);
        Axios.get(URL, ref.current)
            .then(resData => setData(resData.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [Axios, URL]);

    return [data, loading];
}

export default useFetchedData;