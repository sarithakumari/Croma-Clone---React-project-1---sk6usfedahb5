const URL = `https://academics.newtonschool.co/api/v1/ecommerce/order/`;

export async function getOrderHistory(userToken) {
  const res = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + `${userToken}`,
      projectID: "sk6usfedahb5",
      "Content-Type": "application/json",
    }
  });
  const data = await res.json();
  console.log(data);
  return data;
}
