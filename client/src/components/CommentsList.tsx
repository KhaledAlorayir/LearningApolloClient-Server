import { Comment } from "../gql/graphql";
import CommentCard from "./CommentCard";

type Props = {
  comments: Comment[];
  img_id: string;
};

const CommentsList = ({ comments, img_id }: Props) => {
  return (
    <div className="my">
      <h4>comments:</h4>
      <ul className="my">
        {comments.map((c) => (
          <CommentCard img_id={img_id} comment={c} key={c.id} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
