const URL = `https://academics.newtonschool.co/api/v1/user/signup`;

export async function signUpApi(name, email, password) {
  try {
    const requestOptions = {
        method: "POST",
        headers: {
            "projectID": "sk6usfedahb5",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "name": name, "email": email, "password": password, "appType": "ecommerce"})
    }
    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    console.log("data from signup.js:", data);
    return data;
  } catch (error) {
    console.error("Error in Signing Up:", error.message);
  }
}
