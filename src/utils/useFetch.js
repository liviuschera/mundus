import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return data;
}

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();
//                 setData(data);
//             } catch (error) {
//                 console.error(`Error fetching data: ${error.message}`);
//             }
//         }

//         fetchData();
//     }, [url]);

//     return data;
// };

// export default useFetch;
