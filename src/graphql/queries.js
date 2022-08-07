import { gql } from "@apollo/client";

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      id
      name
      slug
      field
    }
  }
`;
export { GET_AUTHORS_INFO };
