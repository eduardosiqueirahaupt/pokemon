import * as S from './styled'

const Wrapper = ({ children }) => (
  <S.Wrapper>
    <S.Content>
      <S.WrapperCards>
        <S.ContentCards>
          {children}
        </S.ContentCards>
      </S.WrapperCards>
    </S.Content>
  </S.Wrapper>
)

export default Wrapper
