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

      <Lista />
    </div>
  );
};

export default Home;
