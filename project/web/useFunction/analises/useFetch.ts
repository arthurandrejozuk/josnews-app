import { useEffect, useState } from "react";

export default function useFetcht<T>({url}:{url:string}){
    const [dados, setDados] = useState<T|null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8080/analises")
                const data = await response.json()
                setDados(data);
                console.log("API response: ", data)
            } catch(err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url])

    return {dados, error}
}