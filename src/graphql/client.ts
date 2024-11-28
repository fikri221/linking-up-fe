import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/", // Ganti dengan URL backend Anda
  cache: new InMemoryCache(),
});

export default client;
