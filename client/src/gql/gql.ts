/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation addComment($content: String!, $image_id: ID!) {\n    AddComment(input: { content: $content, image_id: $image_id }) {\n      id\n      content\n    }\n  }\n": types.AddCommentDocument,
    "\n  mutation addImage($link: String!) {\n    addImage(input: { link: $link }) {\n      id\n    }\n  }\n": types.AddImageDocument,
    "\n  mutation deleteComment($id: ID!) {\n    deleteComment(id: $id)\n  }\n": types.DeleteCommentDocument,
    "\n  mutation deleteImage($image_id: ID!) {\n    deleteImage(id: $image_id)\n  }\n": types.DeleteImageDocument,
    "\n  query getImage($id: ID!, $take: Int!, $page: Int!) {\n    image(id: $id) {\n      id\n      link\n      comments(input: { take: $take, page: $page }) {\n        content\n        id\n      }\n    }\n  }\n": types.GetImageDocument,
    "\n  query getImages($take: Int!, $page: Int!) {\n    images(input: { take: $take, page: $page }) {\n      id\n      link\n    }\n  }\n": types.GetImagesDocument,
    "\n  mutation updateComment($id: ID!, $content: String!) {\n    updateComment(input: { comment_id: $id, content: $content }) {\n      content\n      id\n    }\n  }\n": types.UpdateCommentDocument,
};

export function graphql(source: "\n  mutation addComment($content: String!, $image_id: ID!) {\n    AddComment(input: { content: $content, image_id: $image_id }) {\n      id\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation addComment($content: String!, $image_id: ID!) {\n    AddComment(input: { content: $content, image_id: $image_id }) {\n      id\n      content\n    }\n  }\n"];
export function graphql(source: "\n  mutation addImage($link: String!) {\n    addImage(input: { link: $link }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation addImage($link: String!) {\n    addImage(input: { link: $link }) {\n      id\n    }\n  }\n"];
export function graphql(source: "\n  mutation deleteComment($id: ID!) {\n    deleteComment(id: $id)\n  }\n"): (typeof documents)["\n  mutation deleteComment($id: ID!) {\n    deleteComment(id: $id)\n  }\n"];
export function graphql(source: "\n  mutation deleteImage($image_id: ID!) {\n    deleteImage(id: $image_id)\n  }\n"): (typeof documents)["\n  mutation deleteImage($image_id: ID!) {\n    deleteImage(id: $image_id)\n  }\n"];
export function graphql(source: "\n  query getImage($id: ID!, $take: Int!, $page: Int!) {\n    image(id: $id) {\n      id\n      link\n      comments(input: { take: $take, page: $page }) {\n        content\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getImage($id: ID!, $take: Int!, $page: Int!) {\n    image(id: $id) {\n      id\n      link\n      comments(input: { take: $take, page: $page }) {\n        content\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query getImages($take: Int!, $page: Int!) {\n    images(input: { take: $take, page: $page }) {\n      id\n      link\n    }\n  }\n"): (typeof documents)["\n  query getImages($take: Int!, $page: Int!) {\n    images(input: { take: $take, page: $page }) {\n      id\n      link\n    }\n  }\n"];
export function graphql(source: "\n  mutation updateComment($id: ID!, $content: String!) {\n    updateComment(input: { comment_id: $id, content: $content }) {\n      content\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateComment($id: ID!, $content: String!) {\n    updateComment(input: { comment_id: $id, content: $content }) {\n      content\n      id\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;