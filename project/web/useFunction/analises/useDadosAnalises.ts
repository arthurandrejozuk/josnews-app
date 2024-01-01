import IAnalises from "../../types/IAnalises";
import useFetch from "../noticias/useFetch";

export default async function useDadosAnalise(){
    return await useFetch<IAnalises[]| null>({url:"analises"})
}