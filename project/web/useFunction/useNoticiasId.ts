import useFetch from "./useFetch";
import INoticias from "../types/INoticias"; 

const useNoticiasId = () => {
   return useFetch<INoticias[] | null>({url: "noticias_jogos"}).dados.map(dado => {dado.id})
}

export default useNoticiasId;