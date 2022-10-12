import { Comment } from "../gql/graphql";
import useDeleteComment from "../API/useDeleteComment";
import { useAtom } from "jotai";
import { Update } from "../shared/atoms";

type Props = {
  comment: Comment;
  img_id: string;
};

const CommentCard = ({ comment, img_id }: Props) => {
  const [DeleteComment] = useDeleteComment(comment.id, img_id);
  const [update, setUpdate] = useAtom(Update);

  return (
    <li>
      {comment.content}{" "}
      <button
        onClick={() => {
          DeleteComment();
        }}
        className="mx"
      >
        Delete
      </button>
      <button
        onClick={() => {
          setUpdate({ comment, img_id });
        }}
        className="mx"
      >
        Update
      </button>
    </li>
  );
};

export default CommentCard;
