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
const GET_AUTHOR_INFO = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      description {
        html
      }
      field
      name
      posts {
        ... on Post {
          id
          slug
          coverImage {
            url
          }
          title
          content {
            text
          }
        }
      }
    }
  }
`;
export { GET_AUTHORS_INFO, GET_BLOGS_INFO, GET_AUTHOR_INFO };
