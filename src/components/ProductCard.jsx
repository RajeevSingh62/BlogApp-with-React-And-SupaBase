import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import{fetchProducts} from "../redux/features/products/ProductSlice"
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../utils/Loader'

const ProductCard = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch();

const isLoading=useSelector((state)=>state.products.isLoading)
const data=useSelector((state)=>state.products.products);
console.log("data of products ============>",data)
console.log("Category Name of first product:", data?.[10]?.category?.name);



const setserachterm=useSelector((store)=>store.products.serachTerm)

const filteredData=data?.filter((item)=>item?.name?.toLowerCase().includes(setserachterm?.toLowerCase() || ''))

const groupedByCategory = filteredData?.reduce((acc, product) => {
  const categoryName = product?.category?.name|| "Others";
  if (!acc[categoryName]) {
    acc[categoryName] = [];
  }
  acc[categoryName].push(product);
  return acc;
}, {});



useEffect(()=>{
dispatch(fetchProducts())
},[dispatch])

if(isLoading) return <Loader/>

return (
  <div style={{ padding: "32px 16px", maxWidth: "1200px", margin: "0 auto" }}>
    {Object.entries(groupedByCategory || {}).map(([categoryName, items]) => (
      <div key={categoryName} style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "30px"
          }}
        >
          {categoryName}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >

          {items.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={product.image_url}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "16px", flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "12px",
                  }}
                >
                  {product.description}
                </p>
                <p
                  style={{
                    color: "#2563EB",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "12px",
                  }}
                >
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#2563EB",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/productdetails/${product.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
};

export default ProductCard;