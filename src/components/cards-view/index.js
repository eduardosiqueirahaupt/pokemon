import Card from "../card"
import * as S from './styled'

const CardsView = ({ data }) => {
  return (
    <S.Wrapper>
      {data.map(x => (
        <Card
          key={x.id}
          name={x.name}
          id={x.id}
          isFav={x.isFav}
        />
      ))}
    </S.Wrapper>
  )
}

export default CardsView