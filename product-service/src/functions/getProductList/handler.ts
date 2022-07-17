import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import type { ProductType } from '../../localStore/index';
import { productList } from '../../localStore/index';

const getProducts: ValidatedEventAPIGatewayProxyEvent<ProductType> = async () => {
    return formatJSONResponse({ productList });
};

export const main = middyfy(getProducts);
