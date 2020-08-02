import { ApolloWrapper } from "../components/ApolloWrapper";
import { GamesComponent } from "../components/GamesComponent";
import { Layout } from "../components/Layout";

const Games = () => {
  return (
    <Layout>
      <ApolloWrapper>
        <GamesComponent />
      </ApolloWrapper>
    </Layout>
  );
};

export default Games;
