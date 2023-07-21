import useAxios from "../hooks/useAxios";

const PageAxios = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  return (
    <>
      <h2>{data && data.status}</h2>
      <p>{loading && "Loading"}</p>
      <button onClick={refetch}>refetch</button>
    </>
  );
};

export default PageAxios;
