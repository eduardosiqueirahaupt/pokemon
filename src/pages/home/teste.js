// import { Snackbar } from "@mui/material";
// import { useCallback, useEffect, useState } from "react";
// import Cards from "../../components/cards";
// import CardsFavorites from "../../components/cardsFavorites";
// import Header from "../../components/header-cards";
// import { fetchData } from "./home.service";
// import * as S from "./styled";

// interface IHome {
//   isFavorites: boolean;
// }

// interface Ipokemon {
//   name: string;
// }

// const initialValueFeedback = {
//   isOpen: false,
//   message: "",
// };

// function Home({ isFavorites }: IHome) {
//   const [search, setSearch] = useState("");
//   const [pokeData, setPokeData] = useState<Ipokemon[]>([]);
//   const [feedback, setFeedback] = useState(initialValueFeedback);

//   const handleFeedback = (message: string) => {
//     setFeedback({
//       isOpen: true,
//       message: message,
//     });
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const getData = useCallback(async () => {
//     const _data = await fetchData();
//     setPokeData(_data.results);
//   }, []);

//   const filterPokemons = (): Ipokemon[] =>
//     pokeData.filter((x) => x.name.includes(search.toLowerCase()));

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     pokeData && (
//       <S.Wrapper>
//         <Header handleSearch={handleSearch} search={search} />
//         <S.Content>
//           <S.WrapperCards>
//             <S.ContentCards>
//               {isFavorites ? (
//                 <CardsFavorites
//                   data={filterPokemons()}
//                   handleFeedback={handleFeedback}
//                 />
//               ) : (
//                 <Cards
//                   data={filterPokemons()}
//                   handleFeedback={handleFeedback}
//                 />
//               )}
//             </S.ContentCards>
//           </S.WrapperCards>
//         </S.Content>
//         <Snackbar
//           open={feedback.isOpen}
//           autoHideDuration={1000}
//           onClose={() => setFeedback(initialValueFeedback)}
//           message={feedback.message}
//         />
//       </S.Wrapper>
//     )
//   );
// }

// export default Home;

export default () => {
  return <div>
      testes
  </div>;
};
