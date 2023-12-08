const URL = `https://academics.newtonschool.co/api/v1/ecommerce/cart/`;

export async function addToCart(productId, userToken) {
    // console.log(productId)
    // console.log("userToken", userToken)
  try {
    const res = await fetch(URL+productId, {
        method: "PATCH",
        headers: {
            "projectID": "sk6usfedahb5",
            "Content-Type": "application/json",
            "Authorization": "Bearer "+`${userToken}`
        },
        body: JSON.stringify({"quantity": 1})
    });
    const data = await res.json();
    console.log("added to cart:", data);
    return data;
  } catch (error) {
    console.error("error adding items to cart: ", error.message);
  }
}
