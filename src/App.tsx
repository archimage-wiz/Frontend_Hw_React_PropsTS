import "./App.css";
import { StarsRating } from "./Components/StarsRating/StarsRating";
import { useEffect } from "react";
import { useState } from "react";
import { Listing } from "./Components/Listing/Listing";

function App() {
    const [data, setData] = useState([]);

    async function getData() {
        const response = await fetch("/etsy.json");
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        const datax = getData();
        datax.then((data) => setData(data));
    }, []);

    return (
        <>
            <StarsRating rating={5} />
            <StarsRating rating={3} />
            <StarsRating rating={0} />
            <StarsRating rating={-1} />
            <StarsRating rating={6} />
            {data.length > 0 && <Listing items={data} />}
        </>
    );
}

export default App;
