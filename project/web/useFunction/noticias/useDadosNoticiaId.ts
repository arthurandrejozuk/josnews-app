import INoticias from "../../types/INoticias";
import useFetch from "./useFetch";

export default function useDadosNoticiaId(id:string){
    return useFetch<INoticias>({url: `/noticias/${id}`})
}