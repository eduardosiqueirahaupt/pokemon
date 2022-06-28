import { useSetRecoilState } from "recoil";
import { filterHeader } from "store/filter-header";
import * as S from "./styled";

function HeaderFilter() {
  const setRecoilState = useSetRecoilState(filterHeader)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecoilState(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.Input
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Buscar..."
        data-testid="input-filter"
      />
    </S.Wrapper>
  );
}

export default HeaderFilter;
