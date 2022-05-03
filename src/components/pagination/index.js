import * as S from './styled'

const Pagination = ({ previous, next, pagination }) => (
  <S.Wrapper>
    <S.Arrow
      onClick={previous}
      className={!pagination.previous && 'disabled'}
      title="Página Anterior">
      {"<"}
    </S.Arrow>
    <S.Arrow
      onClick={next}
      className={!pagination.next && 'disabled'}
      title="Próxima Página">
      {">"}
    </S.Arrow>
  </S.Wrapper>
)

export default Pagination
