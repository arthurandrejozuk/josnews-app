import Banner from "@art/components/Banner";
import Text from "@art/components/Text";
import Link from "next/link";
import styled from "styled-components";

const BannerImage = styled.img`
  max-width: 100%;
  width: 1200px;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  border-radius: 12px;
  
  @media (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
  }
`;

const TituloBanner = styled(Text)`
  font-size: 24px;
  color: ${(props) => props.theme.textDefault};
  text-shadow:  1px 1px 1px  ${(props) => props.theme.text};
`;
const SubtituloBanner = styled(Text)`
  color: ${(props) => props.theme.text};
  font-size: 32px;
`;

export default function BannerDestaque({ destaque, linkBanner }) {
  const { titulo, subtitulo, imagem } = destaque;

  return (
    <Link href={linkBanner}>
      <Banner>
        <BannerImage src={imagem} />
        <div>
          <TituloBanner tag="h2">{titulo}</TituloBanner>
          <SubtituloBanner tag="p">{subtitulo}</SubtituloBanner>
        </div>
      </Banner>
    </Link>
  );
}
