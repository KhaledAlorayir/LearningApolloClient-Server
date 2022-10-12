import { graphql } from "../gql/gql";
import { useMutation } from "@apollo/client";
import { GET_IMAGE } from "./useImage";

const DELETE_COMMENT = graphql(`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`);

const useDeleteComment = (comment_id: string, img_id: string) => {
  return useMutation(DELETE_COMMENT, {
    variables: { id: comment_id },
    update: (cache, { data }) => {
      if (data?.deleteComment) {
        const cached = cache.readQuery({
          query: GET_IMAGE,
          variables: { id: img_id, page: 0, take: 10 },
        });
        if (cached?.image) {
          let filtered = cached.image.comments.filter(
            (c) => c.id !== comment_id
          );
          cache.writeQuery({
            query: GET_IMAGE,
            variables: { id: img_id, page: 0, take: 10 },
            data: {
              image: {
                ...cached.image,
                comments: filtered,
              },
            },
          });
        }
      }
    },
  });
};

export default useDeleteComment;
