import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import { setProducts } from "../Slices/Products/ProductsSlice";
//import products from '../Slices/Products/ProductsSlice'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    console.log(result);
    dispatch(setProducts(result.products));
  };
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="text-center max-w-6xl mx-auto p-4">
      <h1 className=" text-3xl text-gray-800 font-bold mb-2 pb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 rounded-full">
        {Array.isArray(products) &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
