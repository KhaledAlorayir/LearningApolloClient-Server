import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
}

export interface AddImage {
  input: {
    link: string;
  };
}
export interface AddCommentInput {
  input: {
    image_id: string;
    content: string;
  };
}
export interface UpdateCommentInput {
  input: {
    comment_id: string;
    content: string;
  };
}

export interface PaginationInput {
  input: {
    take: number;
    page: number;
  };
}
