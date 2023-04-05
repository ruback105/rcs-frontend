import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [array, setArray] = useState([]);

  console.log(array);

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((data) => {
      data.json().then((parsedData) => {
        setArray(parsedData.products);
      });
    });
  }, []);

  return (
    <div className="m-8 flex flex-wrap justify-center items-center gap-5">
      {array.map((item) => {
        return (
          <Card
            src={item.thumbnail}
            name={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default App;
