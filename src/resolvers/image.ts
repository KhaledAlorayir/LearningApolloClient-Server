import { Context, PaginationInput } from "../constant/interfaces";
import { Image } from "@prisma/client";

export default {
  comments: async (
    image: Image,
    { input: { page, take } }: PaginationInput,
    { prisma }: Context
  ) => {
    const skip = page * take;
    const res = await prisma.image.findUnique({
      where: {
        id: image.id,
      },
      include: {
        comments: {
          skip,
          take,
        },
      },
    });

    return res?.comments;
  },
};
