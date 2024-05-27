import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const Home = () => {
  const addToHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asss"
          name="Macbook"
          price={98765}
          stock={10}
          photo="https://images.news18.com/ibnlive/uploads/2023/10/macbook-air-m1-2023-10-c3ced763eda4931bd195f9e7ff255169.jpg?impolicy=website&width=640&height=480"
          handler={addToHandler}
        />
      </main>
    </div>
  );
};

export default Home;
