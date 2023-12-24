import {  useEffect, useState } from "react";

export default function useFetch<T>({url}:{url:string}){

    const [dados, setDados] = useState<T | null>(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:8080/noticias');
              const data = await response.json()
              setDados(data);
              console.log('API Response:', data);
            } catch (error) {
              setError(error)
              console.error('Error fetching data:', error);
            } finally {
            setLoading(false); // Stop loading indicator (whether successful or not)
          }
          };
          
          fetchData();
        // Recebe a variavel para verificar caso a mude, se mudar, recarrega o useEffect
    }, [url]);

    return {dados, error}
}