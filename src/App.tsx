import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilteredProductTable from './filtered-product-table';
import AppleProduct from './appleProduct.model';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState<AppleProduct[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(
        (result: any) => {
          setProducts(result.data.products);
        }
      )
  }, [])

  return (
    <div className="App">

      {products && products.length > 0 &&
        <FilteredProductTable products={products} />
      }
    </div>
  );
}

export default App;
