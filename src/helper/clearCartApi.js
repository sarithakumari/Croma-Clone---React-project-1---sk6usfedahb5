const URL = `http://academics.newtonschool.co/api/v1/ecommerce/cart/`;

export async function clearCartApi(userToken) {
    try {
        const res = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer "+`${userToken}`,
                "projectID": "sk6usfedahb5",
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log('cart deleted: ', data);
    } catch(error) {
        console.error("error clearing the cart: ", error.message);
    }
}