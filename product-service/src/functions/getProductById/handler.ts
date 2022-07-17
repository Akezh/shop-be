import { middyfy } from '@libs/lambda';
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";

import type { ProductType } from '../../localStore/index';
import { productList } from '../../localStore/index';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<ProductType> = async ({ pathParameters }) => {
    const { productId } = pathParameters;
    const product = productList.find(product => product.id === productId);

    if (product) {
        return formatJSONResponse({product})
    }

    throw new Error("Product not found");
}

export const main = middyfy(getProductsById);
