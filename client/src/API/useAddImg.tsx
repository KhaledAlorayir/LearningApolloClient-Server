import { graphql } from "../gql/gql";
import { useMutation } from "@apollo/client";
import { GET_IMAGES } from "./useImages";

const ADD_IMAGE = graphql(`
  mutation addImage($link: String!) {
    addImage(input: { link: $link }) {
      id
    }
  }
`);

const useAddImg = () => {
  return useMutation(ADD_IMAGE, {
    refetchQueries: [GET_IMAGES],
  });
};

export default useAddImg;
