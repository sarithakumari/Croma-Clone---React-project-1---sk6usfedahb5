const URL = `https://academics.newtonschool.co/api/v1/ecommerce/cart`

export async function getCartItemApi(userToken) {
    try {
        const res = await fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer "+`${userToken}`,
                "projectID": "sk6usfedahb5",
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log('cart items: ', data);
        return data;
    } catch(error) {
        console.error("error getting cart items: ", error.message);
    }
}