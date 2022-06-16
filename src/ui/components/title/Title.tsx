import { TitleStyled, Subtitle } from "./Title.style";

interface TitleProps{
    titulo: string;
    subtitulo?: string | JSX.Element;
}

export default function Title(props:TitleProps) {
  return (
    <>
      <TitleStyled>{props.titulo}</TitleStyled>
      <Subtitle>{props.subtitulo}</Subtitle>
    </>
  );
}
