import useImages from "../API/useImages";
import AddImgForm from "../components/AddImgForm";
import { Link } from "wouter";
import { Page } from "../shared/atoms";
import { useAtom } from "jotai";

type Props = {};

const Home = (props: Props) => {
  const [page, setPage] = useAtom(Page);
  const { data, loading, error } = useImages(page);

  if (loading) {
    return <h3>loading... 🤠</h3>;
  }

  if (error) {
    return <h3>Ops.. 😱</h3>;
  }

  return (
    <section>
      <AddImgForm />
      <div className="controls my">
        <button disabled={page === 0} onClick={() => setPage((pre) => pre - 1)}>
          Prev
        </button>
        <button onClick={() => setPage((pre) => pre + 1)}>Next</button>
      </div>
      <div className="imgs">
        {data?.images &&
          data.images.map((img) => (
            <div key={img.id}>
              <Link href={`/image/${img.id}`}>
                <img src={img.link} alt="post" />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Home;
