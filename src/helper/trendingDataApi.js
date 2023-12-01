const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"ratings":1}`;

export async function trendingDataApi() {
    try {
        const res = await fetch(URL, {
            method: "GET",
            headers: {
                projectID: "sk6usfedahb5",
            }
        });
        const data = await res.json();
        // console.log("trending", data.data);
        return data.data;

    } catch(error) {
        console.error("error fetching trending data:", error.message)
    }
}