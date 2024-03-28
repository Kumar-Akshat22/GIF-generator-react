import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
    
    const [tag, setTag] = useState("car");
    const { gif , loading , fetchData } = useGif(tag);

    return (
        <div className="w-1/2 bg-blue-500 flex flex-col gap-y-5 items-center rounded-lg border border-black mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline font-bold uppercase">
                RANDOM {tag} GIF
            </h1>
            {loading ? <Spinner /> : <img src= {gif} width="450"></img>}

            <input
                className="w-10/12 bg-white rounded-md text-lg py-2 text-center"
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            ></input>
            <button
                onClick={() => fetchData(tag)}
                className="w-10/12 bg-white rounded-md text-lg py-2 mb-[20px]"
            >
                GENERATE
            </button>
        </div>
    );
}

export default Tag;
