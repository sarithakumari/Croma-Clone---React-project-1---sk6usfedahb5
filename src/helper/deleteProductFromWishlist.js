const URL = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`;

export async function deleteProductFromWishlist(productId, userToken) {
    try {
        const res = await fetch(URL+productId, {
            method: "DELETE",
            headers: {
                "projectID": "sk6usfedahb5",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+`${userToken}`
            }
        })
        const data = await res.json();
        return data;
    } catch(error) {
        console.error("error adding product to wishlist: ", error.message);
    }
}