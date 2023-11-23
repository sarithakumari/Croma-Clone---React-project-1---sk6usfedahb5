import { productDataApi } from "./productDataApi";

export async function subCategoriesApi(productName) {
    const res = await productDataApi(632);
    // console.log(res);
    const data = res.filter((product)=>product.subCategory == productName)
    // console.log(productName, data);
    return data;
    
}