import axios from "axios";

const getSeoData = async function (targetUrl) {
  try {
    const response = await axios.post("https://api-call.up.railway.app/api/seodetails", {
      targetUrl,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getSeoData;
