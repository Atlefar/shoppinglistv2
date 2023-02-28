import { useState } from 'react';
import AddProduct from './components/Products/AddProduct';
import ProductList from './components/Products/ProductList';

const App = () => {
  const [productList, setProductList] = useState([]);

  const addProductHandler = (product) => {
    setProductList((prevProductList) => {
      return [...prevProductList, { product: product, id: Math.random().toString() }];
    });
  };

  const removeProductHandler = (id) => {
    const newList = productList.filter((product) => product.id !== id)
    setProductList(newList);
  };

  return (
    <div>
      <AddProduct onAddProduct={addProductHandler}/>
      <ProductList 
        product={productList} 
        onRemove={removeProductHandler}
      />
    </div>
  );
};

export default App;
