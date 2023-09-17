import axios from "axios";

const getSeoData = async function (targetUrl) {
  try {
    const response = await axios.post("http://localhost:5001/api/seodetails", {
      targetUrl,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getSeoData;
