import { useState } from "react";
import useAddComment from "../API/useAddComment";
import useUpdateComment from "../API/useUpdateComment";
import { useAtom } from "jotai";
import { Update } from "../shared/atoms";

type Props = {
  image_id: string;
};

const AddCommentForm = ({ image_id }: Props) => {
  const [Addmutate] = useAddComment(image_id);
  const [Updatemutate] = useUpdateComment();
  const [update, setUpdate] = useAtom(Update);
  const [comment, setComment] = useState("");
  const isUpdate = update && update.img_id === image_id;
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUpdate) {
      Updatemutate({
        variables: { id: update.comment.id, content: update.comment.content },
      });
      setUpdate(null);
      return;
    }
    Addmutate({ variables: { content: comment, image_id } });
    setComment("");
  };

  const isButtonDisabled = (): boolean => {
    if (isUpdate) {
      return update.comment.content.trim() === "";
    }
    return comment.trim() === "";
  };

  return (
    <form onSubmit={submitHandler} className="my add">
      <input
        value={isUpdate ? update.comment.content : comment}
        onChange={(e) => {
          isUpdate
            ? setUpdate((u) => ({
                img_id: u!.img_id,
                comment: { ...u!.comment, content: e.target.value },
              }))
            : setComment(e.target.value);
        }}
        type="text"
        required
        placeholder="comment"
      />
      <button disabled={isButtonDisabled()}>
        {isUpdate ? "update" : "Send"}
      </button>
      {isUpdate && (
        <button
          style={{ display: "block", marginTop: "1rem" }}
          onClick={() => setUpdate(null)}
        >
          cancel update
        </button>
      )}
    </form>
  );
};

export default AddCommentForm;
