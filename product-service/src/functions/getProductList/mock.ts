import { productList } from '../../localStore';

export const getProductList = async() => {
    return { products: productList }
};
