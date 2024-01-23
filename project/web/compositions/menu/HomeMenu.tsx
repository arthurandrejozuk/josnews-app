import { SiCodereview } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Text } from "@art/components/Text"
import Pesquisa from "../pesquisa/Pesquisa";
import { useState } from "react";

export default function HomeMenu({onClick}){

    const [ativa, setAtiva] = useState(false)

    function ativaPesquisa() {
        ativa ? setAtiva(false) : setAtiva(true);
    }
    
    return(
        <>
            <Pesquisa onClick={() => ativaPesquisa()} ativado={ativa}/>
            <Text href="/"><li><IoHomeOutline size={32} color={"#B6BBC4"} />Home</li></Text>
            <li  onClick={()=> {ativaPesquisa()}}><CiSearch size={32} color={"#B6BBC4"}/><Text>Pesquisa</Text></li>
            <Text><li onClick={onClick}><SiCodereview size={32} color={"#B6BBC4"}/>Reviews< MdOutlineKeyboardArrowRight className="arrow" size={32} color={"#B6BBC4"}/></li></Text>
            <Text href="/news"><li><IoNewspaperOutline size={32} color={"#B6BBC4"}/>News</li></Text>
            <Text href="/videos"><li><CiVideoOn  size={32} color={"#B6BBC4"}/>Videos</li></Text>
        </>
    )
}