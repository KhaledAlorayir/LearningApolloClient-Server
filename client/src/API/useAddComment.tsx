import { useMutation } from "@apollo/client";
import { graphql } from "../gql/gql";
import { GET_IMAGE } from "./useImage";

const ADD_COMMENT = graphql(`
  mutation addComment($content: String!, $image_id: ID!) {
    AddComment(input: { content: $content, image_id: $image_id }) {
      id
      content
    }
  }
`);

const useAddComment = (imgId: string) => {
  return useMutation(ADD_COMMENT, {
    update: (cache, { data }) => {
      const img = cache.readQuery({
        query: GET_IMAGE,
        variables: { id: imgId, page: 0, take: 10 },
      });
      if (img?.image && data?.AddComment) {
        cache.writeQuery({
          query: GET_IMAGE,
          variables: { id: imgId, page: 0, take: 10 },
          data: {
            image: {
              ...img.image,
              comments: [...img.image.comments, data.AddComment],
            },
          },
        });
      }
    },
  });
};

export default useAddComment;
