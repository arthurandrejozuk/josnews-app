import CardAnalises from "../cards/CardAnalises";

export default function AnaliseCard({jogo, link, sobre, image}:{jogo:string, link:string, sobre:string, image: string}) {
  return (
    <CardAnalises image={image} jogo={jogo} link={link} sobre={sobre}  />
  );
}
