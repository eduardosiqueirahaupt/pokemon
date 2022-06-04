import { useCallback, useEffect, useState } from "react";
import Cards from "../../components/cards";
import CardsFavorites from "../../components/cardsFavorites";
import Header from "../../components/header-cards";
import { fetchData } from "./home.service";
import * as S from "./styled";

function Home({ isFavorites }) {
  const [search, setSearch] = useState("");
  const [pokeData, setPokeData] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getData = useCallback(async () => {
    const _data = await fetchData();
    setPokeData(_data.results);
  }, []);

  const filterPokemons = () =>
    pokeData.filter((x) => x.name.includes(search.toLowerCase()));

  useEffect(() => {
    getData();
  }, []);

  return (
    pokeData && (
      <S.Wrapper>
        <Header handleSearch={handleSearch} search={search} />
        <S.Content>
          <S.WrapperCards>
            <S.ContentCards>
              {isFavorites ? (
                <CardsFavorites
                  data={filterPokemons()}
                  handleFeedback={() => console.log("FEEDBACK")}
                />
              ) : (
                <Cards
                  data={filterPokemons()}
                  handleFeedback={() => console.log("FEEDBACK")}
                />
              )}
            </S.ContentCards>
          </S.WrapperCards>
        </S.Content>        
      </S.Wrapper>
    )
  );
}

export default Home;
