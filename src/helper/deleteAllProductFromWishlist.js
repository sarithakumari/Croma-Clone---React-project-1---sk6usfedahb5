const URL = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`;

export async function deleteAllProductFromWishlist(userToken) {
    try {
        const res = await fetch(URL, {
            method: "DELETE",
            headers: {
                "projectID": "sk6usfedahb5",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+`${userToken}`
            }
        })
        const data = res.json();
        console.log("deletedAll: ", data);
    } catch(error) {
        console.error("error adding product to wishlist: ", error.message);
    }
}