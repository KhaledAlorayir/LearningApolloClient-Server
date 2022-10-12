import { useState } from "react";
import useAddImg from "../API/useAddImg";

type Props = {};
const AddImgForm = (props: Props) => {
  const [link, setLink] = useState("");
  const [mutate] = useAddImg();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ variables: { link } });
    setLink("");
  };

  return (
    <form onSubmit={submitHandler} className="my add">
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="url"
        required
        placeholder="link"
      />
      <button>Send</button>
    </form>
  );
};

export default AddImgForm;
