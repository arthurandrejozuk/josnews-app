import {  useEffect, useState } from "react";

export default function useFetch<T>({url}:{url:string}){

    const [dados, setDados] = useState<T | null>(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:4000/${url}`)
        // Tranforma a resposta em JSON
        .then(resposta => resposta.json())
        // Envia dados tranformado em json para dados(nossa const)
            .then(dados => setDados(dados))
        // caso tenha um erro ao capturar a api
            .catch((erro) => {
                setError(erro.message); // You might want to use erro.message to get a more descriptive error message
            })
            .finally(()=>{
                setLoading(false)
            });
        // Recebe a variavel para verificar caso a mude, se mudar, recarrega o useEffect
    }, [url]);

    return {dados, error}
}