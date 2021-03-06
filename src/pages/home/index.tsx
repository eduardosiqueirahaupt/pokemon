import { useRecoilValue } from "recoil";
import { filterHeader } from "store/filter-header";
import { normalizeDataWithId } from "utils";
import CardsView from "../../components/cards-view";
import HeaderFilter from "../../components/header-cards";
import { usePokemonsGetData } from "../../service/pokeapi.service";
import * as S from "./styled";

function Home() {
  const { data } = usePokemonsGetData();
  const filter = useRecoilValue(filterHeader);

  if (!data?.results) {
    return <span>Carregando....</span>;
  }

  const filterData = () => data
    .results?.filter(x => x.name.includes(filter))
    .map(x => normalizeDataWithId(x, false));

  return (
    <S.Wrapper>
      <HeaderFilter />
      <CardsView
        data={filterData()}
      />
    </S.Wrapper>
  );
}

export default Home;
