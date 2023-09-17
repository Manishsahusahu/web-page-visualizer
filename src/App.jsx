import "./App.css";
import getSeoData from "./api calls/getSeoData";
import { useEffect, useState } from "react";
import DataShow from "./components/DataShow";

function App() {
  const [metricsResponse, setmetricsResponse] = useState(null);
  const [checks, setChecks] = useState(null);
  const [domainInfo, setDomainInfo] = useState(null);
  const [domainInfoChecks, setDomainInfoChecks] = useState(null);
  const [domainSSL, setDomainSSL] = useState(null);
  const [enteredUrl, setEnteredUrl] = useState("");
  const [timer, setTimer] = useState(-1);

  const handleChange = function (e) {
    setEnteredUrl(e.target.value);
    console.log(enteredUrl);
  };

  const handleClick = async function () {
    setTimer(35);
    console.log("entered url is ", enteredUrl);
    const dataResponse = await getSeoData(enteredUrl);
    console.log("dataResponse is", dataResponse);
    // // localStorage.setItem("seoData", JSON.stringify(dataResponse));
    // const dataResponse = JSON.parse(localStorage.getItem("seoData"));
    console.log(dataResponse);
    const data = dataResponse.data.data[0].result[0];

    setmetricsResponse(data.page_metrics);
    setDomainInfo(data.domain_info);
    setDomainInfoChecks(data.domain_info.checks);
    setDomainSSL(data.domain_info.ssl_info);
    setChecks(data.page_metrics.checks);
    console.log(data);
  };

  useEffect(() => {
    const time = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [timer]);

  const waitString = (
    <h3 className="font-bold">
      Wait <span className="text-2xl">{timer}</span> seconds! Results are being
      prepared...
    </h3>
  );

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <form className="w-full m-5 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-6">
            <div className="">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Enter the url
              </label>
            </div>
            <div className="">
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
            <div className=""></div>
            <div className="">
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
        <div>{timer >= 0 ? waitString : ""}</div>
        {timer < 0 && (
          <div>
            <DataShow response={domainInfo} heading={"Domain info:"} />
            <DataShow
              response={domainInfoChecks}
              heading={"Domain checks info:"}
            />
            <DataShow response={domainSSL} heading={"Domain ssl info:"} />
            <DataShow response={metricsResponse} heading={"Page metrics:"} />
            <DataShow response={checks} heading={"Page metrics checks:"} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
