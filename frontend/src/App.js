import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const login = async () => {
    const { data } = await axios.post("http://localhost:3030/auth/login", { username: "kuldeep", password: "123456" });
    localStorage.setItem("token", data.token);
    setToken(data.token);
  };

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:3030/product/Products").then((res) => setProducts(res.data));
    }
  }, [token]);

  const addProduct = async (e) => {
    e.preventDefault();
    if (!productName || !productPrice) return alert("Please fill in all fields");

    try {
      const { data } = await axios.post(
        "http://localhost:3030/product/Products",
        { name: productName, price: productPrice },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProducts([...products, data]);
      setProductName("");
      setProductPrice("");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Product Management</h2>
      {!token ? (
        <button onClick={login} style={{ padding: "10px", cursor: "pointer" }}>
          Login
        </button>
      ) : (
        <>
          <form onSubmit={addProduct} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              style={{ padding: "10px" }}
            />
            <input
              type="number"
              placeholder="Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
              style={{ padding: "10px" }}
            />
            <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
              Add Product
            </button>
          </form>

          <h3>Products List</h3>
          {products.length > 0 ? (
            products.map((p) => (
              <div key={p._id} style={{ padding: "10px", border: "1px solid #ddd", marginBottom: "10px" }}>
                {p.name} - ${p.price}
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
