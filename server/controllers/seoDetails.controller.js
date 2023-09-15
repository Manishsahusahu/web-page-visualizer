const axios = require("axios");

exports.seoDetails = async function (req, res) {
  try {
    // const id = "09151429-6660-0216-0000-d17d42a5a5f9";
    const id = req.id;

    // setTimeout(async () => {
    console.log("task id is ", id);
    // get all the onpage api results;
    const response = await axios({
      method: "get",
      url: "https://api.dataforseo.com/v3/on_page/summary/" + id,
      auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
      headers: {
        "content-type": "application/json",
      },
    });
    const result = response["data"]["tasks"];
    // Result data
    // console.log(result[0].result);
    // console.log(response);
    res.json({
      message: "end point has been hitted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
