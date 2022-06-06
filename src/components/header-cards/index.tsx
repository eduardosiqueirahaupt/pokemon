import * as S from "./styled";

interface Props {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Header({ handleSearch }: Props) {
  return (
    <S.Wrapper>
      <S.Input
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Buscar..."
        data-testid="input-filter"
      />
      <span></span>
    </S.Wrapper>
  );
}

export default Header;
