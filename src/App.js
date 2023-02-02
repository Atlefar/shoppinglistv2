import { useState } from 'react';
import AddProduct from './components/Products/AddProduct';
import ProductList from './components/Products/ProductList';

const App = () => {
  const [productList, setProductList] = useState([]);

  const addProductHandler = (product) => {
    setProductList((prevProductList) => {
      return [...prevProductList, { product: product, id: Math.random().toString() }];
    });
  }

  return (
    <div>
      <AddProduct onAddProduct={addProductHandler}/>
      <ProductList product={productList} />
    </div>
  );
};

export default App;
