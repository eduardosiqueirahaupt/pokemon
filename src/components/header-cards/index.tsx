import { useRecoilState } from "recoil";
import { filterHeader } from "store/filter-header";
import * as S from "./styled";

function HeaderFilter() {
  const [filter, setFilter] = useRecoilState(filterHeader)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.Input
        value={filter}
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Buscar..."
      />
    </S.Wrapper>
  );
}

export default HeaderFilter;
