export enum EnumCategoria {
    ULTIMAS = 'Ultimas',
    DESTAQUES = 'Destaques',
    XBOX = 'Xbox',
    PLAYSTATION = 'Playstation',
    NINTENDO = 'Nintendo',
    FILMES = 'Filmes'
}



export default interface INoticias {
  imagem: string;
    id:number;
  titulo: string;
  subtitulo: string;
  noticia: string;
  dataDePublicacao: Date;
  fonte: string;
  categoria: EnumCategoria;
  tags: string[];
  imagem_capa: string;
  link: string;
}
