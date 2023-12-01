const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"price":1}`

export async function dealsDataApi() {
    try{
        const res = await fetch(URL, {
            method: "GET",
            headers: {
                projectID: "sk6usfedahb5",
            }
        });
        const data = await res.json();
        // console.log("data from deals", data.data);
        return data.data;
    } catch(error) {
        console.error("error in fetching deals data", error.message);
    }
}

// ascending: 1
// descending: -1