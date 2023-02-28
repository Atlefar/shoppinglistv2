import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './ProductList.module.css';

const ProductList = (props) => {
  // const clickHandler = (event) => {
  //   if (event.target.style.textDecoration) {
  //     event.target.style.removeProperty('text-decoration');
  //   } else {
  //     event.target.style.setProperty('text-decoration', 'line-through');
  //   }
  // };
  
    return (
      <Card className={classes.product}> 
        <ul>
            {props.product.map((product) => (
                <li key={product.id} 
                // onClick={clickHandler}
                >
                    {product.product}
                    <Button onClick={() => props.onRemove(product.id)}>Slett</Button>
                </li>
                ))}
        </ul>
      </Card>
    );
};

export default ProductList;