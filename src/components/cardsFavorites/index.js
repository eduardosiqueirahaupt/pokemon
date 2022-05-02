import { useEffect, useState } from "react";
import Card from "../card"

const CardsFavorites = ({ data }) => {
  const [_data, _setData] = useState(data);
  const refreshCards = () => _setData(prevState => [...prevState]);
  const favoritesPoke = () => _data
    .map(x => ({ id: x.url.slice(0, -1).split("/").at(-1), name: x.name }))
    .filter(x => JSON.parse(localStorage.getItem("FavPokemons")).includes(x.id));

  useEffect(() => _setData(data), [data])

  return (
    favoritesPoke().map(x => (
      <Card
        key={x.id}
        name={x.name}
        id={x.id}
        refreshCards={refreshCards}
        isFav
      />
    ))
  )
}

export default CardsFavorites;