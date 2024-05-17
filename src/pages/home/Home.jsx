import Products from "../../components/products/Products";
import useFeatch from "../../hooks/useFetch";

const Home = () => {
  let { data, loading, error } = useFeatch("/products");

  return (
    <div className="home">
      <Products data={data} loading={loading} />
    </div>
  );
};

export default Home;
