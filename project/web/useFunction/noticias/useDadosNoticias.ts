import useFetch from "./useFetch";
import INoticias from "../../types/INoticias"; 

const useDadosNoticias = () => {
   return useFetch<INoticias[] | null>({url: "noticias"})
}

export default useDadosNoticias;