import { getProductList } from "./mock";
import { productList } from "../../localStore";

describe("Get Product List", () => {
   it("Should fetch product list correctly", async () => {
       const response = await getProductList();
       const { products } = response;

       expect(products).toEqual(productList);
   });
});
