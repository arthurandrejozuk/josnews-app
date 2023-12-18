
import BannerDestaque from "../compositions/destaque/Banner";
import Destaques from "../compositions/destaque/Destaques";
import Cards from "../compositions/cards/Cards";
import MenuLateral from "../compositions/menu/MenuLateral";


export default function Home(){

    let destaque = {
        titulo: "GTA 6 finalmente anunciado!",
        subtitulo: "O Hype é real",
        imagem: "https://c4.wallpaperflare.com/wallpaper/878/70/356/gta-vi-grand-theft-auto-6-grand-theft-auto-pc-gaming-video-game-art-hd-wallpaper-preview.jpg",
    }
    
    return(
        <>
            <MenuLateral/>
            <Destaques>
                <BannerDestaque destaque={destaque}/>
            </Destaques>
            <Cards/>
        </>
        
    )
}