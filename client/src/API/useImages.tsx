import { useQuery } from "@apollo/client";
import { graphql } from "../gql/gql";

export const GET_IMAGES = graphql(`
  query getImages($take: Int!, $page: Int!) {
    images(input: { take: $take, page: $page }) {
      id
      link
    }
  }
`);

const useImages = (page: number) => {
  return useQuery(GET_IMAGES, {
    variables: { take: 10, page },
  });
};

export default useImages;
