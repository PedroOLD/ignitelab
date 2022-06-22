import { ApolloClient, InMemoryCache } from "@apollo/client";


export const cliente = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4p1xjv11cwe01xngek8ddy2/master",
    cache: new InMemoryCache()
});
