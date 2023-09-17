import "./App.css";
import getSeoData from "./api calls/getSeoData";
import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState(null);
  const [enteredUrl, setEnteredUrl] = useState("");
  const [headings, setHeadings] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  const handleChange = function (e) {
    setEnteredUrl(e.target.value);
    console.log(enteredUrl);
  };

  const handleClick = async function () {
    console.log("entered url is ", enteredUrl);
    const dataResponse = await getSeoData(enteredUrl);
    console.log("dataresponse is", dataResponse);
    localStorage.setItem("seoData", JSON.stringify(dataResponse));
    // const dataResponse= JSON.parse(localStorage.getItem('seoData'));
    // console.log(dataResponse)
    // const data = dataResponse.data.data[0].result[0].page_metrics;

    // setResponse(data);
    // console.log(data);
    // setResponse(data);
    // setHeadings([...headings, Object.keys(data)]);
    // setParagraphs([...paragraphs, Object.values(data)]);
  };

  useEffect(() => {
    console.log("headings and paragraphs are here");
    console.log(headings);
    console.log(paragraphs);
  }, [headings, paragraphs]);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <form className="w-full max-w-sm m-5">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Enter the url
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={enteredUrl}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                onClick={handleClick}
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Get onPage details
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-wrap w-11/12 justify-between">
            {response &&
              Object.entries(response).map(([key, value]) => {
                if (key !== "checks") {
                  return (
                    <div
                      key={key}
                      className="flex flex-col border-2 h-[10rem] w-[15rem] justify-center items-center mt-5"
                    >
                      <h2 className="text-xl font-bold">{key}</h2>
                      <p>{value}</p>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
