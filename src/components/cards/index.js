import Card from "../card"

const Cards = ({ data }) => {
  const pokemons = () => data
    .map(x => ({ id: x.url.slice(0, -1).split("/").at(-1), name: x.name }))

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