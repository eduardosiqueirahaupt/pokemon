import { useState } from "react";
import Cards from "../../components/cards";
import Header from "../../components/header-cards";
import { usePokemonsGetData } from "./home.service";
import * as S from "./styled";

function Home() {
  const [search, setSearch] = useState("");
  const { data } = usePokemonsGetData();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterPokemons = () =>
    data?.results?.filter((x) => x.name.includes(search.toLowerCase()));

  if (!data?.results) {
    return <span>Carregando....</span>
  }

  return (
    <S.Wrapper>
      <Header handleSearch={handleSearch} search={search} />
      <S.Content>
        <S.WrapperCards>
          <S.ContentCards>
            <Cards
              data={filterPokemons()}
              handleFeedback={() => console.log("FEEDBACK")}
            />
          </S.ContentCards>
        </S.WrapperCards>
      </S.Content>
    </S.Wrapper>
  );
}

export default Home;
