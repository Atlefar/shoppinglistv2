import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './ProductList.module.css';

const ProductList = (props) => {
  const [line, setLine] = useState(false);

  const lineThroughText = () => {
    setLine(!line);
  };

    return (
      <Card className={classes.product}> 
        <ul>
          {props.product.map((product) => (
              <li key={product.id}>
                <span 
                  className={line ? classes.checked : null} 
                  onClick={lineThroughText}
                  >
                  {product.product}
                </span>
                <Button onClick={() => props.onRemove(product.id)}>Slett</Button>
              </li>
              ))}
        </ul>
      </Card>
    );
};

export default ProductList;