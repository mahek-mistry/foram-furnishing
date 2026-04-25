import Breadcrums from "@/components/ui/Breadcrums";
import ProductDesc from "@/components/ui/ProductDesc";
import ProductImg from "@/components/ui/ProductImg";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products } = useSelector((store) => store.product);

  const product = products.find((item) => item._id === id);

  const similarProducts = products.filter(
    (item) => item.category === product?.category && item._id !== product?._id,
  );

  if (!product) {
    return <h2 className="pt-20 text-center">Loading Product...</h2>;
  }

  return (
    <div className="pt-20 py-10 max-w-7xl mx-auto">
      <Breadcrums product={product} />

      <div className="mt-10 grid grid-cols-2 items-start gap-10">
        <ProductImg images={product.productImg} />
        <ProductDesc product={product} />
      </div>

      {/* ✅ Similar Products */}
      <div className="flex mt-10 gap-4 overflow-x-auto pb-4">
        {similarProducts.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/product/${item._id}`)}
            className="min-w-[220px] border rounded-lg p-3 cursor-pointer hover:shadow-lg"
          >
            <img
              src={item.productImg?.[0]?.url || "/placeholder.png"}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-sm mt-2 line-clamp-2">{item.productName}</h3>

            <p className="text-blue-600 font-bold">₹{item.productPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
