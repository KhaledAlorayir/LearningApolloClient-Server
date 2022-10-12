import { gql } from "apollo-server";

export default gql`
  type Query {
    images(input: PaginationInput!): [Image!]!
    image(id: ID!): Image
  }

  type Mutation {
    addImage(input: AddImageInput!): Image
    deleteImage(id: ID!): Boolean
    AddComment(input: AddCommentInput!): Comment
    deleteComment(id: ID!): Boolean
    updateComment(input: UpdateCommentInput!): Comment
  }

  type Image {
    id: ID!
    link: String!
    comments(input: PaginationInput!): [Comment!]!
  }

  type Comment {
    id: ID!
    content: String!
  }

  input AddImageInput {
    link: String!
  }

  input AddCommentInput {
    image_id: ID!
    content: String!
  }

  input UpdateCommentInput {
    comment_id: ID!
    content: String!
  }

  input PaginationInput {
    take: Int!
    page: Int!
  }
`;
