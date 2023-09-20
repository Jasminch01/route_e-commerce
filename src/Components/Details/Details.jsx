import { useLoaderData } from "react-router-dom";

const Details = () => {
  const products = useLoaderData();
  console.log(products);
  const { title, thumbnail, discountPercentage, description, price, brand } = products;
  return (
    <div className="flex justify-center my-10">
      <div className="p-5 bg-slate-300 rounded-lg space-y-2">
        <div className="flex justify-center items-center">
          <img className="rounded-lg w-full" src={thumbnail} alt="" />
        </div>
        <p className="text-2xl font-medium">{title}</p>
        <p className="font-medium">{description}</p>
        <p className="font-medium">Discout: {discountPercentage} %</p>
        <p className="font-medium">Price : {price} $</p>
        <p className="font-medium">Brand : {brand}</p>
      </div>
    </div>
  );
};

export default Details;
