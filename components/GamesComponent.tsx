import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { IGame, GQLGameQuery } from "../interfaces/game";

const GET_GAMES_DETAILS = gql`
  query {
    getGames {
      _id
      title
      creator
    }
  }
`;

// const ADD_GAME = gql`
//   mutation createGame($name: String!, $author: String!) {
//     updateBook(name: $name, author: $author) {
//       name
//       author
//     }
//   }
// `;

export const GamesComponent = () => {
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data: GQLGameQuery } = useQuery(
    GET_GAMES_DETAILS
  );

  // const updateCache = (cache, { data: { updateBook } }) => {
  //   const existingBook = cache.readQuery({
  //     query: GET_BOOK_DETAILS,
  //   });

  //   cache.writeQuery({
  //     query: GET_BOOK_DETAILS,
  //     data: { book: updateBook },
  //   });
  // };

  // const [updateBook] = useMutation(SET_BOOK_DETAILS, { update: updateCache });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // const updateBookDetails = () => {
  //   updateBook({
  //     variables: { name: "A Spicy Sausage", author: "Anton the Butcher" },
  //   });
  // };

  return (
    <ul>
      {data.getGames.map((game: IGame) => (
        <li key={game._id}>
          {game.title} by {game.creator}
        </li>
      ))}
    </ul>
  );
};
