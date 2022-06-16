import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import {
  ListaStyled,
  Descricao,
  Foto,
  Informacoes,
  ItemLista,
  Nome,
} from "./Lista.style";
import { TextService } from '../../../data/services/TextService'; 

interface ListaProps {
  pets: Pet[];
}

export default function Lista(props: ListaProps) {
    const tamanhoMaximoTexto = 200;
  return (
    <ListaStyled>
      {props.pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.foto} alt={pet.name} />
          <Informacoes>
            <Nome>{pet.name}</Nome>
            <Descricao>
              {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
            </Descricao>
            <Button variant={"contained"} fullWidth>
              Adotar{pet.name}
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
