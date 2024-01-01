import Cards from "../compositions/cards/Cards"
import Cartas from "../compositions/cartas/Cartas"
import NoticiasLayout from "../layouts/padraoLayout"

export default function News(){
    return(
        <NoticiasLayout >
            <Cartas/>
            <Cards/>
        </NoticiasLayout>
    )
}