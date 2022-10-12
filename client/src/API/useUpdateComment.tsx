import { graphql } from "../gql/gql";
import { useMutation } from "@apollo/client";

const UPDATE_COMMENT = graphql(`
  mutation updateComment($id: ID!, $content: String!) {
    updateComment(input: { comment_id: $id, content: $content }) {
      content
      id
    }
  }
`);
//updates automaticly cuz we returened the updated verison in the query
const useUpdateComment = () => {
  return useMutation(UPDATE_COMMENT);
};

export default useUpdateComment;
