const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search=`;

export async function searchProductsApi(searchItem) {
  try {
    const res = await fetch(URL+`{"name": "${searchItem}", "description": "${searchItem}"}`, {
      method: "GET",
      headers: {
        projectID: "sk6usfedahb5",
      },
    });
    const data = await res.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("error fetching search data", error.message);
  }
}
