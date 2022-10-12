import { graphql } from "../gql/gql";
import { useMutation } from "@apollo/client";
import { GET_IMAGES } from "./useImages";
import { Page } from "../shared/atoms";
import { useAtom } from "jotai";

const DELETE_IMAGE = graphql(`
  mutation deleteImage($image_id: ID!) {
    deleteImage(id: $image_id)
  }
`);

const useDeleteImg = (image_id: string) => {
  const [page, setPage] = useAtom(Page);

  return useMutation(DELETE_IMAGE, {
    variables: { image_id },
    update: (cache, { data }) => {
      if (data?.deleteImage) {
        const data = cache.readQuery({
          query: GET_IMAGES,
          variables: { page, take: 10 },
        });

        if (data?.images) {
          const filterd = data.images.filter((img) => img.id !== image_id);
          cache.writeQuery({
            query: GET_IMAGES,
            variables: { page, take: 10 },
            data: {
              images: filterd,
            },
          });
        }
      }
    },
  });
};

export default useDeleteImg;
