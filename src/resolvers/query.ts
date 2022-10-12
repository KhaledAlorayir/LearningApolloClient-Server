import { UserInputError } from "apollo-server";
import { Context, PaginationInput } from "../constant/interfaces";

export default {
  images: (
    _1: any,
    { input: { page, take } }: PaginationInput,
    { prisma }: Context
  ) => {
    const skip = page * take;
    return prisma.image.findMany({
      skip,
      take,
    });
  },
  image: async (_1: any, { id }: { id: String }, { prisma }: Context) => {
    const image = await prisma.image.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!image) throw new UserInputError("invalid id");
    return image;
  },
};
