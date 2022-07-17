import { productList } from '../../localStore';

export const getProductById = async(id: string) => {
    return {
        product: productList.find((item) => item.id === id)
    }
}
