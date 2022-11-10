import { useRecoilValue } from "recoil";
import { favoritesPokemonsStore } from "store/favorites";
import { filterHeader } from "store/filter-header";
import { adapterCardData } from "utils";
import CardsView from "../../components/cards-view";
import HeaderFilter from "../../components/header-cards";
import { usePokemonsGetData } from "../../service/pokeapi.service";
import * as S from "./styled";

function Home() {
  const { data } = usePokemonsGetData();
  const filter = useRecoilValue(filterHeader);
  const favoritesPokemons: string[] = useRecoilValue(favoritesPokemonsStore);

  if (!data?.results) {
    return <span>Carregando....</span>;
  }

  const filteredData = data
    .results?.filter(x => x.name.includes(filter))
    .map(x => adapterCardData(x, false))
    .map(x => ({ ...x, isFav: favoritesPokemons.includes(x.id) }));

  return (
    <S.Wrapper>
      <HeaderFilter />
      <CardsView
        data={filteredData}
      />
    </S.Wrapper>
  );
}

export default Home;
