import React from "react"
import './ProductList.css';
import ProductItem from "../../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    { id: 1, title: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, title: 'Product 2', description: 'Description 2', price: 200 },
    { id: 3, title: 'Product 3', description: 'Description 3', price: 300 },
    { id: 4, title: 'Product 1', description: 'Description 1', price: 100 },
    { id: 5, title: 'Product 2', description: 'Description 2', price: 200 },
    { id: 6, title: 'Product 3', description: 'Description 3', price: 300 },
];
const getTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + item.price, 0);
}

const ProductList = () => {
    const [addeditems, setAddedItems] = useState([]);
    const { tg } = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addeditems.find(item => item.id === product.id);
        let newItems = [];
        if (alreadyAdded) {
            newItems = addeditems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addeditems, product];
        }
        setAddedItems(newItems);
        if (newItems.length === 0) {
            tg.MainButton.hide();
        }else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${newItems.length} товаров на сумму ${getTotalPrice(newItems)}`
            });
        }
    }
    return (
        <div className={'list'}>
            {products.map(item =>(
                <ProductItem
                    product={item.title}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
            
        </div>
    );
};

export default ProductList;
