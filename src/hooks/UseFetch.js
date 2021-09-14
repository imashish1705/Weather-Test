import {useState, useEffect} from 'react';
const UseFetch = (initialUrl) => {
  // create state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const[degreeType,setdegreeType] = useState("fahrenheit");
  const [c , f] = useState(false);
 console.log(degreeType); 
 const onChange = (e) => {
   const data = setdegreeType(e.target.value);
   //console.log(data);
 }
  useEffect(() => {
    if(!url) return;
    setIsLoading(true);
    // clear old search
    setData(null);
    setError(null);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
            // error handling for nonexistent data
            setIsLoading(false);
            if(data.cod >= 400) {
                setError(data.message);
                return;
            }
            setData(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
  }, [url]);

  return { data, error, isLoading, setUrl,data,degreeType,onChange};
};

export default UseFetch;
