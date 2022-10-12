import useImage from "../API/useImage";
import useDeleteImg from "../API/useDeleteImg";
import AddCommentForm from "../components/AddCommentForm";
import CommentsList from "../components/CommentsList";
import { useLocation } from "wouter";

type Props = {
  params: { id: string };
};

const Image = (props: Props) => {
  const { data, loading, error } = useImage(props.params.id);
  const [mutate] = useDeleteImg(props.params.id);
  const [_, setLocation] = useLocation();

  if (loading) {
    return <h3>loading... 🤠</h3>;
  }

  if (error) {
    return <h3>Ops.. 😱</h3>;
  }

  const deleteHandler = () => {
    mutate({
      onCompleted: (data) => {
        if (data.deleteImage) {
          setLocation("/");
        }
      },
    });
  };

  return (
    <section>
      {data?.image && (
        <div>
          <div className="center">
            <img src={data.image.link} alt="post" />
          </div>
          <button
            onClick={deleteHandler}
            style={{ display: "block", margin: "2rem auto" }}
          >
            Delete
          </button>
          <AddCommentForm image_id={props.params.id} />
          {data.image.comments.length > 0 && (
            <CommentsList
              img_id={props.params.id}
              comments={data.image.comments}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Image;
