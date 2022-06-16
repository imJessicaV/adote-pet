import type { NextPage } from "next";
import Lista from "../ui/components/Lista/Lista";
import Title from "../ui/components/title/Title";

const Home: NextPage = () => {
  return (
    <div>
      <Title
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você pode{" "}
            <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <Lista 
        pets={[
          {
            id: 1,
            name: 'Lilica',
            historia:'Uma cachorrinha muito levada',
            foto:'https://saude.abril.com.br/wp-content/uploads/2018/12/cachorro-livro.png'
          },
          {
            id: 2,
            name: 'Boomer',
            historia:'Um cachorro esperto mas arteiro',
            foto:'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png'
          }
        ]}
      />
    </div>
  );
};

export default Home;
