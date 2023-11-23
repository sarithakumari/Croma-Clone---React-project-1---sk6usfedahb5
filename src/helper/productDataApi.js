const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=`;
export async function productDataApi(limit=20) {
  try {
    const res = await fetch(URL+`${limit}`  , {
      method: "GET",
      headers: {
        projectID: "sk6usfedahb5",
      },
    });
    const data = await res.json();
    // console.log(data.data);
    // setState(data.data);
    return data.data;
  } catch (error) {
    console.error("error in fetching data", error.message);
  }
}
