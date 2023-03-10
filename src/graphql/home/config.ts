import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string);

export const QUERY = gql`
query {
  posts {
    id,
    title,
    datePublished,
    slug,
    content {
      html
    },
    author {
      name,
      avatar {
        url
      }
    },
    coverPhoto {
      url,
      height,
      width
    }
  }
}
`;