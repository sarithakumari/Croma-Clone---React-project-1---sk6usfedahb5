const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter=`;

export async function dealsProductDataApi(category) {
    try {
        const res = await fetch(URL+`{"subCategory":"${category}"}` , {
            method: "GET",
            headers: {
                projectID: "sk6usfedahb5",
            }
        });
        const data = await res.json();
        console.log(`${category}:`,data.data);
        return data.data;

    } catch(error) {
        console.error(`error fetching data from ${category} api`, error.message);
    }
}