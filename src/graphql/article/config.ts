import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string);

export const QUERY = gql`
query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

export const SLUGLIST = gql`
    {
        posts {
            slug
        }
    }
`;