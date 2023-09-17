import React from "react";

const DataShow = ({ response, heading }) => {
  const printValue = function (value) {
    if (value === null) return "null";
    if (typeof value === "boolean") return value.toString();
    return value;
  };

  return (
    <div className="mt-32 flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold text-center">{response && heading}</h2>
      <div className="flex justify-center items-center ">
        <div className="flex flex-wrap w-11/12 md:justify-between justify-center items-center">
          {response &&
            Object.entries(response).map(([key, value]) => {
              if (key !== "checks" && key !== "ssl_info") {
                return (
                  <div
                    key={key}
                    className="flex flex-col border-2 h-[10rem] w-[15rem] justify-center items-center mt-5 p-2 overflow-hidden"
                  >
                    <h2 className="text-xl font-bold text-center">
                      {key.slice(0, 1).toUpperCase() +
                        key.slice(1).split("_").join(" ")}
                    </h2>
                    <p>{printValue(value)}</p>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default DataShow;
