import { Snackbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Cards from '../../components/cards';
import CardsFavorites from '../../components/cardsFavorites';
import Header from '../../components/header-cards';
import { fetchData } from './home.service';
import * as S from './styled'

const initialValueFeedback = {
  isOpen: false,
  message: ''
}

const Home = ({ isFavorites }) => {
  const [search, setSearch] = useState('');
  const [pokeData, setPokeData] = useState([]);
  const [feedback, setFeedback] = useState(initialValueFeedback)

  const handleFeedback = (message) => {
    setFeedback({
      isOpen: true,
      message: message
    })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const getData = useCallback(async () => {
    const _data = await fetchData();
    setPokeData(_data.results)
  }, [])

  const filterPokemons = () => pokeData.filter(x => x.name.includes(search.toLowerCase()))

  useEffect(() => {
    getData();
  }, [getData])

  return (
    pokeData && <S.Wrapper>
      <Header
        handleSearch={handleSearch}
        search={search}
      />
      <S.Content>
        <S.WrapperCards>
          <S.ContentCards>
            {isFavorites ?
              <CardsFavorites
                data={filterPokemons()}
                handleFeedback={handleFeedback}
              /> :
              <Cards
                data={filterPokemons()}
                handleFeedback={handleFeedback}
              />
            }
          </S.ContentCards>
        </S.WrapperCards>
      </S.Content>
      <Snackbar
        open={feedback.isOpen}
        autoHideDuration={1000}
        onClose={() => setFeedback(initialValueFeedback)}
        message={feedback.message}        
      />
    </S.Wrapper>
  )
}

export default Home;