const URL = `https://academics.newtonschool.co/api/v1/ecommerce/order`;

export async function checkoutApi(productId, addressType, address, userToken) {
  try {
    // console.log({productId, addressType, address, userToken})
    const body = {
        "productId": productId,
        "quantity": 1,
        "addressType": addressType.toUpperCase(),
        "address":{
            "street":address.street,
            "city":address.city,
            "state":address.state,
            "country":address.country,
            "zipCode":address.pincode,
        }
    }
    const requestOption = {
        method: "POST",
        headers: {
          "projectID": "sk6usfedahb5",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+`${userToken}`
        },
        body: JSON.stringify(body)
      }
      console.log(requestOption);
    // const res = await fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     "projectID": "sk6usfedahb5",
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer "+`${userToken}`
    //   },
    //   body: JSON.stringify({
    //     "productId": productId,
    //     "addressType": addressType,
    //     "address": JSON.stringify(address),
    //   })
    // });
    const res = await fetch(URL, requestOption);
    const data = await res.json();
    console.log("checkout: ", data);
    return data;
  } catch (error) {
    console.error("Error in CheckingOut:", error.message);
  }
}
