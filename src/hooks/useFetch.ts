// import { BASE_URL } from "@/api/baseUrl";
// import { useEffect, useState } from "react"

// type Param =  "documentation" | `questions${string}` | "categories";

// function useFetch<T>(param: Param) {
//     const [data, setData] = useState<T | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [loading, setLoading] = useState<boolean>(false);

//     async function fetchData() {
//         setLoading(true);
//         try {
//             const response = await fetch(BASE_URL + param);
//             if(!response.ok){
//                 throw new Error("Xatolik bor: " + response.status);
//             }
//             const data = await response.json();
//             setData(data);
//         } catch (error: any) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }
//     useEffect(()=> {
//         fetchData();
//     }, []); 
//   return { data, error, loading};
// }

// export default useFetch;


import { BASE_URL } from "@/api/baseUrl";
import { useEffect, useState } from "react";

type Param = "documentation" | `questions${string}` | "categories";

function useFetch<T>(param: Param) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    setLoading(true);
    try {
      console.log("Fetching:", BASE_URL + param);

      
      const url =
        BASE_URL.endsWith("/") && param.startsWith("/")
          ? BASE_URL + param.slice(1)
          : BASE_URL + param;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Xatolik bor: " + response.status);
      }

      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    
  }, [param]);

  return { data, error, loading };
}

export default useFetch;
