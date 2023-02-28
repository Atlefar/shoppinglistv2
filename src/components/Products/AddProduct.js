import { useState } from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddProduct.module.css';

const AddProduct = (props) => {
    const [enteredProduct, setEnteredProduct] = useState('');

    const addProductHandler = (event) => {
        event.preventDefault();
        if (enteredProduct.trim().length === 0) {
            return;
        };
        
        props.onAddProduct(enteredProduct);
        setEnteredProduct('');
    };

    const productChangeHandler = (event) => {
        setEnteredProduct(event.target.value);
    };

    return (
       <Card className={classes.input}>
        <form onSubmit={addProductHandler}>
            <label htmlFor='productname'>Produkt</label>
            <input 
            id='productname' 
            type="text"
            onChange={productChangeHandler}
            value={enteredProduct}
            />

            <Button type='submit'>Legg Til</Button>
        </form>
       </Card>
    );
};

export default AddProduct;