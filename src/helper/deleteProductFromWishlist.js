const URL = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`;

export async function deleteProductFromWishlist(productId, userToken) {
    try {
        // console.log(URL+productId)
        const res = await fetch(URL+productId, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer "+`${userToken}`,
                "projectID": "sk6usfedahb5",
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error("error adding product to wishlist: ", error.message);
    }
}