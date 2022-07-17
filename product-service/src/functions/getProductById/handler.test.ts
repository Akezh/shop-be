import { getProductById } from './mock';
import { productList } from '../../localStore';

describe("Get Product By Id", () => {
    it("Should render the product id correctly", async() => {
        const sample = productList[0];
        const queryId = sample.id;

        const response = await getProductById(queryId);

        expect(response.product).toEqual(sample);
    });
});

