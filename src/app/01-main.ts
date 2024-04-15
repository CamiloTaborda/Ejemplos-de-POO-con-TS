import axios from "axios";
import { Product } from "./models/product.model";

let anyVar: any = 12;
let booleanVar: boolean = anyVar;

(async () => {

  async function getProducts(): Promise<Product[]> {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));

})();
