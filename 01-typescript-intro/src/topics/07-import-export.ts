import { Product, taxCalculate} from "./06-function-destructuring";

const shoppingCart : Product[] = [
    {
        description: 'Nokia',
        price: 100
    }, 
    {
        description: 'iPad', 
        price: 150
    }
];

const [total, tax] = taxCalculate({
    products: shoppingCart, 
    tax: 0.15
}); 

