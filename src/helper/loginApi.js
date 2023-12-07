const URL = `https://academics.newtonschool.co/api/v1/user/login`;

export async function loginApi(email, password) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        projectID: "sk6usfedahb5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "appType": "ecommerce"
      })
    };
    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    console.log("data from login: ", data);
    return data;
  } catch (error) {
    console.error("error from loginApi: ", error.message);
  }
}
