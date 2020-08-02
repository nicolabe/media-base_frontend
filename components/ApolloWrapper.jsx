import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import fetch from "node-fetch";

export const ApolloWrapper = ({ children }) => {
  const graphqlUri = "http://localhost:8081/graphql";
  const client = new ApolloClient({
    uri: graphqlUri,
    fetch: fetch,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
