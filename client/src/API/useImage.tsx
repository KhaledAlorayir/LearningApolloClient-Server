import { graphql } from "../gql/gql";
import { useQuery } from "@apollo/client";

export const GET_IMAGE = graphql(`
  query getImage($id: ID!, $take: Int!, $page: Int!) {
    image(id: $id) {
      id
      link
      comments(input: { take: $take, page: $page }) {
        content
        id
      }
    }
  }
`);

const useImage = (id: string) => {
  return useQuery(GET_IMAGE, {
    variables: { id: id, page: 0, take: 10 },
  });
};

export default useImage;
