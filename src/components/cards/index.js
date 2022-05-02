import Card from "../card"

const Cards = ({ data }) => {
  const pokemons = () => data
    .map(x => ({ id: x.url.slice(34).split('/')[0], name: x.name }))

  return (
    pokemons().map(x => (
      <Card
        key={x.id}
        name={x.name}
        id={x.id}
        isFav={JSON.parse(localStorage.getItem("FavPokemons")).includes(x.id)}
      />
    )))
}

export default Cards