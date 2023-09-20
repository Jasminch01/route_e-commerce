import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useLoaderData();
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
