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
const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      slug
      author {
        avatar {
          url
        }
        name
        field
      }
      coverImage {
        url
      }
      title
      content {
        html
        text
      }
      updatedAt
    }
  }
`;
export { GET_AUTHORS_INFO, GET_BLOGS_INFO };
