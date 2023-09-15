import "./App.css";
import axios from "axios";

function App() {
  const requestData = {};
  const getSeoData = async function () {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/seodetails",
        { targetUrl: "https://www.cuchd.in/online-request/" }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center">Hello world!</h1>;
      <button onClick={getSeoData}>click it</button>
    </>
  );
}

export default App;
