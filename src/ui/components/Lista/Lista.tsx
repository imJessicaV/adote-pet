import { Button } from "@mui/material";
import {
  ListaStyled,
  Descricao,
  Foto,
  Informacoes,
  ItemLista,
  Nome,
} from "./Lista.style";

export default function Lista() {
  return (
    <ListaStyled>
      <ItemLista>
        <Foto
          src={
            "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg"
          }
        />
        <Informacoes>
          <Nome>Boomer</Nome>
          <Descricao>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            quidem necessitatibus ratione, veritatis quas delectus alias quasi
            possimus placeat vitae illum impedit deserunt, ullam ipsum
            voluptatum modi, ex veniam sint!
          </Descricao>
          <Button variant={"contained"} fullWidth>
            Adotar
          </Button>
        </Informacoes>
      </ItemLista>
    </ListaStyled>
  );
}
