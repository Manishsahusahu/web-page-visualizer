const axios = require("axios");

exports.seoDetails = async function (req, res) {
  try {
    const id = req.id;

    console.log("task id is ", id);
    // get all the onpage api results;

    // const post_array = [];
    // post_array.push({
    //   id: id,
    //   filters: [
    //     ["resource_type", "=", "html"],
    //     "and",
    //     ["meta.scripts_count", ">", 10],
    //   ],
    //   order_by: ["meta.content.plain_text_word_count,desc"],
    //   limit: 5,
    // });

    // const response = await axios({
    //   method: "post",
    //   url: "https://api.dataforseo.com/v3/on_page/pages",
    //   auth: {
    //     username: process.env.USERNAME,
    //     password: process.env.PASSWORD,
    //   },
    //   data: post_array,
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    // const result = response["data"]["tasks"];
    // console.log(result)
    res.json({
      message: "end point has been hitted",
    //   data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
