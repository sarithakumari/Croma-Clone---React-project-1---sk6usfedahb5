export async function getLocationApi(pincode) {
    try {
      const URL = `https://api.postalpincode.in/pincode/${pincode}`;
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data[0]);
      return data[0];
      //   console.log(data[0].PostOffice[0].District);
    //   handleSetLocation(data[0].PostOffice[0].District);
    } catch (error) {
    //   handleSetLocation("Invalid Pincode");
        console.error("error in fetching location: ", error.message);
    }
  }