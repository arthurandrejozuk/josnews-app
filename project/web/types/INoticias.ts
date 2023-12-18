export default interface INoticias {

    id: number,
    texto:string
    imagem_capa: string;
    titulo: string,
    data_publicacao: string,
    fonte: string,
    subtitulo: string,
    link: string,
    categoria: string,
    tags: string[],
    imagem:string,
}