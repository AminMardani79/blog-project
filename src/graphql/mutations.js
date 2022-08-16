import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
const CREATE_AUTHOR = gql`
  mutation createAuthor(
    $name: String!
    $description: String!
    $field: String!
    $slug: String!
    $fileName: String!
  ) {
    createAuthor(
      data: {
        name: $name
        description: $description
        field: $field
        slug: $slug
        avatar: { create: { fileName: $fileName } }
      }
    ) {
      id
    }
  }
`;
export { SEND_COMMENT, CREATE_AUTHOR };
