import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { title, price, stock, rating, images, description, brand } = product;
  console.log(product);
  return (
    <div className="bg-slate-100 flex flex-col p-6 rounded-lg space-y-3">
      <img className="w-full h-80 rounded-lg" src={images[2]} alt="" />
      <div className="flex-grow">
        <p className="text-3xl font-medium">{title}</p>
        <p className="text-xl">Stock : {stock}</p>
        <p className="text-xl">Brand : {brand}</p>
        <p className="text-xl">{description}</p>
        <p className="text-xl">Price : {price} $</p>
        <p className="text-xl">Rating : {rating}</p>
      </div>
      <div className="text-center">
        <button className="p-3 bg-purple-400 font-medium rounded-lg">
          Show Details
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
