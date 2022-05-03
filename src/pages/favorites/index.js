import { Snackbar } from '@mui/material';
import { useEffect, useState } from 'react'
import Card from '../../components/card'
import Wrapper from '../../components/wrapper'
import { fetchAllById } from '../home/home.service'
import * as S from './styled'

const Favorites = () => {
  const [data, setData] = useState([])
  const [feedback, setFeedback] = useState({
    isOpen: false,
    message: ''
  })

  const getData = async () => {
    const ids = JSON.parse(localStorage.getItem("FavPokemons"))
    const pokemons = await fetchAllById(ids)
    setData(pokemons)
  }

  const refreshCards = () => getData()

  const handleFeedback = (message) => {
    setFeedback({
      isOpen: true,
      message: message
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Wrapper>
        {data.map(x => (
          <Card
            key={x.id}
            name={x.name}
            id={x.id}
            refreshCards={refreshCards}
            handleFeedback={handleFeedback}
            isFav
          />
        ))
        }
      </Wrapper>
      {data.length === 0 && <S.Message>"Não há pokemon favoritado!"</S.Message>}
      <Snackbar
        open={feedback.isOpen}
        autoHideDuration={1000}
        onClose={() => setFeedback({ isOpen: false, message: ''})}
        message={feedback.message}
      />
    </>
  )
}

export default Favorites