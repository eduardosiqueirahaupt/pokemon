import { Snackbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Cards from '../../components/cards';
import Header from '../../components/header-cards';
import Pagination from '../../components/pagination';
import Wrapper from '../../components/wrapper';
import { fetchData } from './home.service';

const initialValueFeedback = {
  isOpen: false,
  message: ''
}

const Home = () => {
  const [search, setSearch] = useState('');
  const [pokeData, setPokeData] = useState([]);
  const [feedback, setFeedback] = useState(initialValueFeedback)
  const [pagination, setPagination] = useState({
    next: '',
    previous: ''
  })

  const handleFeedback = (message) => {
    setFeedback({
      isOpen: true,
      message: message
    })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterPokemons = () => pokeData.
    filter(x => x.name.includes(search.toLowerCase()))

  const getData = useCallback(async (url) => {
    const _data = await fetchData(url);
    setPokeData(_data.results)
    setPagination({
      next: _data.next,
      previous: _data.previous
    })
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <Header
        handleSearch={handleSearch}
        search={search}
      />
      <Wrapper>
        <Cards
          data={filterPokemons()}
          handleFeedback={handleFeedback}
        />
      </Wrapper>
      <Pagination
        previous={() => getData(pagination.previous)}
        next={() => getData(pagination.next)}
        pagination={pagination}
      />
      <Snackbar
        open={feedback.isOpen}
        autoHideDuration={1000}
        onClose={() => setFeedback(initialValueFeedback)}
        message={feedback.message}
      />
    </>
  )
}

export default Home;