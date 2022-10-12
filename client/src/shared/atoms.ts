import { atom } from "jotai";
import { UpdateComment } from "./interface";

export const Update = atom<UpdateComment>(null);
export const Page = atom<number>(0);
