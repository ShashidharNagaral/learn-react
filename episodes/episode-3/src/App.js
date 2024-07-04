import { useEffect } from "react";
import { useState } from "./Hooks";

const App = () => {
  // const [number1, setNumber1] = useState(0); // id = 0
  // const [number2, setNumber2] = useState(0); // id = 1

  const fetchData = async () => {
    console.log('"sdsd');
    const data = await fetch(
      "https://api.zepto.co.in/api/v3/inventory/catalogue/vertical-feed?store_id=044a06cd-5792-44a6-be6b-d5747683349b&start_range=0&end_range=7&is_continuous_feed=false"
    );
    const json = await data.json();
    console.log(json);
  };

  fetchData();

  return <div>dd</div>;
};

export default App;
