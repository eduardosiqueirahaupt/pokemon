import * as S from "./styled";

type Props = {
  search: string;
  handleSearch: () => void;
};

function Header({ search, handleSearch }: Props) {
  return (
    <S.Wrapper>
      <S.Input
        value={search}
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Buscar..."
        data-testid="input-filter"
      />
    </S.Wrapper>
  );
}

export default Header;
