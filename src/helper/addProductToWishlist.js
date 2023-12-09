const URL = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`;

export async function addProductToWishlist(productId, userToken) {
    try {
        const res = await fetch(URL, {
            method: "PATCH",
            headers: {
                "projectID": "sk6usfedahb5",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+`${userToken}`
            },
            body: JSON.stringify({"productId": productId })
        })
        const data = await res.json();
        // console.log(data);
        return data;
    } catch(error) {
        console.error("error adding product to wishlist: ", error.message);
    }
}