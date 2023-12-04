const URL = `https://academics.newtonschool.co/api/v1/ecommerce/product/`

export async function singleProductDetail(productID) {
  try {
    const res = await fetch(URL+productID, {
        method: "GET",
        headers: {
            projectID: "sk6usfedahb5"
        }
    });
    const data = await res.json();
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("error in fetching single product data", error.message);
  }
}
