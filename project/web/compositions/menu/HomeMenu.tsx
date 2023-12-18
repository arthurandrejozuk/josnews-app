import { SiCodereview } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
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
            <Pesquisa ativado={ativa}/>
            <li><IoHomeOutline size={24} color={"#B6BBC4"} /><Text href="/">Home</Text></li>
            <li  onClick={()=> {ativaPesquisa()}}><CiSearch size={24} color={"#B6BBC4"}/><Text>Pesquisa</Text></li>
            <li onClick={onClick}><SiCodereview size={24} color={"#B6BBC4"}/><Text>Reviews</Text>< MdOutlineKeyboardArrowRight className="arrow" size={24} color={"#B6BBC4"}/></li>
            <li><IoNewspaperOutline size={24} color={"#B6BBC4"}/> <Text>News</Text></li>
            <li><FaRegCompass size={24} color={"#B6BBC4"}/><Text>Guides</Text></li>
        </>
    )
}