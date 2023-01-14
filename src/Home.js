import { useGlobalContext } from "./context";
import MovieList from "./MovieList";
import Search from "./Search";

const Home = () => {
  const { error, loading } = useGlobalContext();

  return (
    <>
      <Search />
      {loading && <div className="loading" />}
      {!loading && error.show && <div className="error">{error.msg}</div>}
      <MovieList />
    </>
  );
};

export default Home;
