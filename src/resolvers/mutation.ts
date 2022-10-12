import { UserInputError } from "apollo-server";
import {
  AddCommentInput,
  AddImage,
  Context,
  UpdateCommentInput,
} from "../constant/interfaces";

export default {
  addImage: (_: any, args: AddImage, { prisma }: Context) => {
    return prisma.image.create({
      data: {
        link: args.input.link,
      },
    });
  },
  deleteImage: async (_1: any, { id }: { id: String }, { prisma }: Context) => {
    const image = await prisma.image.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!image) throw new UserInputError("invalid id");

    await prisma.image.delete({ where: { id: Number(id) } });
    return true;
  },
  AddComment: async (_1: any, args: AddCommentInput, { prisma }: Context) => {
    const image = await prisma.image.findUnique({
      where: {
        id: Number(args.input.image_id),
      },
    });
    if (!image) throw new UserInputError("invalid id");

    return prisma.comment.create({
      data: {
        content: args.input.content,
        image_id: Number(args.input.image_id),
      },
    });
  },
  deleteComment: async (
    _1: any,
    { id }: { id: String },
    { prisma }: Context
  ) => {
    const comment = await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!comment) throw new UserInputError("invalid id");

    await prisma.comment.delete({ where: { id: Number(id) } });
    return true;
  },
  updateComment: async (
    _1: any,
    args: UpdateCommentInput,
    { prisma }: Context
  ) => {
    const comment = await prisma.comment.findUnique({
      where: {
        id: Number(args.input.comment_id),
      },
    });
    if (!comment) throw new UserInputError("invalid id");

    return prisma.comment.update({
      where: {
        id: Number(args.input.comment_id),
      },
      data: {
        content: args.input.content,
      },
    });
  },
};
